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
    console.log('constructor')
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  render(){
    console.log('render')
    return <h1>{this.state.date.toLocaleTimeString()}</h1>
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  componentWillReceiveProps(){
    console.log('componentWillRecieveProps')
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
    console.log('------')
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
}
export default Welcome
