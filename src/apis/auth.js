import api from './api';

const register = async (data) => {
  const accountInfo = await api({
    method: 'POST',
    url: '/auths/register',
    data,
  });
  return accountInfo;
};

const login = async (data) => {
  const loginInfo = await api({
    method: 'POST',
    url: '/auths/login',
    data,
  });
  return loginInfo;
};

export { register, login };
