# Inventory Management Project

## Overview
This project is an inventory management system that consists of a frontend application built with React and a backend API built with Node.js and Express. The application allows users to manage inventory items, including adding, updating, and deleting items.

## Project Structure
The project is organized into two main directories: `frontend` and `backend`.

### Frontend
- **src/components**: Contains reusable UI components for the frontend application.
- **src/pages**: Contains the main pages of the application, each representing a different view.
- **src/utils**: Contains utility functions that can be used throughout the frontend application.
- **src/App.js**: The main component of the frontend application that sets up routing and renders the main layout.
- **package.json**: Configuration file for the frontend application, listing dependencies, scripts, and metadata.

### Backend
- **src/controllers**: Contains controller files that handle the business logic for different routes.
- **src/models**: Contains model files that define the data structure and interact with the database.
- **src/routes**: Contains route files that define the API endpoints and link them to the appropriate controllers.
- **src/utils**: Contains utility functions that can be used throughout the backend application.
- **src/server.js**: The entry point for the backend application that sets up the Express server and middleware.
- **package.json**: Configuration file for the backend application, listing dependencies, scripts, and metadata.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the `frontend` directory and install dependencies:
   ```
   cd frontend
   npm install
   ```
3. Navigate to the `backend` directory and install dependencies:
   ```
   cd ../backend
   npm install
   ```
4. Start the backend server:
   ```
   npm start
   ```
5. In a new terminal, navigate to the `frontend` directory and start the frontend application:
   ```
   cd frontend
   npm start
   ```

## Usage
Once both the frontend and backend servers are running, you can access the application in your web browser at `http://localhost:3000`. You can manage your inventory items through the user interface provided by the frontend application.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.