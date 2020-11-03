import React from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Favoritelist from '../Favoritelist/Favoritelist'
import BookSearch from '../utils/BookSearch'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.addBook = this.addBook.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.Search = this.Search.bind(this);
    this.state = {
      searchResults: [],
      favoriteName: 'Change Title',
      favoriteBooks: [],
    }
  }

    addBook(book){
      let books = this.state.favoriteBooks;
      if(books.find(searchedBook => book === searchedBook)){
        return;
      } else {
        books.push(book);
        this.setState({searchedBooks: books})
      }
    }
    
removeBook(book){
  let books = this.state.favoriteBooks;
  books = books.filter(searchedBook => searchedBook.id !== book.id)
  this.setState({favoriteBooks: books})
}
    
updatePlaylistName(name){
this.setState({ favoriteName: name})
}

Search(term){
BookSearch.search(term).then(searchResults => {
  this.setState({searchResults: searchResults});
})
}

  
  render() {
    return <div className="App">
      <SearchBar onSearch={this.Search} />
      <div className="results_container">
        <SearchResults onAdd={this.addBook} isRemoval={true} searchedBooks={this.state.searchResults} />
        <Favoritelist onNameChange={this.updatePlaylistName} onRemove={this.removeBook} favoriteBooks={this.state.favoriteBooks} favoriteName={this.state.favoriteName} />
      </div>
    </div>
  }
}

export default App;