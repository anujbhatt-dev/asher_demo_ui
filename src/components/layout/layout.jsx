import React, {Component} from "react"
import {Switch , Route} from "react-router-dom"

import Landing from "./landing/landing"


class Layout extends Component{

    state={
     mobile:false
    }


    componentDidMount=()=>{

      let width= Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
      if(width<=500){
        this.setState({
          mobile:true
        })
      }
    }

    render(){

      return (
          <div classname="layout">
              <Switch>
                   <Route path='/' exact>
                       <Landing/>
                   </Route>
              </Switch>
          </div>
      )
    }
}


 export default Layout;
