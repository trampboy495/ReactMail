import { READ_SENT_MAIL } from "../actions/sentMail.js";
import { STORE_SENT_MAIL, DELETE_SENT_MAIL } from "../actions/sentMail.js";

let initialState = {};
initialState.id = 1001;
initialState.data = [
  {
    id: 1000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "This is a sent mail",
    time: "2018-01-23T18:25",
    body: "All your mails that are successfullly sent will be listed here",
  },
];
let newArray = [];
let newId = 0;
const sent = (state = {}, action) => {
  switch (action.type) {
    case READ_SENT_MAIL:
      return initialState;

    case STORE_SENT_MAIL:
      newArray = initialState.data;
      newId = initialState.id;
      let obj = {
        ...action.payload,
        id: newId,
        time: new Date().toUTCString(),
      };
      newArray.push(obj);
      initialState = { ...state, data: newArray, id: newId + 1 };
      return initialState;

    case DELETE_SENT_MAIL:
      newArray = initialState.data.filter((x) => x.id !== action.payload);
      newId = initialState.id;
      initialState = { ...state, data: newArray, id: newId };
      return initialState;

    default:
      return state;
  }
};
export default sent;
