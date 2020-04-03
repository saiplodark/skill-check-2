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
      products:[]
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res => {
      this.setState({
        products: res.data
      })
    })
  }


  
  
  render(){
    return(
      <div>
        <Dashboard/>
        <Form/>
        <Header/>
      </div>
    )
  }
}
