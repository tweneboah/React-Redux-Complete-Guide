import React, { Component } from 'react';

class Forms extends Component {

    state = {
        username: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
         console.log(this.state)
    }

    onhandleChangeUsername = (e) => {
        this.setState({
           username: e.target.value
        })
    }
    render() { 
        return ( 
            <div>
                <h1>Forms with Single Input</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'text' value = {this.state.username} 
                      onChange = {this.onhandleChangeUsername}
                      placeholder= 'Username'
                    />
                    <button type='submit' >Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Forms;