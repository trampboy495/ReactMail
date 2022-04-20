import { RECEIVE_API_DATA, DELETE_INBOX_MAIL } from "../actions/inbox.js";

let initialState = {};

const data = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      initialState = {
        ...state,
        data: action.payload,
      };

      return initialState;

    case DELETE_INBOX_MAIL:
      let newArray = initialState.data.filter((x) => x.id !== action.payload);
      initialState = { ...state, data: newArray };
      return initialState;

    default:
      return state;
  }
};
export default data;