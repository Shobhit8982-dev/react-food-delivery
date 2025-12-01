import React from "react";

class UserClass extends React.Component{
      constructor(props){
        super(props);

        this.state = {
            count1 : 0,
            count2 :1
        }
      }

    render(){
        const{count1, count2} = this.state

      return(
        <>
        <div>Name: {this.props.name}</div>
        <div>count1: {count1}</div>
        <div>count2: {count2}</div>
        <button className="border p-2 rounded-2xl bg-amber-300" onClick={
          () => this.setState({ count1: this.state.count1 + 1, count2: this.state.count2  + 1 })
        }>Increment</button>
        </>
      )
    }
    
}

export default UserClass;