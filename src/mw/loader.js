import { START, SUCCESS, FAIL } from '../const';

export default store => next => action => {
  const { getUrl, type, ...rest } = action;
  if (!getUrl) return next(action);

  next({
    ...rest, type: type + START
  });

  fetch(getUrl)
    .then(res => res.json())
    .then(response => next({ ...rest, type: type + SUCCESS, response }))
    .catch(error => next({ ...rest, type: type + FAIL, error }))

};
