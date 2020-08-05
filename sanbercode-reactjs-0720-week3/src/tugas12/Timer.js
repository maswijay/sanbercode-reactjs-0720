import React, {Component} from 'react'

class Timer extends Component{
  constructor(props){
    super(props)
    this.state = {
      time: this.props.start
    }
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time - 1 
    });
  }


  render(){
    return(
      <>
      {this.state.time >= 0 &&
        <h2 style={{textAlign: "center"}}>
            Hitung mundur:  {this.state.time}
        </h2>
       }
      </>
    )
  }
}

export default Timer