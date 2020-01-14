import React, { Component } from 'react';
import './App.css';
import './index.css';

class Epi extends Component{
    state = {
        episode: [],
        loading: false,
    };
    constructor(props){
        super(props);
    }


    async componentDidMount(){
        const response = await fetch("https://rickandmortyapi.com/api/episode/");
        const data = await response.json();
        console.log(data);
        this.setState({episode: data, loading: true});
    }

    

    render(){
        return(
            <div> 
                {this.state.loading ?
                                        
                        <div className="body">
                            <h1>Episodes</h1>
                            <hr />
                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[0].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[0].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[0].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[1].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[1].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[1].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[2].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[2].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[2].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[3].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[3].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[3].characters.length} Character</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[4].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[4].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[4].characters.length} Character</span>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[5].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[5].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[5].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[6].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[6].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[6].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[7].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[7].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[7].characters.length} Character</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[8].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[8].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[8].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[9].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[9].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[9].characters.length} Character</span>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[10].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[10].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[10].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[11].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[11].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[11].characters.length} Character</span>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[12].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[12].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[12].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[13].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[13].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[13].characters.length} Characters</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[14].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[14].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[14].characters.length} Character</span>
                                    </div>
                                </div>
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[15].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[15].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[15].characters.length} Character</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[16].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[16].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[16].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[17].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[17].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[17].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[18].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[18].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[18].characters.length} Character</span>
                                    </div>
                                </div>

                                <div className="cell">
                                    <div className="header">
                                        <span>{this.state.episode.results[19].episode}</span>
                                    </div>
                                    <div className="content">
                                        <span>{this.state.episode.results[19].name}</span>
                                    </div>
                                    <div className="header">
                                        <span>{this.state.episode.results[19].characters.length} Character</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    :
                    <h1>Loading</h1>
                }
            </div>
        );
    }
}


export default Epi;