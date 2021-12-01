import { Component } from "react";

class Count extends Component{
    state = {
        count: 0,
        num: 10
    }

    increment = ()=>{
        this.setState({
            count: this.state.count+2,
            num: this.state.num +10

        })
    }
    render(){
        return(

        <div>
            <p>{this.state.count}</p>
            <button onClick={this.increment}>Increment</button>
        </div>
        )
    }
}

export default Count;