# Real-Time Chat Application

This repository contains the source code for a real-time chat application built with React on the frontend and Node.js with Socket.IO on the backend. The application allows users to send and receive messages in real-time.

## Features

- Real-time messaging using WebSockets.
- Simple and clean user interface.
- Supports multiple users to send and receive messages simultaneously.

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.14.0 or later)

### Installation

1. **Clone the repository:**

   ```
   git clone https://github.com/sujansince2003/chat-app-Socket-React.git
   cd chat-app-Socket-React

   ```

2. **Install dependencies:**

   For the backend:

   ```
   cd server
   npm install
   ```

   For the frontend:

   ```
   cd client
   npm install
   ```

3. **Start the server:**

   Navigate to the server directory and start the server:

   ```
   cd server
   npm start
   ```

   The server will start on `http://localhost:3001`.

4. **Start the client:**

   In a new terminal window, navigate to the client directory and start the client:

   ```
   cd client
   npm start
   ```

   The client will start on `http://localhost:3000`.

## Usage

1. Open two or more browser windows or tabs and navigate to `http://localhost:3000`.
2. Enter a message in the input field and click the "Send" button.
3. The message will be sent to all connected clients in real-time.


## License

This project is licensed under the MIT License

## Acknowledgments

- [Socket.IO](https://socket.io/) for real-time communication.
- [React](https://reactjs.org/) for building the user interface.
- [Express](https://expressjs.com/) for the server framework.

