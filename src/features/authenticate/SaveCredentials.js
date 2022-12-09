import UseAuth from '../../common/UseAuth';

const SaveCredentials = (response) => {
  UseAuth({ user: response.user, token: response.authorization });
  localStorage.setItem('token', JSON.stringify(response.authorization));
  localStorage.setItem('user', JSON.stringify(response.user));
};

export default SaveCredentials;
