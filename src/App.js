import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import RecipesList from './components/Books/Book-list';
import RecipeItemDetail from './components/Books/Book-item-details';

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
                return <RecipesList />;
              }}
            />
            <Route
              exact
              path="/image/:id"
              render={props => {
                return <RecipeItemDetail {...props} />;
              }}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
