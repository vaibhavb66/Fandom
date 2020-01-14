import React, { Component } from 'react';

class PlacesDetailment extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            location: [],
            loading: false,
            residents: []
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.fetchResident = this.fetchResident.bind(this);
    }

    async fetchResident(url){
        const res = await fetch(url);
        const temp = await res.json();
        this.setState({residents: this.state.residents.concat(temp.name)});
        console.log(this.state.residents);
    }

    async componentDidMount(){
        const response = await fetch("https://rickandmortyapi.com/api/location/?name="+this.props.name);
        const data = await response.json();
        console.log(data);
        this.setState({location: data, loading: true});
        if(this.state.loading){
            var t = this.state.location.results[0].residents;
            await t.map(this.fetchResident);
            console.log(this.state.residents);
            console.log("length " + this.state.residents.length);   
        }
    }

    render(){
        return(
            <div>
                
            {
                this.state.loading ? 
                <div className="body">
                   <h1>Location - {this.state.location.results[0].name} </h1>
                   <hr />
                    <p> Type :   {this.state.location.results[0].type} </p>
                    <p>Dimension : {this.state.location.results[0].dimension}</p>
                    <p>Residents : </p>

                    <ol>
                        {
                            this.state.residents.map(resident => <li>{resident}</li>)
                        }
                    </ol>
                </div> :
                <div> Loading </div>
            }
            </div>
        );
    }
}

export default PlacesDetailment;