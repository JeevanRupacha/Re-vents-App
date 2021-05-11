import React, { Component } from 'react'
import { Icon,List } from 'semantic-ui-react'
import EventAttendee from './EventListAttendee'

class EventListItem extends Component {

    clickHandler = () => (event) => {
        console.log(event)
    }

    
    render() {
        const {event ,onEditEvent, deleteEvent} = this.props
        return (
            <div className="event-show-container">
            <div className="first-div">
                <div><img src={event.hostPhotoURL} alt="profile pic " /></div>
                <div><h4>Event Title </h4>
                  <span> Hosted by <a href="#">{event.hostedBy} </a></span>
                </div>
                    <div className="deleteIcon"> <Icon onClick={deleteEvent(event.id)} name="delete" color="red" /></div>    
            </div>
                <div className="middle-div">
                    <span className="date"><Icon name="calendar alternate" />{event.date}</span>
                <span className="time"><Icon name="time"/>time </span>
                </div>
                <div className="attendee">
                    <List horizontal>
                        <EventAttendee/>
                        <EventAttendee/>
                        <EventAttendee />
                    </List>
                </div>
            <div className="last-div">
                    <div className="description">{event.description}</div>
                <div><button onClick={onEditEvent(event)} className="view-event-btn">View</button></div>
            </div>
             </div >
        )
    }
}

export default EventListItem
