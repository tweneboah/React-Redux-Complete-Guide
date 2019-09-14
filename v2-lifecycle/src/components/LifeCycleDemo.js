import React, { Component } from 'react';

class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }

        console.log('In a constructor')
    }

    componentDidMount() {
     console.log('In a componentDidMount Method')
    }
    render() { 
        console.log('In a Render metho')
        return ( 
            <div>
                <h1>The flow of react life cycle</h1>
            </div>
         );
    }
}
 
export default LifeCycleDemo;