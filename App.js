import React from 'react';
import Header from './app/Header';
import Page from './app/Page';
import Footer from './app/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Home'
    };
  }
  render() {
    const { page } = this.state;
    return (
      <div  className="main">
        <div className="container">
          <Header page={page} />
          <Page page={page} />
          <Footer />
        </div>
      </div>
    );
  }
}
export default App;