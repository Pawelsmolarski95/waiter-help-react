import { applyMiddleware, combineReducers,  compose,  createStore } from "redux";
import thunk from "redux-thunk";

import initialState from "./initialState";
import tableStatusReducer from "./statusReducer";
import tablesReducer from "./tableReducer";


const subreducers = {
    tables: tablesReducer,
    status: tableStatusReducer
    
}

const reducer = combineReducers(subreducers);

const store = createStore(
    
    reducer,
    initialState,

    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;