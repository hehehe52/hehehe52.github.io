Ziroom Room Inspection Web App

This web application is designed to simplify room inspections at the  Ziroom apartment complex. The app provides a structured checklist for inspectors to go through different areas of a room and record their findings.

The application is built using HTML, CSS, and vanilla JavaScript, and is connected to a Google Sheets backend via Google Apps Script to automatically note down inspection items that have failed inspection. All inspection items that have the 'No' option checked are added to the Google sheets as they have failed inspection. Inspection items that have the 'Yes' or 'NIL' option selected do not need any further follow up, thus the data is not stored.

System Architecture

The app consists of three main parts:

Frontend Web App (HTML, CSS, JavaScript)

Google Apps Script (acts as a bridge/API)

Google Sheets (data storage)

How the Application Works
1. Start Inspection – Room Number Input

    When the app loads, a modal dialog prompts the inspector to enter the room number.
   
    The room number is displayed at the top of the page
   
    This ensures every inspection is clearly associated with a specific room before the checklist begins

3. Accordion-Based Inspection Sections

  The inspection checklist is divided into expandable accordion sections:

    Entrance

    Kitchen

    Bathroom

    Living Room

    Additional (custom tasks)

  This keeps the interface uncluttered and easy to navigate during real inspections.

3. Structured Checklist with Radio Buttons

  Each inspection item is presented as a question with three responses:

    Yes

    No

    NIL

  All questions are marked as required, ensuring:

    No inspection item can be skipped

    Every inspection is complete and consistent

4. Adding Custom Inspection Tasks
  
  A floating “+” button allows inspectors to add additional inspection items dynamically.

  These tasks appear under the Additional section

  This provides flexibility for unusual issues not covered in the standard checklist

5. Submission and Automatic Data Storage

  When the inspector presses Submit:

  The form data is collected by JavaScript

  The data is sent to a Google Apps Script web endpoint

  The Apps Script processes the request

  The inspection results are written into a Google Sheet

  An Apps Script sorts the results by room number

This removes the need for manual data entry and creates a centralized inspection record system.

Google Sheet used for storage: https://docs.google.com/spreadsheets/d/190O-qialg-3Vo6ncB8mClI4EoICXjmfI7pA73xhtPu8/edit?gid=0#gid=0
