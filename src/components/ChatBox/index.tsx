import { dislikeComment, getCommentList, likeComment } from '@/services/ant-design-pro/api';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Avatar, Button, Comment, Form, Input, List, Tooltip } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { createElement, useEffect, useState } from 'react';

const { Search } = Input;

const ChatBox: React.FC = () => {
  const [action, setAction] = useState<API.CommentAction>({ id: '', action: false });
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const [commentList, setCommentList] = useState<API.CommentListType[]>([]);
  const { initialState } = useModel('@@initialState');
  // @ts-ignore
  const { currentUser } = initialState;

  const commentTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const refreshCommentList = async () => {
    setCommentList(await getCommentList());
  };

  useEffect(() => {
    refreshCommentList().then();
  }, []);

  const submitComment = () => {
    if (!value) return;
    console.log(value);
    setSubmitting(true);
    setTimeout(() => {
      setValue('');
      setSubmitting(false);
    }, 500);
  };

  let isReply = false;

  const commentActions = (item: API.CommentListType) => {
    const request: API.CommentLikeRequest = { id: item.id, userid: currentUser.userid };

    const like = async () => {
      setCommentList(await likeComment(request));
    };

    const dislike = async () => {
      setCommentList(await dislikeComment(request));
    };

    const submitReply = (replyValue: string) => console.log(replyValue);

    const changeActive = () => {
      isReply = !isReply;
      console.log(isReply);
      if (action.action) {
        if (action.id == item.id) {
          setAction({ id: item.id, action: !action.action });
        } else {
          setAction({ id: item.id, action: action.action });
        }
      } else {
        setAction({ id: item.id, action: !action.action });
      }
    };

    return [
      <Tooltip key="comment-basic-like" title="Like">
        <span onClick={like}>
          {createElement(item.likes.indexOf(currentUser.userid) != -1 ? LikeFilled : LikeOutlined)}
          <span>{item.likes.length}</span>
        </span>
      </Tooltip>,
      <Tooltip key="comment-basic-dislike" title="Dislike">
        <span onClick={dislike}>
          {React.createElement(
            item.dislikes.indexOf(currentUser.userid) != -1 ? DislikeFilled : DislikeOutlined,
          )}
          <span>{item.dislikes.length}</span>
        </span>
      </Tooltip>,
      <span key="comment-basic-reply-to" onClick={changeActive}>
        Reply to
      </span>,
      action.id == item.id && action.action ? (
        <Search
          onSearch={submitReply}
          enterButton="sent"
          size={'small'}
          style={{ marginBottom: -5 }}
        />
      ) : null,
      isReply ? (
        <Search
          onSearch={submitReply}
          enterButton="sent"
          size={'small'}
          style={{ marginBottom: -5 }}
        />
      ) : null,
    ];
  };

  const replyActions = [<span key="comment-basic-reply-to">Reply to</span>];

  return (
    <div style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
      <Comment
        avatar={<Avatar src={currentUser.avatar} alt="" />}
        content={
          <div>
            <Form.Item>
              <TextArea rows={4} value={value} onChange={commentTextInput} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" loading={submitting} onClick={submitComment} type="primary">
                Add Comment
              </Button>
            </Form.Item>
          </div>
        }
      />
      <List
        dataSource={commentList}
        renderItem={(item) => (
          <li>
            <Comment
              actions={commentActions(item)}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            >
              <List
                dataSource={item.reply}
                renderItem={(replyItem) => (
                  <Comment
                    actions={replyActions}
                    author={replyItem.author}
                    avatar={replyItem.avatar}
                    content={replyItem.content}
                    datetime={replyItem.datetime}
                  />
                )}
              />
            </Comment>
          </li>
        )}
      />
    </div>
  );
};

export default ChatBox;
