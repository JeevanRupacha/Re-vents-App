import React from 'react'
import EventListItem from './EventListItem'


class EventList extends React.Component
{
    render()
    {
        const { eventLists ,onEditEvent, deleteEvent} = this.props
        return (
            <div>
                <h1>Event List </h1>
                {eventLists &&
                    eventLists.map((event) => (
                        <EventListItem deleteEvent={deleteEvent} onEditEvent={onEditEvent} key={event.id} event={event} />
                ))}
             
            </div>
        )
    }
}

export default EventList