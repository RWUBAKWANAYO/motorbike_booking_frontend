const UseAuth = (data) => {
  const User = data ? data.user : JSON.parse(localStorage.getItem('user'));

  const config = { headers: { Authorization: data ? data.token : JSON.parse(localStorage.getItem('token')) } };

  return { User, config };
};

export default UseAuth;
