
import React, { Component } from 'react'
import { List,Image } from 'semantic-ui-react'

class EventListAttendee extends Component {
    render() {
        return (
            <List.Item >
                <Image size="mini" circular src="https://randomuser.me/api/portraits/men/22.jpg"></Image>
            </List.Item>
        )
    }
}

export default EventListAttendee
