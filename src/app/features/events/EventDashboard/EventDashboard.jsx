import React from 'react'
import { Button} from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import NavBar from '../../../nav/navBar/navBar'
import cuid from 'cuid'

const  events = [
    {
      id: '1',
      title: 'Trip to Tower of London',
      date: '2018-03-27',
      category: 'culture',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-28',
      category: 'drinks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
        },
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
        }
      ]
    }
  ]

class EventDashboard extends React.Component {
    
    state = {
      events: events,
      createEventFromOpen: false,
      selectedEvent: null,
      
        
  }

  handleEditedEventSubmit = (editedEvent) => {
    /* 
    when edited event is submitted this function calls 
    loop the all events until we get the edited event id after the 
    edited event id is found set event that is edited 
    else set the event from old events list 
    */
    this.setState({
      events: this.state.events.map((event) => {
        if (event.id === editedEvent) {
          // return editedEvent
          return Object.assign({}, editedEvent) // make copy of event
          
        } else {
          return event
        }
      }),
      createEventFromOpen: false,
      selectedEvent: null,
    })
  }

  handleDeleteEvent = (eventId) => () => {
    const filteredEvent = this.state.events.filter( (event) => event.id !== eventId)
    this.setState({
      events: filteredEvent
    })
  }
  
  handleEditEvent = (eventTobeUpdated) => () => {
    this.setState({
      selectedEvent: eventTobeUpdated,
      createEventFromOpen: true
    })

  }

    handlerCreateEvent = () => {
      this.setState({
          selectedEvent: null,
          createEventFromOpen : true
    })
    }

    handlerCancelEventForm = () => {
        this.setState({
            createEventFromOpen : false
    })   
  }
  
  createNewEventHandler = (newEvent) => {
    newEvent.id = cuid()
    newEvent.hostPhotoURL = 'https://randomuser.me/api/portraits/men/20.jpg'

    const updateEvent = [...this.state.events, newEvent]

    this.setState({
      events: updateEvent,
      createEventFromOpen: false
    })

  }

  render() {
    const { selectedEvent } = this.state
        return (

          <div>
                <div className ="main-container">
                    <div className="left-cont">
                <EventList deleteEvent={this.handleDeleteEvent} onEditEvent={this.handleEditEvent} eventLists={ this.state.events}/>
                    </div> 
                    <div className="right-cont">
                        <Button onClick={this.handlerCreateEvent} className="create-evnt-btn" positive>Create Event</Button>
                        { this.state.createEventFromOpen &&
                  <EventForm  handleEditedEventSubmit={this.handleEditedEventSubmit} createNewEventHandler={this.createNewEventHandler} cancelHandler={this.handlerCancelEventForm} selectedEvent={selectedEvent}/>
                        }
                    </div> 
               </div>
            </div>
           
        )
    }
}

export default EventDashboard
