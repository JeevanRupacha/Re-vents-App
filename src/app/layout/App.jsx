import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EventDashboard from '../../features/events/EventDashboard/EventDashboard'
import HomePage from '../../home/HomePage'
import EventDetailedPage from '../../features/events/EventDetailed/EventDetailed'
import UserDashboard from '../../users/UsersDashboard/UsersDashboard'
import UserDetailed from '../../users/UserDetailed/UserDetailedPage'
import Setting from '../../users/Settings/SettingDashboardPage'
import CreateForm from '../../features/events/EventForm/EventForm'
import NavBar from '../../nav/navBar/navBar'



function App() {
  return (
    <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
            <Route
              path="/(.+)"
              render={() => (
                <div>
                  <NavBar/>
                  <Switch>
                      <Route path="/events" component={EventDashboard} name="Events"/>
                      <Route path="/events/:id" component={EventDetailedPage}/>
                      <Route path="/user" component={UserDashboard}/>
                      <Route path="/profile/:id" component={UserDetailed}/>
                      <Route path="/setting" component={Setting}/>
                      <Route path="/createevent" component={CreateForm}/>
                  </Switch>
                </div>
              )}
            />
    </div>
  );
}

export default App;
