import React from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'

export default class Product extends React.Component{
  constructor(){
    super()
    this.state={
      products:[],
      newproducts:[]
    }
    this.productAdd = this.productAdd.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      this.setState({
        products: res.data
      })
    })
  }

  productAdd(producttoadd){
    axios.post('/api/inventory', producttoadd).then(res=>{
      this.setState({
        products: res.data
      })
    })
  }

  changeHandler(e){
    this.setState({
      newShoes: e.target.value
    })
  }

  Products(props){
    let{img, name, price}=props.products
    return <div className="Products">
    <img src={img} alt="product pics"/>
    <span>${name}</span>
    <span>{price}</span>
</div>
  }

  
  
  render(){
    // return(
    //   <div>
    //     <img src={img} alt="product pic"/>
    //     <span>{name}</span>
    //     <span>${price}</span>
    //   </div>
    // )
    return(
      <div>
        <Dashboard/>
        <Form newproducts={this.state.newproducts} changeHandler={this.changeHandler}
        productAdd={this.productAdd}/>
        <Header/>
      </div>
    )
  }
}
