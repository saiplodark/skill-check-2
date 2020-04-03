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
    
    //need to be fixed
      Reset(){
        this.setState=({
            img:"",
            name:"",
            priec:0
        })
    }

      
      
      render(){
          return(
              <div>Form
                <p>image URL:</p>
                <input
                type ="text"
                name = "img"
                value = {this.state.img}
                onChange = {(e)=> this.changeHandler(e)}
                placeholder = "URL"/>
                
                <p>Product Name:</p>
                <input
                type ="text"
                name = "name"
                value = {this.state.name}
                onChange = {(e)=> this.changeHandler(e)}
                placeholder = "name"/>
                
                <p>Price:</p>
                <input
                type ="text"
                name = "price"
                value = {this.state.price}
                onChange = {(e)=> this.changeHandler(e)}
                placeholder = "0"/>

                <button onClick={()=> this.props.Reset(this.setState)}>Cancel</button>
                <button onClick = {()=>this.props.productAdd(this.state)}>Add to Inventory</button>
            </div>
        )
    }
}
