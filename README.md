# React Quote Generator

This project was developed as part of freeCodeCamp's **Front End Development Libraries** course. The application fetches and displays random quotes from an API and allows users to share them on Twitter.

## Features

- **Random Quote Display**: Fetches and displays a random quote from a public API.
- **Tweet Integration**: Users can share the quote directly on Twitter with the click of a button.
- **Responsive Design**: Optimized for desktop and mobile screens.
- **Redux State Management**: Implements a global state for managing quotes with Redux and Redux Thunk middleware.

## Technologies Used

- **React**: For building the user interface.
- **Redux**: For state management.
- **Redux Thunk**: For handling asynchronous API requests.
- **Bootstrap**: For styling and responsive design.

## Getting Started

### Prerequisites

- **Node.js**: Install from [Node.js](https://nodejs.org/).
- **npm or yarn**: Comes with Node.js or can be installed separately.

### Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/abelgideon/react-quote-generator.git
   ```

2. Navigate to the project directory:  
   cd react-quote-generator

3. Install dependencies:  
   npm install

4. Start the development server:  
   npm start

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage

1. **Local Usage**:
   - Click the "New Quote" button to fetch and display a random quote.
   - Click the "Tweet" button to share the displayed quote on Twitter.

2. **GitHub Pages Deployment**:  
   Alternatively, you can access the live site [here](https://abelgideon.github.io/react-quote-generator/).


## Project Highlights

### State Management with Redux

The app uses Redux for managing the state of quotes. The global store is updated with the fetched quote data, which is then passed as props to the React components.

### Asynchronous Data Fetching

The app uses Redux Thunk to handle asynchronous actions, such as fetching data from the quote API. This ensures a smooth user experience.

### Responsive Design

The app uses Bootstrap for layout and styling, making it accessible and visually appealing on both mobile and desktop devices.

## API Integration

This app fetches random quotes from the following API:  
[Quotes API](https://quotes-api-self.vercel.app/quote)

## Contributing

Contributions are welcome! If you'd like to contribute: