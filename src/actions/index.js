export function selectBook(book) {
	// Select book is an ActionCreator, it needs to return ab action,
	// an object with a type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};

}