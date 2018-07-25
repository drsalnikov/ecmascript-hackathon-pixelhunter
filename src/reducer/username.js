import { ADD_USERNAME } from '../const';

export default (username = '', action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_USERNAME:
      return Object.assign({}, username, { username: payload.username });
  }

  return username;
}
