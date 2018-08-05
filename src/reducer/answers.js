import { ADD_ANSWER, RESET_ANSWERS } from '../const';


export default (answers = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_ANSWER:
      return answers.concat(payload);
    case RESET_ANSWERS:
      return [];
  };
  return answers;
};
