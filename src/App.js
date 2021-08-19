import React, { Component } from 'react';
import './App.css';
import Navbar from './navbar';
import logo from './pngegg(1).png';
import 'C:/Users/Markos/Documents/React Pro/online-shop/node_modules/Icons/fontawesome-free/css/all.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Usersform from './users';
import Create from './createuser';
import axios from 'axios';
import { object } from 'prop-types';




class App extends Component {
  state = { 
      AllUsers : [],
      usersnumber : 5,
   }
    
   componentDidMount= () => {
     const userspromise = fetch(`https://jsonplaceholder.typicode.com/users/?_limit=${this.state.usersnumber}`)
     let res = userspromise.then(response => response.json())
     res.then(data => this.setState({AllUsers : data}))
     
   }
   changeusernumber = () => {
     this.setState({usersnumber : 10 })
     this.componentDidMount()
   }

   handledelete = (user) => {
     const newstate = {...this.state}
     const AllUsers = newstate.AllUsers.filter((u) => u.id !== user.id);
     this.setState({ AllUsers })
   }

   handlesubmit = async e => {
     e.preventDefault();
    const obj = {...this.state.name }
    await axios.post("https://localhost:3000/users/11" , obj)
    console.log(obj);
      
   }

   handlechage = e =>{
     e.preventDefault();
    const state = {...this.state.name}
    const state1 = {...this.state.companyname}
    state[e.currentTarget.name] = e.currentTarget.value;
    state1[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ name : state})

   }
  render() {
    return (
      <div>
        <Route path="/edit" render={() => <Usersform/>}/>
        <Route path="/create" render={() => <div>
          <form class="text-center border border-light p-5" action="#!">
          <p class="h4 mb-4">Create New User</p>
                <input type="text" id="defaultContactFormName" class="form-control mb-4" name="name" onChange={this.handlechage}/>
                <input type="text" id="defaultContactFormEmail" class="form-control mb-4" name="companyname" onChange={this.handlechage}/>
            
                <button class="btn btn-info btn-block" type="submit" onsubmit={this.handlesubmit}>Create</button>
                </form>
        </div>}/>
       
                    <Navbar />
                    <div className="buttons">
                        <a class="btn btn-primary m-3"  onClick={this.changeusernumber}>Show All</a>
                        <a class="btn btn-primary m-3" href="/create" onClick={this.createuser}><i class="fas fa-user-plus"></i></a>
                    </div>
                  <ul class="list-group">
                  {this.state.AllUsers.map(user => ( 
                    
                          <li class="list-group-item"><div key={user.id}>
                            
                          <div className="bg-image hover-overlay d-flex">
                                <img src={logo} className="col-2" alt="" />
                                <h1 className="m-5 m-auto">{user.username}</h1>
                                 <span className="m-auto">{user.company.name}</span>
                                 <a href="/edit" onClick={() => this.edituser(user)}><i class="fas fa-edit col-3 fs-2 m-auto float-end"></i></a>
                                <i class="fas fa-trash col-3 fs-2 m-auto float-end" onClick={() => this.handledelete(user)}></i> 
                               
                                
                            </div>
                      </div>
                      </li>
                   
                    
                  )) }
                  </ul>
         </div> 
     );
  }
}
 
export default App;
