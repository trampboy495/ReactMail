import { STORE_COMPOSE_MAIL } from "../actions/compose.js";

let initialState = {};
initialState.data = {
  id: "",
  from: "user@tcs.com",
  to: "",
  subject: "",
  time: "",
  body: "",
};

const compose = (state = initialState, action) => {
  switch (action.type) {
    case STORE_COMPOSE_MAIL:
      if (action.payload) {
        let compose = { ...state, data: action.payload };

        return compose;
      } else {
        return initialState;
      }
    default:
      return state;
  }
};
export default compose;