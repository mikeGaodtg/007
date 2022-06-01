import React, { Component} from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import "./App.css";
import Home from "./views/Layout/Index"
import Login from "./views/Login/Index"
import { authLogin } from './utils/auth';
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact render={(props)=>{
              return <Redirect to="/index"></Redirect>
            }}></Route>

            <Route path="/index" render={(props)=>{
              //如果没有登陆，就进入到登陆页，如果登陆了就进首页
              if(!authLogin()){
              
                return <Redirect to="/login"></Redirect>
               // return <Login  {...props}></Login>
              }
              return <Home {...props}></Home>
            }}></Route>
            
            <Route path="/login" render={(props)=>{
                 //如果登陆了
                if(authLogin()){
                  return <Redirect to="/index/home"></Redirect>
                }
              
                return <Login {...props}></Login>
            }}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
