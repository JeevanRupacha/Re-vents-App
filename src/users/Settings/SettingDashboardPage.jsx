import React from 'react'
import { Grid } from 'semantic-ui-react'
import SettingNav from './SettingNavPage'

const SettingDashboardPage = () => {
    return (
        <div>
            <Grid>
                <Grid.Column width={12}>
                    
                </Grid.Column>
                <Grid.Column width={4}>
                    <SettingNav/>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default SettingDashboardPage