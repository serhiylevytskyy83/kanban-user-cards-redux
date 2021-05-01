import {applyMiddleware, createStore} from "redux";
import {reducer} from "./reducer";
import {logger} from "redux-logger";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
export let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
