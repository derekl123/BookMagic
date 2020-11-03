import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
   this.handleTermChange = this.handleTermChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }
    render(){

        return <div className="search_container">
                  <div className="search_field">
          <h2 className="page_title">Book Magician</h2>
          <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleTermChange} className="origin_search" id="trend" placeholder="What is Trending?" />
        <button className="search_button">Find Books!</button>
        </form>
        </div>
      </div>
    }
    

    handleTermChange(e){
      this.setState({term: e.target.value});
    }

    handleSubmit(e){
      e.preventDefault();
      this.props.onSearch(this.state.term);
    }
   
}

export default SearchBar;