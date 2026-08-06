# 🍋 Little Lemon Restaurant Web Application

Little Lemon is a modern, responsive web application designed for a family-owned Mediterranean restaurant located in Chicago. Built with React, this application features full table reservation capabilities, dynamic menu specials, user reviews, and comprehensive form validation.

---

## 🚀 Features

- **Table Reservation System:** Interactive booking form with date, time, guest count, and occasion selection.
- **Form Validation & State Management:** Dynamic validation ensuring form fields meet criteria before submission, backed by unit testing.
- **Responsive Navigation:** Smooth page routing implemented with React Router (`BrowserRouter` & `MemoryRouter` testing setup).
- **Modern Styling:** Styled using custom CSS, following an editorial layout inspired by wireframe specifications.
- **Unit Tested:** Component test suite built with React Testing Library and Jest to guarantee reliable user interactions.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, JavaScript (ES6+), HTML5, CSS3
- **Routing:** React Router v6
- **Testing:** React Testing Library, Jest
- **UI & Wireframing:** Figma

---

## ⚙️ Getting Started & Setup Instructions

Follow these instructions to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/little-lemon.git](https://github.com/your-username/little-lemon.git)
   cd little-lemon

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## 📂 Project Structure

```text
little-lemon/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── images/                # Asset storage for icons and dish photos
│   ├── App.css                # Global and component styles
│   ├── App.js                 # Primary application container
│   ├── App.test.js            # Main integration test
│   ├── BookingForm.js         # Interactive reservation form component
│   ├── BookingForm.test.js    # Unit tests for reservation logic and validation
│   ├── BookingPage.js         # Reservation page layout wrapper
│   ├── CallToAction.js        # Hero section component
│   ├── Chicago.js             # About section / owner background component
│   ├── ConfirmedBooking.js    # Booking confirmation screen
│   ├── CustomersSay.js        # Testimonials section component
│   ├── Footer.js              # Footer navigation component
│   ├── Header.js              # Navigation bar header
│   ├── HomePage.js            # Main landing page wrapper
│   ├── Main.js                # State management and API handling wrapper
│   ├── Main.test.js           # Unit tests for initial states and reducers
│   ├── Nav.js                 # Links and mobile menu navigation
│   └── Specials.js            # Weekly highlights component
└── README.md
```