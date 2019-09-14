import React, { Component } from 'react';
import axios from 'axios';

class AjaxCallDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quote: '' ,
            isLoading: false
        }

        console.log('In  constructor', this.state)
    }

    componentDidMount() {
        axios.get(`https://api.github.com/zen`)
        .then(response => this.setState({
            quote: response.data,
            isLoading: true
        }))
        console.log('DATA from ComponentDidMount()', this.state)
    }
    render() { 
        console.log('Data from Render Method', this.state)

        const {isLoading } = this.state
        return ( 
           
            <div>
               {isLoading? (
                   <div>
                     <h2>Your quote is {this.state.quote}</h2>
                   </div>
               ): (
                   <div>
                     <h2>Is loading......</h2>
                   </div>
               )}
            </div>
           
         );
    }
}
 
export default AjaxCallDemo;