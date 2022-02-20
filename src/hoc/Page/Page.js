import React, { Component } from 'react';
import Intro from '../../components/intro/Intro';
import Portfolio from '../../components/intro/Portfolio';

class Page extends Component {
    displayPage = no =>{
        switch (no){
            case 0:
                return <Intro/>
            case 1:
                return <Portfolio/>
            default:
                return <Intro/>
        }
    }
  render() {
    return <div>{this.displayPage(this.props.page)}</div>;
  }
}

export default Page;
