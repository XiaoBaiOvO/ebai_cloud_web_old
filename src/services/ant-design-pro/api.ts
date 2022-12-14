// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';
import axios from 'axios';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/user/currentUser', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/user/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getMobileCaptcha(body: API.MobileCaptcha, options?: { [key: string]: any }) {
  return request<API.FakeCaptcha>('/api/user/login/mobile/captcha', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export async function getNewsList(options?: { [key: string]: any }) {
  return request<API.NewsList>('/api/getNewsList', {
    method: 'POST',
    ...(options || {}),
  });
}

export function testLogin() {
  return new Promise((resolve, reject) => {
    axios.post('/api/test').then((result) => {
      resolve(result);
    });
  });
}

export async function getCommentList(options?: { [key: string]: any }) {
  return request<API.CommentListType[]>('/api/comment/getCommentList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(options || {}),
  });
}

// export async function getNewsList(options?: { [key: string]: any }) {
//   return request<API.NewsListType[]>('/api/news/getNewsList', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     ...(options || {}),
//   });
// }

export function likeComment(body: API.CommentLikeRequest, options?: { [key: string]: any }) {
  return request<API.CommentListType[]>('/api/comment/like', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export function dislikeComment(body: API.CommentLikeRequest, options?: { [key: string]: any }) {
  return request<API.CommentListType[]>('/api/comment/dislike', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export function commentReply(body: API.CommentReplyRequest, options?: { [key: string]: any }) {
  return request<API.CommentListType[]>('/api/comment/reply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

export function commentAdd(body: API.CommentAddRequest, options?: { [key: string]: any }) {
  return request<API.CommentListType[]>('/api/comment/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
