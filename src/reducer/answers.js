import { ADD_ANSWER } from '../const';


export default (answers = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ANSWER:
      return answers.concat(payload);
  };
  return answers;
};
