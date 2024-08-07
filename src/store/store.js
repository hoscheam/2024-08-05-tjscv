import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { images } from "../../db/db.json";
import currentReducer from "./current";
import ressourcesReducer, { addImages } from "./ressources";

export const store = configureStore({
  reducer: combineReducers({
    ressources: ressourcesReducer,
    current: currentReducer,
  }),
});
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(addImages(images));
