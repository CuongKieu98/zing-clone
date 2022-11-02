import { applyMiddleware } from "redux";
import reducer from "../reducers";
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

export default function configureStores(initialState) {
  return configureStore({ reducer }, initialState, applyMiddleware(thunk));
}
