import React, { Component } from 'react';
import './App.css';
import './index.css';

class Places extends Component{
    state = {
        places: null,
        loading: false
    };
    constructor(props){
        super(props);
    }


    async componentDidMount(){
        const response = await fetch("https://rickandmortyapi.com/api/location/");
        const data = await response.json();
        this.setState({places: data, loading: true});
    }

    render(){
        return(
            <div> 
                {this.state.loading ? 
                    <div>
                        <div className="body">
                            <h1>Locations</h1>
                            <hr />
                            <div className="row">
                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[0].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[0].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[0].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[0].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[1].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[1].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[1].name} </span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[1].residents.length} Resident </span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[2].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[2].type} </span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[2].name} </span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[2].residents.length} Resident </span>                                        
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[3].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[3].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[3].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[3].residents.length} Resident</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="row">
                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[4].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[4].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[4].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[4].residents.length} Resident</span>
                                    </div>
                                </div>
                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[5].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[5].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[5].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[5].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[6].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[6].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[6].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[6].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[7].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[7].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[7].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[7].residents.length} Resident</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="row">
                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[8].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[8].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[8].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[8].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[9].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[9].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[9].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[9].residents.length} Resident</span>
                                    </div>
                                </div>
                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[10].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[10].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[10].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[10].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[11].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[11].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[11].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[11].residents.length} Resident</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="row">
                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[12].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[12].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[12].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[12].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[13].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[13].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[13].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[13].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[14].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[14].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[14].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[14].residents.length} Resident</span>
                                    </div>
                                </div>
                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[15].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[15].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[15].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[15].residents.length} Resident</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[16].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[16].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[16].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[16].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[17].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[17].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[17].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[17].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[18].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[18].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[18].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[18].residents.length} Resident</span>
                                    </div>
                                </div>

                                <div className="cell" onClick={()=>this.props.fun(this.state.places.results[19].name)}>
                                    <div className="header">
                                        <span>{this.state.places.results[19].type}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.places.results[19].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.places.results[19].residents.length} Resident</span>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                    :
                    <h1> Loading</h1>
                }
            </div>
        );
    }
}


export default Places;