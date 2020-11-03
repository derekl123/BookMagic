import React from 'react';
import Booklist from '../Booklist/Booklist'
import './Favoritelist.css'

class Favoritelist extends React.Component {
    constructor(props){
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
   

    handleNameChange(e){
       this.props.onNameChange(e.target.value);
    }
    
    render(){
        return <div className="Favorites">
                <input maxLength="15" className="playlistInput" onChange={this.handleNameChange} defaultValue={'New Playlist'}/>
        <Booklist onRemove={this.props.onRemove} isRemoval={false} searchedBooks={this.props.favoriteBooks} />
        </div>
        
}

}

export default Favoritelist;