import request from '@/router/axios';
export const loginByUsername = (account,password) => request({
  url: '/share/user/login',
  method: 'post',
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  params: {
    account,
    password
  }
});

