import UseAuth from '../../common/UseAuth';

export default function SaveCredentials(response) {
  UseAuth({ user: response.user, token: response.authorization });
  localStorage.setItem('token', JSON.stringify(response.authorization));
  localStorage.setItem('user', JSON.stringify(response.user));
}
