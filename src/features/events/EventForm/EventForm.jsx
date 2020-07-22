import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'


const emptyEvent =
        {
            title: '',
            date: '',
            city: '',
            venue: '',
            hostedBy: ''
        }
class EventForm extends Component {

    state = {
        event : emptyEvent
    }

    componentDidMount() {
        if (this.props.selectedEvent !== null) {
            this.setState({
                event: this.props.selectedEvent
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedEvent !== nextProps.selectedEvent) {
            this.setState({
                event: nextProps.selectedEvent || emptyEvent
            })
        }
    }
   

    onSubmitForm = (event) => {
        event.preventDefault()
        if (this.state.event.id) {
            this.props.handleEditedEventSubmit(this.state.event)
        } else {
            this.props.createNewEventHandler(this.state.event)
        }


       
    }

    onChangeInput = (event) => {
        const newEvent = this.state.event
        newEvent[event.target.name] = event.target.value
        this.setState({
            event: newEvent
        })
    }

    render() {
        
        return (
            <Segment>
                <Form onSubmit={this.onSubmitForm}>
                    <Form.Field>
                        <label>Event Title </label>
                        <input type="text" placeholder="Title Name " required={true} name="title" onChange={this.onChangeInput} value={this.state.event.title}></input>
                    </Form.Field>    
                    <Form.Field>
                        <label>Event Date </label>
                        <input type="date" placeholder="Event Date " required={true} name="date" onChange={this.onChangeInput} value={this.state.event.date}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Event Time </label>
                        <input type="time" placeholder="Event Time " required={true} name="time" onChange={this.onChangeInput} value={this.state.event.time}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Event City </label>
                        <input type="text" placeholder="City event is taking place " name="city" onChange={this.onChangeInput} value={this.state.event.city}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Event Venue </label>
                        <input type="text" placeholder="Enter the Venue of the event " name="venue" onChange={this.onChangeInput} value={this.state.event.venue}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Hosted By </label>
                        <input type="text" placeholder="Enter the person hosting this event " name="hostedBy" onChange={this.onChangeInput} value={this.state.event.hostedBy}></input>
                    </Form.Field>

                    <Button className="submit-event-btn" primary>Submit</Button>
                    <Button className="calcel-event-btn" onClick={this.props.cancelHandler}>Cancel</Button>
                </Form>
           </Segment>
        )
    }
}

export default EventForm
