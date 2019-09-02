import React from 'react';
export default class App extends React.Component{
  componentDidMount(){
    setTimeout(function(){ alert("Hello"); }, 2000);
  }
  componentWillMount(){
    alert("Goodbye")
  } 
render(){
  return (
    <div></div>
     
      
  )
}
}


