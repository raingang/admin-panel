import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import '../../styles/NavPanel/index.css';

class NavPanel extends Component {
  render() {
    return (
      <aside className="nav-panel">
        <ul className="nav">
          { this.props.sections.map(item => (
            <li key={item.id} className="nav-item">
              <Link to={item.route}><span className="nav-text">{ item.title }</span></Link>
            </li>
                        ))}
        </ul>
      </aside>
    );
  }
}

NavPanel.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    route: PropTypes.string,
  })),
  dispatch: PropTypes.func,
};

export default NavPanel;
