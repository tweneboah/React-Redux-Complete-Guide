import React, { Component } from 'react';
import axios from 'axios';

class AjaxCallDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { quote: '' }

        console.log('In  constructor', this.state)
    }

    componentDidMount() {
        axios.get(`https://api.github.com/zen`)
        .then(response => this.setState({
            quote: response.data
        }))
        console.log('DATA from ComponentDidMount()', this.state)
    }
    render() { 
        console.log('Data from Render Method', this.state)
        return ( 
            <div>
             <h3>Your quote is: {this.state.quote}</h3>
            </div>
         );
    }
}
 
export default AjaxCallDemo;