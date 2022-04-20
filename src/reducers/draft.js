import {
  READ_DRAFT_MAIL,
  STORE_DRAFT_MAIL,
  DELETE_DRAFT_MAIL,
  RESTORE_DRAFT_MAIL,
} from "../actions/draft.js";

let initialState = {};
initialState.id = 2001;
initialState.data = [
  {
    id: 2000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "Draft mail",
    time: "2018-01-23T18:25",
    body: "you can edit this",
  },
];
let newArray = [];
let newId = 0;
const draft = (state = {}, action) => {
  switch (action.type) {
    case READ_DRAFT_MAIL:
      //initialState = { ...state };
      return initialState;
    case STORE_DRAFT_MAIL:
      var found = false;
      for (var i = 0; i < initialState.data.length; i++) {
        if (initialState.data[i].id === action.payload.id) {
          initialState.data[i] = action.payload;
          found = true;
        }
      }
      if (!found) {
        newArray = state.data;
        newId = state.id;
        let obj = {
          ...action.payload,
          id: newId,
          time: new Date().toUTCString(),
        };
        newArray.push(obj);
        initialState = { ...state, data: newArray, id: newId + 1 };
      }

      return initialState;
    case DELETE_DRAFT_MAIL:
      newArray = initialState.data.filter((x) => x.id !== action.payload);
      newId = initialState.id;
      initialState = { ...state, data: newArray, id: newId };
      return initialState;

    case RESTORE_DRAFT_MAIL:
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
    default:
      return state;
  }
};
export default draft;