import { combineReducers } from "redux";
import { positionsReducer } from "./positions/positions-reducer";
import { filterReducer } from "./filters/filter-reducer";

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filterReducer,
});
