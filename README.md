Smart Student Timesheet System
Introduction

The Smart Student Timesheet System is a web application designed to display a student's timetable based on their name and ID. The system provides the full schedule of classes for each student and highlights the current class based on the system's time and day. Additionally, it can optionally indicate the next upcoming class.

Task Description

The project includes a mockup API that retrieves the student’s timesheet and the classes assigned to them, including the day, start time, and end time.

The user interface allows a student to enter their ID to fetch and display their schedule in a table format, with the current or next class highlighted automatically.

Features

Enter Student ID to fetch timesheet.

Display student details: Name, ID, Hours Attended.

Table listing the student’s classes:

Subject

Day

Start and End Time

Automatic highlighting of the current class or the next upcoming class.

Fully responsive UI.

Implementation Details
Architecture Patterns

Façade Pattern: Used to abstract communication between UI components and the data layer (mock API), including all business logic.

Strategy Pattern: Implemented in the data layer for defining contracts and concrete API strategies.

Coding Practices

Clean and readable code.

Components do not contain any HTTP calls; all data access goes through the facade.

Request and response objects are mapped into TypeScript interfaces.

Attributes are not initialized with dummy values, ensuring correct type safety.

Lazy loading is used for optimization of modules.

OOP principles are followed for scalable and maintainable code.

Mock API

Created using Postman.

API uses a POST request with headers including sessionID (an encrypted combination of timestamp + student ID).

Supports one or two student records for demonstration purposes.

Returns JSON responses containing student info and classSchedule.

Example Response:

{
"status": "200",
"message": "Students received successfully",
"count": 2,
"data": [
{
"studentId": "12345",
"name": "Ahmed Mohamed",
"date": "2025-01-20",
"hoursAttended": 6,
"classSchedule": [
{
"subject": "Mathematics",
"day": "Monday",
"startTime": "09:00",
"endTime": "11:00"
},
{
"subject": "Physics",
"day": "Monday",
"startTime": "12:00",
"endTime": "14:00"
}
]
}
]
}

Setup Instructions

Clone the repository:

git clone <repository-url>

Navigate to the project folder:

cd smart-student-timesheet

Install dependencies:

npm install

Run the application:

ng serve

Open the app in your browser at:

http://localhost:4200

Key Tips

Identify the current and next class based on day and time.

Use facade to isolate business logic from the UI.

Keep the UI components clean; no direct HTTP calls.

Use interfaces for all request and response objects.

Follow OOP and scalable design principles.

Project Structure
src/
│
├─ app/
│ ├─ features/
│ │ ├─ timesheet/
│ │ │ ├─ pages/ # UI Components
│ │ │ ├─ services/ # API services
│ │ │ ├─ strategies/ # Strategy pattern implementations
│ │ │ └─ facades/ # Façade for business logic
│
├─ assets/
├─ environments/
└─ README.md

Technology Stack

Angular 18+

TypeScript

Bootstrap 5 for responsive design

RxJS for reactive data handling

Postman for mock API

Notes

The system is designed for scalability and maintainability.

Easily extendable to multiple students or real API integration.

Highlights classes dynamically without reloading the page.
