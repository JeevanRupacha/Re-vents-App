import React from 'react'
import { Segment, Header, Image, Button, Icon} from 'semantic-ui-react'

const HomePage = ({history}) => {
    
        return (
            <Segment inverted textAlign='center' vertical className='masthead'
                
                style={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
              
                <div className="home-container">
                <Header as='h1' inverted>
                    <Image
                      size='massive'
                      src='/assets/logo.png'
                      alt='logo'
                      style={{ marginBottom: 12 }}
                    />
                    Re-vents
                  </Header>
                    <Button size='huge' inverted onClick={() => (
                        history.push('/events')
                    )} >
                    Get started
                    <Icon name='right arrow' inverted />
                  </Button>
               </div>
              </Segment>
        )
}
 
export default HomePage
