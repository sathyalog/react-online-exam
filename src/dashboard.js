import React from 'react';
import { Link } from 'react-router';
import codechallenge from './assets/images/code_challenge.png';
import online from './assets/images/online_exam2.png';
import './App.css';

var dashboard = React.createClass({
  componentWillMount(){
        this.code={
                  width:'400px',
                  height:'300px'
        },
        this.online={
          width:'250px',
          height:'250px',
          'marginTop':'48px'
        },
        this.rowMargin={
          'marginTop':'50px'
        }
    },
  render(){
    return(
      <div className='rowMargin' style={this.rowMargin}>
      <div className='col-md-12'>
      <div className='col-md-6'><Link to='/code'><img alt='Code Challenge' src={codechallenge} style={this.code}/></Link></div>
      <div className='col-md-6'><Link to='/exam'><img alt='Online Exam' src={online} style={this.online}/></Link></div>
      </div>
      </div>
    )
  }
})

export default dashboard;
