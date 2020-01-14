import React, { Component } from 'react';
import './App.css';
import './index.css';

class Cast extends Component{
    state = {
        cast: null,
        loading: false
    };
    constructor(props){
        super(props);
    }

    async componentDidMount(){
        const response = await fetch("https://rickandmortyapi.com/api/character//");
        const data = await response.json();
        console.log(data);
        this.setState({cast: data, loading: true});
    }

    render(){
        return(
            <div> 
                {this.state.loading ? 
                    <div>
                        <div className="body">
                            <h1>Characters</h1>
                            <hr />
                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[0].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[0].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[0].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[1].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[1].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[1].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[2].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[2].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[2].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[3].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[3].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[3].episode.length} Episode</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[4].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[4].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[4].episode.length} Episode</span>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[5].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[5].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[5].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[6].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[6].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[6].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[7].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[7].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[7].episode.length} Episode</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[8].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[8].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[8].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[9].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[9].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[9].episode.length} Episode</span>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[10].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[10].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[10].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[11].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[11].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[11].episode.length} Episode</span>
                                    </div>
                                </div>

                                

                                
                            </div>

                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[12].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[12].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[12].episode.length} Episode</span>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[13].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[13].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[13].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[14].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[14].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[14].episode.length} Episode</span>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[15].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[15].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[15].episode.length} Episode</span>
                                    </div>
                                </div>

                                

                                
                            </div>
                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[16].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[16].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[16].episode.length} Episode</span>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[17].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[17].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[17].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[18].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[18].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[18].episode.length} Episode</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.cast.results[19].species}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.cast.results[19].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.cast.results[19].episode.length} Episode</span>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div> 
                    :
                    <h1> Loading </h1>
                }
            </div>
        );
    }
}


export default Cast;