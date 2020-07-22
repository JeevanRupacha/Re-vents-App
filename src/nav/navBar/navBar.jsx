import React from 'react'
import { NavLink, Link ,withRouter} from 'react-router-dom'
import SigninMenu from '../Menus/SigninMenu'
import SignoutMenu from '../Menus/SignoutMenu'


class NavBar extends React.Component
{
    state = {
        authenticate : false
    }

    handleRegister = () => {
        
    }

    //it also represent same login 
    handleSignin = () => {
        this.setState({
            authenticate: true
        })
    }

    handleSignout = ()=> {
        this.setState({
            authenticate: false
        })
        this.props.history.push('/')
        
    }


    render() {
        return ( 
        <div className="nav-container">
                <div className="left-nav">
                    <div>
                        <NavLink to="/">
                        <div className="logo"><img src="assets/logo.png" alt="logo" />
                        </div>
                        </NavLink>
                    </div>
                    
                    <div ><NavLink to="/events" style={{
                        color: '#fff'  
                    }}
                        activeStyle={{
                            color :'rgba(235, 235, 235, 0.575)'
                        }}
                    >Events</NavLink></div>
                    <div ><NavLink to="/peoplelist" style={{
                        color: '#fff' 
                    }}
                    activeStyle={{
                        color :'rgba(235, 235, 235, 0.575)'
                    }}
                    >People</NavLink></div>
                    <Link to="/createevent"><button id="create-btn-id">Create Events</button></Link>
                </div> 
                
                <div className="right-nav">
                    {
                        this.state.authenticate ?
                            (<SignoutMenu handleSignout={this.handleSignout}/> ):
                        (<SigninMenu handleSignin={this.handleSignin}/>)
                    }
                </div>     
        </div>
          )
        }
}

export default withRouter(NavBar)