import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './active_book'

const rootReducer = combineReducers({
	books: BooksReducer,
	activeBook: ActiveBook
});

export default rootReducer;