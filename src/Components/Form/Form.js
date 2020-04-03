import React from 'react'

export default class from extends React.Component{
    constructor(){
        super()
        this.state={
            img:"",
            name:"",
            price:0
        }
    }
    
    changeHandler(e){
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      Cancel(){
          
      }

    
    render(){
        return(
            <div>Form
                <button>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}