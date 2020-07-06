import React from 'react';
import { shallow, mount } from 'enzyme';
import RecipesList from './Book-list';
import RecipeItem from './Book-item';
import { MemoryRouter } from 'react-router-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import dataReducer from '../../store/reducers/data_reducer';
import thunk from 'redux-thunk';
import { postsFetchData } from '../../store/actions/data_action';

configure({ adapter: new Adapter() });
//Snapshot !!!!!!!
describe('<Books-list />', () => {
  it('should render correctly in "debug" mode', () => {
    const ListRecipe = shallow(<RecipesList debug />);

    expect(ListRecipe).toMatchSnapshot();
  });

  // Verify Header Books List
  it('Find Book Item', () => {
    const header = <h1 className="css-yw7oed">List of Books</h1>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  //Find Books
  let store;
  let wrapper;
  beforeEach(() => {
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const rootReducer = combineReducers({
      fieldData: dataReducer,
    });
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter>
          <RecipesList />
        </MemoryRouter>
      </Provider>
    );
  });

  it('Find Book Item', () => {
    let expectedRecipeItem = {
      calories: '516 kcal',
      carbos: '47 g',
      desciption:
        'There are many idiosyncratic typing styles in between novice-style "hunt and peck" and touch typing. For example, many "hunt and peck" typists have the keyboard layout memorized and are able to type while focusing their gaze on the screen. Some use just two fingers, while others use 3-6 fingers. Some use their fingers very consistently, with the same finger being used to type the same character every time, while others vary the way they use their fingers. (Wikipedia)',
      description:
        'There’s nothing like the simple things in life - the smell of freshly cut grass, sitting outside on a nice sunny day, spending time with friends and family. Well here is a book that delivers simple culinary pleasures - some nice fresh fish with a crispy crust, crunchy potato wedges and some delightfully sweet sugar snap peas flavoured with cooling mint. Slip into something comfortable and relax into a delicious dinner!',
      difficulty: 0,
      fats: '8 g',
      favorites: 1,
      headline: 'with Sweet Potato Wedges and Minted Snap Peas',
      id: '533143aaff604d567f8b4571',
      image:
        'https://d3hvwccx09j84u.cloudfront.net/web/image/533143aaff604d567f8b4571.jpg',
      ingredients: ['ingredientttttttttt 1', 'ingredient 1', 'ingredient 1'],
      name: 'Crispy Fish Goujons ',
      proteins: '43 g',
      rating: 5,
      thumb:
        'https://d3hvwccx09j84u.cloudfront.net/thumb/image/533143aaff604d567f8b4571.jpg',
      time: 'PT35M',
      valueSelected: false,
    };

    return store.dispatch(postsFetchData()).then(() => {
      expect(store.getState().fieldData.books[0]).toEqual(expectedRecipeItem);
    });
  });
});
