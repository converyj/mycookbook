/* one main root reducer - calling all the reducers and putting them in a single state object
- store only accepts one reducer 
*/

import { combineReducers } from 'redux';

import { loadingBarReducer } from 'react-redux-loading';
import recipes from './recipes';

export default combineReducers({
	loadingBar: loadingBarReducer,
	recipes
});
