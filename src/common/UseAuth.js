const UseAuth = (data) => {
  const User = data ? data.user : JSON.parse(localStorage.getItem('user'));
  const Token = data ? data.token : JSON.parse(localStorage.getItem('token'));
  return { User, Token };
};

export default UseAuth;
