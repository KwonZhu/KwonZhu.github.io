import React from 'react';
import Header from './app/Header';
import Page from './app/Page';
import Footer from './app/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home',
    };
    //bind this
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  //custom function
  handlePageChange(newPage){
    this.setState({page: newPage});
  }

  render() {
    const { page } = this.state;
    return (
      <div  className="main">
        <div className="container">
          <Header 
            page={page}
            onPageChange={this.handlePageChange} //pass custom function to Header.js
          />
          <Page page={page} />
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;