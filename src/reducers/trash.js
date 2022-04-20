import {
  READ_TRASH_MAIL,
  STORE_TRASH_MAIL,
  RESTORE_TRASH_MAIL,
} from "../actions/delete.js";

let initialState = {};
initialState.id = 3001;
let newArray = [];
let newId = 0;
initialState.data = [
  {
    id: 3000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "Trash mail",
    folder: "sent",
    folderId: "2",
    time: "2018-01-23T18:25",
    body: "you can restore this",
  },
];

const trash = (state = {}, action) => {
  switch (action.type) {
    case READ_TRASH_MAIL:
      //initialState = { ...state };
      return initialState;

    case STORE_TRASH_MAIL:
      if (action.payload.folder === "inbox") {
        var found = false;
        for (var i = 0; i < initialState.data.length; i++) {
          if (
            initialState.data[i].folderId === action.payload.folderId &&
            initialState.data[i].folder === "inbox"
          ) {
            found = true;
            console.log(initialState.data[i].folderId);
            break;
          }
        }
        if (!found) {
          newArray = initialState.data;
          newId = initialState.id;
          let obj = { ...action.payload, id: newId };
          newArray.push(obj);
          initialState = { ...state, data: newArray, id: state.id + 1 };
        }
        return initialState;
      } else {
        newArray = initialState.data;
        let newId = initialState.id;
        let obj = { ...action.payload, id: newId };
        newArray.push(obj);
        initialState = { ...state, data: newArray, id: state.id + 1 };
        return initialState;
      }
    case RESTORE_TRASH_MAIL:
      newArray = initialState.data.filter((x) => x.id !== action.payload);
      newId = initialState.id;
      initialState = { ...state, data: newArray, id: newId };
      return initialState;
    default:
      return state;
  }
};
export default trash;
