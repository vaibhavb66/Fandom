import React, { Component } from 'react';
import Cast from './Cast';
import PlacesBlank from './PlacesBlank';
import Frontpage from './Frontpage';
import Fixed from './Fixed';
import {Route, Switch} from 'react-router-dom';
import Epi from './Epi';

class Root extends Component{
   
    render(){
        return(
        <div>
            <Switch>
                <Route exact path='/' render={()=>(<div> <Fixed/> <Frontpage /> </div>)} />    
                <Route exact path='/cast' render={()=>( <div> <Fixed /> <Cast /> </div>)} />
                <Route exact path='/places' render={()=>(<div> <Fixed /> <PlacesBlank /> </div> )} />
                <Route exact path='/epi' render={()=>( <div> <Fixed /> <Epi /> </div> )} />
            </Switch>
        </div>
        );
        
    }
}

export default Root;