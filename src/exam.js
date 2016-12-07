import React from 'react';
import Header from './header';
import mockdata from '../mockserver/db.json'
import axios from 'axios';
//var jsonData;
// var mockServerUrl = window.location.host+'/mockserver/db.json';
var jsonData = mockdata;
 console.log(jsonData);
var Exam = React.createClass({
  getInitialState:function(){
    return {
      questions:jsonData.questions
    };
  },
  componentWillMount() {
    this.style={
          marginLeft:'100px',
          marginTop:'50px'
      }
    // axios.get('http://127.0.0.1:3001/questions')
    //   .then(resp => {
    //     jsonData = resp.data;
    //     console.log(jsonData);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    //this.setState({data: mockdata})
  },
  render() {
    return (
      <div >
      <Header/>
        <div style={this.style}>
        {this.state.questions.map(function(questions,i) {
            return (<div>{questions.question}

                    {questions.options.map(function(options,i){
                        return (
                          <div className="radio">
                          <label>
                              <input type="radio" name="optionsRadios"/>{options}
                              </label>
                          </div>
                        )
                    })}
            </div>)
        })}
        <button type="button" className="btn btn-sm btn-default">Submit</button>
      </div>

      </div>
    );
  }
})

export default Exam;
