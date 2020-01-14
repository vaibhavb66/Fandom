import React,{Component} from 'react';
import Places from './Places';
import PlacesDetailment from './PlacesDetailment';
class EpiBlank extends Component{
    
    state = {
        name: null
    }

    constructor(props){
        super(props);
        this.update = this.update.bind(this);  
        this.fun = this.fun.bind(this)
    }

    fun(n){
        this.setState({
            name: n
        });
    }

    update(){
        this.state.name = null;
    }
    render(){
        return(
            <div>
            {this.state.name === null ? <Places fun={this.fun} /> : <div> <PlacesDetailment name={this.state.name} /> {this.update()} </div>  }
            </div>
        )
    }
}

export default EpiBlank;