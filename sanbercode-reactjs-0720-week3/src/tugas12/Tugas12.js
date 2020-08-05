import React, {Component} from 'react'
import Timer from './Timer'

class Clock extends Component{
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount(){
    // if (this.props.start !== undefined){
    //   this.setState({time: this.props.start})
    // }
    this.clockID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.clockID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }


  render(){
    return(
      <>
        <h2 style={{textAlign: 'center'}}>
            Sekarang jam: {this.state.date.toLocaleTimeString()}
            
        </h2>
        <Timer start = '100' />
      </>
    )
  }
}

export default Clock