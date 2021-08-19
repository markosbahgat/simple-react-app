import React, { Component } from 'react'


class Usersform extends Component {
    render() { 
        return ( 
            
            <form class="text-center border border-light p-5" action="#!">
            
                <p class="h4 mb-4">User Form</p>
                <input type="text" id="defaultContactFormName" class="form-control mb-4" />
                <input type="email" id="defaultContactFormEmail" class="form-control mb-4" />
            
                <button class="btn btn-info btn-block" type="submit">Edit</button>
            
            </form>
         );
    }
}
 
export default Usersform;