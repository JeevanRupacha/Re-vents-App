import React from 'react'
import { Grid } from 'semantic-ui-react'
import SettingNav from './SettingNavPage'
import { Switch, Route, Redirect } from 'react-router-dom'
import AboutPage from './AboutPage'
import AccountPage from './AccountPage'
import BasicPage from './BasicPage'
import PhotosPage from './PhotosPage'

const SettingDashboardPage = () => {
    return (
        <div>
            <Grid>
                <Grid.Column width={12}>
                    <Switch>
                        <Redirect exact from="/setting" to="/setting/basic"/>
                        <Route path ="/setting/about" component={AboutPage}/>
                        <Route path ="/setting/account" component={AccountPage}/>
                        <Route path ="/setting/basic" component={BasicPage}/>
                        <Route path ="/setting/photos" component={PhotosPage}/>
                    </Switch>
                </Grid.Column>
                <Grid.Column width={4}>
                    <SettingNav/>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default SettingDashboardPage