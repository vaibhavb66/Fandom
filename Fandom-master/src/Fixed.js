import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import './index.css';
import {Link} from 'react-router-dom';

class Fixed extends Component{

    render(){
        return(
            <div>
                <div className="nav">
                <Link to="/"> <img src={logo} className="img" /> </Link>
                    <div className="search-bar">
                        <form>
                            <span className="box">Search By</span>
                            <input type="text" className="enter" placeholder="Episode or Character or Location"></input>
                            <input type="button" className="btn" value="Search"></input>
                        </form>
                    </div>
                </div>
                <div className="main">
                    <div className="list">
                        <ul>
                            <li>
                                <Link to="/places">Locations</Link>
                            </li>
                            <li>
                                <Link to="/cast">Characters</Link>
                            </li>
                            <li>
                                <Link to="/epi">Episode</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fixed;