import { call, put, takeLatest } from "redux-saga/effects";

import { REQUEST_API_DATA, receiveApiData } from "../actions/inbox";
import { REQUEST_INBOX_DATA, receiveInboxData } from "../actions/inboxMail";
//import { fetchData } from "../apis/api";

const fetchInbox = async () => {
  try {
    const response = await fetch("https://react-api-d3d10-default-rtdb.firebaseio.com/inbox.json");
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

const fetchInboxData = async (id) => {
  try {
    
    const response = await fetch("https://react-api-d3d10-default-rtdb.firebaseio.com/mails.json");
    const inboxData = await response.json();
    return inboxData[id - 1];
  } catch (e) {
    console.log(e);
  }
};



function* getApiData(action) {
  try {
    // do api call
    const data = yield call(fetchInbox);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* getInboxData(action) {
  try {
    // do api call
    const inboxData = yield call(fetchInboxData,action.payload);
    yield put(receiveInboxData(inboxData));
  } catch (e) {
    console.log(e);
  }
}
export function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

export function* myInbox() {
  yield takeLatest(REQUEST_INBOX_DATA, getInboxData);
}
