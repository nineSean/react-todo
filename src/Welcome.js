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
  render(){
    return <h1>{this.state.date.toLocaleTimeString()}</h1>
  }
}
export default Welcome
