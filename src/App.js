import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import ReduxForm from "./ReduxForm";
import logger from 'redux-logger';

const reducers = combineReducers({ form: formReducer });

const store = createStore(reducers, applyMiddleware(logger));

function App() {
  return (
    <Provider store={store}>
      <ReduxForm />
    </Provider>
  );
}

export default App;
