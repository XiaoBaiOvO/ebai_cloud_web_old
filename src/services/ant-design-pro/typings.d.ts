// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type CommentReplyType = {
    id: string;
    author: string;
    avatar: string;
    content: string;
    datetime: string;
  };

  type CommentListType = {
    id: string;
    author: string;
    avatar: string;
    content: string;
    datetime: string;
    likes: string[];
    dislikes: string[];
    reply: CommentReplyType[];
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RequestLogItem = {
    url?: string;
    ip?: string;
    location?: string;
    userAgent?: string;
    userName?: string;
    date?: string;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type MobileCaptcha = {
    mobile?: string;
  };

  type NewsList = {
    newsList?: NewsDetail[];
  };

  type NewsDetail = {
    brief: string;
    image: string;
    image3: string;
    keywords: string;
    focus_date: string;
    ext_field: string;
    count: string;
    id: string;
    title: string;
    image2: string;
    url: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };

  // comment type
  type CommentAction = {
    key?: string;
    isAction?: boolean;
  };

  type CommentLikeRequest = {
    userid?: string;
    id?: string;
  };

  type CommentAddRequest = {
    userid?: string;
    name?: string;
    avatar?: string;
    content?: string;
  };

  type CommentReplyRequest = {
    userid?: string;
    id?: string;
    name?: string;
    avatar?: string;
    content?: string;
  };
}
