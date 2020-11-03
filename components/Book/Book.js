import React from 'react';
import './Book.css'

class Book extends React.Component {
    constructor(props){
        super(props);
        this.handleAction = this.handleAction.bind(this);
        this.addBook = this.addBook.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }
    handleAction(){
        if(this.props.isRemoval){
            return <button onClick={this.addBook} className="handle_action">+</button>
        } else {
            return <button onClick={this.removeBook}  className="handle_action">-</button>
        }
    }

    addBook(){
        this.props.onAdd(this.props.searchedBook)
    }

    removeBook(){
        this.props.onRemove(this.props.searchedBook)
    }
  
  
    render(){
        return <div className='Book_container'>
                    <div className="book_card">
                        <img className="Cover_image" alt="cover" src={this.props.searchedBook.smallThumbnail}></img>
                        <div className="book_row">
                        <div className="Book_information">
                            <span className="title">{this.props.searchedBook.title}</span>
                            <span className="author">{this.props.searchedBook.authors}</span>
                            </div>
                            </div>
                                                        <span className="handle_button">{this.handleAction()}</span>

                    </div>
            </div>
            
    }
}

export default Book;