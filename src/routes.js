import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import { Home, UserList } from 'jsx/components';

const Layout = () => (
    <Router>
        <div className="root-container d-flex flex-column">
            <ul className="nav">
                <li className='nav-item'><Link to="/" className="nav-link">Home</Link></li>
                <li className='nav-item'><Link to="/users" className="nav-link">Users List</Link></li>
            </ul>
            <div className="">
                <Route exact path="/" component={Home} />
                <Route path="/users" component={UserList} />
            </div>
        </div>
    </Router>
);

export default Layout;
