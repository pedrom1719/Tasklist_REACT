import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/tasks";
import filterReducer from "./reducers/filter";

const store = configureStore({
  reducer: {
    task: taskReducer,
    filter: filterReducer,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;

export default store;
