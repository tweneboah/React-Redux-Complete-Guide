import React, { Component } from 'react';

class Forms extends Component {

    state = {
        username: '',
        lastname: '',
        firstname: ''
    }


    //For multiple input fields to avoid duplication of formChange handlers we use one onChange handler
    //This is how we do it
    //We will create only one function
    //The name attribute of the form must be the same as the state variables

    //HANDLE CHANGE METHOD
    handleChange  = (e) => {
        this.setState({
            [e.target.name]:  e.target.value
        })

        //[e.target.name] can be equall username or lastname or firstname which is equall to the state values
    }

    //Handle Submit
    handleSubmit = (e) => {
        e.preventDefault()
         console.log(this.state)
         //We can make http request here
    }

//htmFor attribute

//This is for user friendly handling; thus when a user clicks on the text it jumps to it input field

//The htmlFor attribute must be the same as the id value given to the input field

    render() { 
        return ( 
            <div>
                <h1>Forms with Multiple Input</h1>
                <form onSubmit = {this.handleSubmit}>
                    
                    <label htmlFor = 'username'>Username</label>
                    <input type = 'text' value = {this.state.username} 
                      onChange = {this.handleChange}
                      placeholder= 'username'
                      name = 'username'
                      id='username'
                    />

                    <label htmlFor='lastname'>Lastname</label>
                    <input type = 'text' value = {this.state.lastname} 
                      onChange = {this.handleChange}
                      placeholder= 'Lastname'
                      name = 'lastname'
                      id = 'lastname'
                    />

                     <label htmlFor='firstname'>Firstname</label>
                     <input type = 'text' value = {this.state.firstname} 
                      onChange = {this.handleChange}
                      placeholder= 'Firstname'
                      name = 'firstname'
                      id = 'firstname'
                    />

                    <button type='submit' >Submit</button>
                </form>
            </div>
         );
    }
}
 
export default Forms;