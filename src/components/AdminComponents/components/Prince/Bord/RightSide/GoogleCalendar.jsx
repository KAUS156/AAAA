import React from 'react';
import { google } from 'googleapis';

const CLIENT_ID = 'http://48127989393-jndb3450pp55vhvfl13j386ig9lsh7s3.apps.googleusercontent.com';
const CLIENT_SECRET = 'YOUR_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000'; // e.g., http://localhost:3000/auth/google/callback

const auth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
const calendar = google.calendar({ version: 'v3', auth });

class GoogleCalendar extends React.Component {
  handleAddEvent = async () => {
    try {
      const event = {
        summary: 'Sample Event',
        start: {
          dateTime: '2024-03-14T10:00:00',
          timeZone: 'Asia/Kolkata',
        },
        end: {
          dateTime: '2024-03-14T12:00:00',
          timeZone: 'Asia/Kolkata',
        },
      };

      await calendar.events.insert({
        calendarId: 'primary',
        resource: event,
      });

      console.log('Event added to Google Calendar!');
    } catch (error) {
      console.error('Error adding event to Google Calendar:', error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddEvent}>Add Event to Google Calendar</button>
      </div>
    );
  }
}

export default GoogleCalendar;