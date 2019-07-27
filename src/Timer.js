import React from 'react'

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state={time:0,
                   interval:0,
                   btn:'start'
                   
                    }    
    }


start=()=>{
    if(this.state.interval){
        clearInterval(this.state.interval)
        this.setState({
            btn:'start',
            interval:0
        })
      return;
    }
   
    let interval = setInterval( () => { this.setState({
        time: this.state.time + 1000 }
        )},1000
    )
    this.setState({
        btn:'pause',
        interval
    })

 
}



reset=()=>{
    clearInterval(this.state.interval)
    this.setState({time:0,
                   interval:0,
                   btn:'start'
                   })  
}

    

    render() {
        const ms = this.state.time
        
        let seconds = Math.floor(ms / 1000);
        let minute = Math.floor(seconds / 60);
        seconds = seconds % 60;
        let hour = Math.floor(minute / 60);
        minute = minute % 60;
        hour = hour % 24;
        
        return (
            <div className="maintimer">
                <div className="display" >
                <div className="timedisplay">{hour<10 ? "0"+hour : hour} : {minute<10 ? "0"+minute : minute} : {seconds <10 ? "0"+seconds : seconds}</div>
                <p className="idtime">Hour : Minutes : Seconds</p>
                </div>
                <div className="buttons">
                    <input className="btn" type="button" value={this.state.btn}  onClick={this.start}></input>
                    <input className="btn" type="button" value="Reset" onClick={this.reset} ></input>
                </div>
            </div>
        )
    }}

export default Timer