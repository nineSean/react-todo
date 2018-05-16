import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TodoList extends React.Component{
  constructor(prop){
    this.state = {
      items: []
    }
  }
  render(){
    return (
      <div>
        <h1>我的代办事项</h1>
        <InputBar/>
        <ItemLIst/>
      </div>
    )
  }
}

class InputBar extends React.Component{
  constructor(props){

  }
  render(){
    return (
      <div>
        <input type="text"/>
        <button>添加代办事项</button>
      </div>
    )
  }
}
class ItemList extends React.Component{
  constructor(props){

  }
  render(){
    return (

    )
  }
}

ReactDOM.render(<TodoList/>, document.querySelector('#root'))
