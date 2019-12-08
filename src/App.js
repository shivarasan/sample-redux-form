import React from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ReduxForm from "./ReduxForm";

const reducers = combineReducers({ form: formReducer });

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <ReduxForm />
    </Provider>
  );
}

export default App;
