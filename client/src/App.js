import React from 'react';
import './assets/css/main.css';
import './assets/css/bootstrap.min.css';
import Sidebar from './components/common/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Navbar from './components/common/Navbar';
import Student from './components/pages/Student'
import Subject from './components/pages/Subject'
import Home from './components/pages/Home';
function App() {
  return (
    <div className="App">
      <Router basename="/node-test/">
        <Navbar></Navbar>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-3 sidebar">
              <div className="nav nav-pills flex-column mb-auto mt-5">
                {
                  Sidebar.map((SidebarItem, index) => {
                    return (
                      <li className="nav-item" key={index}>
                        {/* activeStyle={{ color: SidebarItem.activeColor }} */}
                        <NavLink key={index} exact={true} to={SidebarItem.path} className={SidebarItem.clsName}>{SidebarItem.title}</NavLink>
                      </li>
                    )
                  })
                }
              </div>
            </div>
            <div className="col-lg-10 col-md-9">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/student" component={Student}></Route>
                <Route exact path="/subject" component={Subject}></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
export default App;
