import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import BooksList from './components/Books/Book-list';
import BookItemDetail from './components/Books/Book-item-details';

//import librairies of Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dataReducer from './store/reducers/data_reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  fieldData: dataReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => {
                return <BooksList />;
              }}
            />
            <Route
              exact
              path="/image/:id"
              render={props => {
                return <BookItemDetail {...props} />;
              }}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
