# 📝 Smart Student Timesheet System

## 🚀 Introduction
The **Smart Student Timesheet System** is a web application that displays a student's timetable based on their **name** and **ID**. The system provides the full schedule of classes and **highlights the current class** based on the system's time and day. Additionally, it can optionally indicate the **next upcoming class**.

---

## 🎯 Task Description
This project includes a **mock API** that retrieves a student’s timesheet and classes, including the **day, start time, end time, and subject**.  

Students can enter their **ID** to fetch their schedule, which is displayed in a **table format** with the current or next class **highlighted**.

---

## ✨ Features
- 🔹 Enter Student ID to fetch timesheet
- 🔹 Display student details: **Name**, **ID**, **Hours Attended**
- 🔹 Table listing the student’s classes:
  - Subject
  - Day
  - Start and End Time
- 🔹 Automatic highlighting of **current class** or **next class**
- 🔹 Fully **responsive UI**
- 🔹 **Lazy loaded modules** for optimization

---

## 🏗 Architecture

### Patterns Used
- **🛡 Façade Pattern**: Abstracts communication between components and the data layer, encapsulating all business logic.  
- **⚡ Strategy Pattern**: Implements contracts and concrete strategies in the data layer for fetching and processing data.

### Project Structure
src/
│
├─ app/
│ ├─ features/
│ │ ├─ timesheet/
│ │ │ ├─ pages/ # UI Components
│ │ │ ├─ services/ # API services (Strategy pattern)
│ │ │ ├─ strategies/ # Concrete strategy implementations
│ │ │ └─ facades/ # Facade for business logic
│
├─ assets/
├─ environments/
└─ README.md

---

## 🛠 Technologies Used
- **Angular 18+** ⚛️  
- **TypeScript** 🟦  
- **Bootstrap 5** 🖌️ for responsive UI  
- **RxJS** ⚡ for reactive programming  
- **Postman** 📨 for mock API testing  
- **OOP** principles for scalable and maintainable code  

---

## 🗂 Mock API
- Created using **Postman**  
- **POST request** with header `sessionID` (encrypted timestamp + student ID)  
- Returns JSON data for **one or two students**  

**Example Response:**
```json
{
  "status": "200",
  "message": "Students received successfully",
  "count": 1,
  "data": [
    {
      "studentId": "12345",
      "name": "Ahmed Mohamed",
      "hoursAttended": 18,
      "classSchedule": [
        {
          "subject": "Computer Science",
          "day": "Thursday",
          "date": "2025-12-25",
          "startTime": "08:49",
          "endTime": "11:00"
        },
        {
          "subject": "Mathematics",
          "day": "Saturday",
          "date": "2025-12-27",
          "startTime": "09:00",
          "endTime": "11:00"
        },
        {
          "subject": "Physics",
          "day": "Sunday",
          "date": "2025-12-28",
          "startTime": "10:00",
          "endTime": "12:00"
        },
        
        {
          "subject": "Algorithms",
          "day": "Monday",
          "date": "2025-12-29",
          "startTime": "11:00",
          "endTime": "13:00"
        },
        {
          "subject": "Data Structures",
          "day": "Tuesday",
          "date": "2025-01-30",
          "startTime": "10:00",
          "endTime": "13:00"
        },
        {
          "subject": "Data Structures",
          "day": "Wedensday",
          "date": "2025-01-31",
          "startTime": "10:00",
          "endTime": "13:00"
        },

        {
          "subject": "Software Engineering",
          "day": "Thursday",
          "date": "2026-01-01",
          "startTime": "12:00",
          "endTime": "14:00"
        }
      ]
    }
  ]
}

