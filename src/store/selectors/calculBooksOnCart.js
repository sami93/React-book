const calculBooksOnCart = (state) => {
    const bookOnCart = []
    if(state && state.length) 
    state.forEach(book => {
    if (book.cart)
     bookOnCart.push(book)
    })
    return bookOnCart;
  };
  
  export default calculBooksOnCart;
  