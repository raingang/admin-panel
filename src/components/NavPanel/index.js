import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../../styles/NavPanel/index.css';

class NavPanel extends Component{

    render(){
        return (
            <aside className = 'nav-panel'>
                <ul className = 'nav'>
                    { this.props.sections.map(item => {
                        return(
                        <li key = { item.id } className = 'nav-item'>
                            <Link to = { item.route }><span className = 'nav-text'>{ item.title }</span></Link>
                        </li>
                        )
                    })}
                </ul>
            </aside>
        )
    }
}

export default NavPanel