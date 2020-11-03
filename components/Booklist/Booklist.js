import React from 'react';
import Book from '../Book/Book'
import './Booklist.css'

class Booklist extends React.Component {
    render(){
        return <div className="Booklist">
            
          {
               this.props.searchedBooks && this.props.searchedBooks.map(searchedBook => {
                return <Book onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} searchedBook={searchedBook} key={searchedBook.id} />
            })
          }
         
    </div>
    }
}

export default Booklist;

