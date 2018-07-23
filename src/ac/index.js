import { ADD_USERNAME } from '../constants'

export function addUsername(username) {
  return {
    type: ADD_USERNAME,
    payload: { username }
  }
};
