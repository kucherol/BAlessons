import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';



const component = (
  <>
    <Header />
    <Body />
    <Footer />
  </>
)

ReactDom.render(component, document.getElementById('app'))