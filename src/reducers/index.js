import pageSelection from "./page";
import blogSelection from "./blog";
import productSelection from "./product";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    page: pageSelection,
    blog: blogSelection,
    product: productSelection,
})

export default rootReducer