import api from "./api";

const register = async (data) => {
  const accountInfo = await api({
    method: "POST",
    url: "/auths/register",
    data,
  });
  return accountInfo;
};

export { register };
