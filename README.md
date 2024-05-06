# Job Listing Web App  

This is a job listing web application built using React and Redux. It allows users to browse through job listings, filter jobs based on various criteria, and apply for jobs easily.

## Features

- View job listings
- Filter job listings by company name, location, job role, minimum experience, and minimum salary
- Apply for jobs easily

## Prerequisites

- Node.js installed on your local machine
- Basic knowledge of React and Redux

## Installation

1. Clone the repository to your local machine:
2. Navigate to the project directory:
3. Install dependencies:

## Usage

1. Start the development server:
   
2. Open your browser and visit `http://localhost:3000` to view the app.

## API Integration

The application uses the following API to fetch job listings:

- **Endpoint**: `https://api.weekday.technology/adhoc/getSampleJdJSON`
- **Method**: POST
- **Headers**:
  - Content-Type: application/json
- **Body**:
  ```json
  {
    "limit": 10,
    "offset": 0
  }

job-listing-app/
  ├── src/
  │   ├── components/
  │   │   ├── Card/            # Job listing card component
  │   │   │   ├── Card.js      # Main card component
  │   │   │   ├── Input.module.css  # Styles for card component
  │   │   │   └── index.js     # Export card component
  │   │   ├── Home/            # Home component
  │   │   │   ├── Home.js      # Main home component
  │   │   │   └── index.js     # Export home component
  │   │   └── README.md        # Component README
  │   ├── redux/               # Redux related files
  │   │   ├── jobSlice.js      # Redux slice for job data
  │   │   └── store.js         # Redux store configuration
  │   ├── App.css              # Global styles
  │   ├── App.js               # Main application component
  │   ├── index.css            # Global styles
  │   └── index.js             # Application entry point
  └── README.md                # Project README file



