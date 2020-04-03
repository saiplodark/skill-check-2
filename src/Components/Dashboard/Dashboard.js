import React from 'react'
import Product from '../Product/Product'
import App from '../../App'

export default class Dashboard extends React.Component{
    render(){
        return(
            <div>
                Dashboard
                <Product/>
            </div>
        )
    }
}