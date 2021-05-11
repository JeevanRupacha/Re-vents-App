
import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link ,NavLink} from 'react-router-dom'


const SignoutMenu = (props) => {
    return (
        <div style={{
            color: "#fff"
        }}>
                <Menu.Item position="right">
                  <Image avatar spaced="right" src='/assets/user.png' />
                  <Dropdown pointing="top left" text="Username">
                    <Dropdown.Menu>
                      <Dropdown.Item text="Create Event" icon="plus" />
                      <Dropdown.Item text="My Events" icon="calendar" />
                      <Dropdown.Item text="My Network" icon="users" />
                      <Dropdown.Item text="My Profile" icon="user" />
                      <Dropdown.Item as={NavLink} to="/setting" text="Settings" icon="settings" />
                      <Dropdown.Item text="Sign Out" onClick={props.handleSignout} icon="power" />
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
        </div>
    )
}

export default SignoutMenu

