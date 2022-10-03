import {
  commentAdd,
  commentReply,
  dislikeComment,
  getCommentList,
  likeComment,
} from '@/services/ant-design-pro/api';
import { DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '@ant-design/icons';
import { useModel } from '@umijs/max';
import { Avatar, Button, Comment, Divider, Form, Input, List, Tooltip } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { createElement, useEffect, useState } from 'react';

const { Search } = Input;

const ChatBox: React.FC = () => {
  const [replyAction, setReplyAction] = useState<API.CommentAction>({ key: '', isAction: false });
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');
  const [commentList, setCommentList] = useState<API.CommentListType[]>([]);
  const { initialState } = useModel('@@initialState');
  // @ts-ignore
  const { currentUser } = initialState;

  const commentTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value);
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
    const request: API.CommentAddRequest = {
      userid: currentUser.userid,
      name: currentUser.name,
      avatar: currentUser.avatar,
      content: value,
    };
    setSubmitting(true);
    commentAdd(request).then((r) => {
      setValue('');
      refreshCommentList().then();
      setSubmitting(false);
      console.log(r);
    });
  };

  const commentActions = (item: API.CommentListType) => {
    const request: API.CommentLikeRequest = { id: item.id, userid: currentUser.userid };

    const like = async () => {
      setCommentList(await likeComment(request));
    };

    const dislike = async () => {
      setCommentList(await dislikeComment(request));
    };

    const changeActive = () => {
      if (replyAction.key) {
        if (replyAction.key == item.id + '0') {
          setReplyAction({ key: item.id + '0', isAction: !replyAction.isAction });
        } else {
          setReplyAction({ key: item.id + '0', isAction: replyAction.isAction });
        }
      } else {
        setReplyAction({ key: item.id + '0', isAction: !replyAction.isAction });
      }
    };

    const submitReply = async (replyValue: string) => {
      const replyRequest: API.CommentReplyRequest = {
        id: item.id,
        userid: currentUser.userid,
        name: currentUser.name,
        avatar: currentUser.avatar,
        content: replyValue,
      };
      setCommentList(await commentReply(replyRequest));
      changeActive();
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
      replyAction.key == item.id + '0' && replyAction.isAction ? (
        <Search
          onSearch={submitReply}
          enterButton="sent"
          size={'small'}
          style={{ marginBottom: -5 }}
        />
      ) : null,
    ];
  };

  const replyActions = (item: API.CommentListType, replyItem: API.CommentReplyType) => {
    const changeActive = () => {
      if (replyAction.isAction) {
        if (replyAction.key == item.id + replyItem.id) {
          setReplyAction({ key: item.id + replyItem.id, isAction: !replyAction.isAction });
        } else {
          setReplyAction({ key: item.id + replyItem.id, isAction: replyAction.isAction });
        }
      } else {
        setReplyAction({ key: item.id + replyItem.id, isAction: !replyAction.isAction });
      }
    };

    const submitReply = async (replyValue: string) => {
      const replyRequest: API.CommentReplyRequest = {
        id: item.id,
        userid: currentUser.userid,
        name: currentUser.name,
        avatar: currentUser.avatar,
        content: replyValue,
      };
      setCommentList(await commentReply(replyRequest));
      changeActive();
    };

    return [
      <span key="comment-basic-reply-to" onClick={changeActive}>
        Reply to
      </span>,
      replyAction.key == item.id + replyItem.id && replyAction.isAction ? (
        <Search
          onSearch={submitReply}
          enterButton="sent"
          size={'small'}
          style={{ marginBottom: -5 }}
        />
      ) : null,
    ];
  };

  return (
    <div style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}>
      <Comment
        style={{ marginTop: -16 }}
        avatar={<Avatar src={currentUser.avatar} alt="" />}
        content={
          <div>
            <Form.Item>
              <TextArea
                rows={4}
                value={value}
                onChange={commentTextInput}
                autoSize={{ minRows: 3 }}
                onPressEnter={submitComment}
              />
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
        itemLayout="horizontal"
        style={{ marginTop: -32 }}
        dataSource={commentList}
        renderItem={(item) => (
          <div>
            <Comment
              style={{ marginTop: -16 }}
              actions={commentActions(item)}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            >
              <List
                style={{ marginTop: -16 }}
                dataSource={item.reply}
                locale={{ emptyText: ' ' }}
                renderItem={(replyItem) => (
                  <Comment
                    actions={replyActions(item, replyItem)}
                    author={replyItem.author}
                    avatar={replyItem.avatar}
                    content={replyItem.content}
                    datetime={replyItem.datetime}
                  />
                )}
              />
            </Comment>
            <Divider style={{ marginTop: -12 }} />
          </div>
        )}
      />
    </div>
  );
};

export default ChatBox;
