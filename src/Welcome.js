import React from 'react'
class Welcome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
    setInterval(e => {
      this.setState({date: new Date()})
    }, 1000)
  }
  /*
    一般而言this.setState放在以下钩子里
    componentWillMount
    componentDidMount
    shouldComponentReceivePros

    而this.setState触发以下钩子
  */
  render(){
    return (
      <h1>It's time: {this.state.date.toLocaleTimeString()}</h1>
    )
  }
  shouldComponentUpdate(){
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  componentDidUpdate(){
    console.log('componentDidUpdate')
    console.log('-------------')
  }
}
export default Welcome
