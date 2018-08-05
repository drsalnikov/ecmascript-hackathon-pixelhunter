import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default OriginalComponent => class Wrapper extends Component {


  render() {
    return (
      <main className="central">
        <div id="main" className="central__content">
          <Header />
          <OriginalComponent {...this.props} />
          <Footer />
        </div>
      </main>

    );
  };
};
