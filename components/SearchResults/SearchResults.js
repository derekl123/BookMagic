import React from 'react';
import Booklist from '../Booklist/Booklist'
import './SearchResults.css';



class SearchResults extends React.Component {
    render(){
        return <div className="box_container">
            <h2 className="title_container">Results</h2>
            <Booklist onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={true} searchedBooks={this.props.searchedBooks} />
        </div>
    
    }
}

export default SearchResults;

