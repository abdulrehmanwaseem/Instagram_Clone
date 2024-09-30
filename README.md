# Instagram Clone (MERN Stack)

![Instagram Clone](https://img.shields.io/badge/MERN-Stack-blueviolet) ![Frontend](https://img.shields.io/badge/Frontend-Incomplete-orange) ![Authentication](https://img.shields.io/badge/Authentication-Partial-yellow)

This is a work-in-progress **Instagram Clone** built using the **MERN stack**. The app mimics key functionalities of Instagram, focusing on frontend implementation and basic authentication. The project is still under development, and additional features will be added in future iterations.

## Features

- **User Authentication**: Basic signup and login using JWT (JSON Web Tokens).
- **Frontend**: Core UI elements of the Instagram interface are partially implemented.
- **Posts**: Users can create and view posts.
- **Comments and Likes**: Features will be added in future improvements.

## Tech Stack

- **MongoDB**: Database for storing user data and posts.
- **Express.js**: Backend framework to handle API routes and server-side logic.
- **React.js**: Frontend framework to build the user interface.
- **Node.js**: Backend runtime environment for handling server requests.

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/instagram-clone-mern.git
   cd instagram-clone-mern
   ```

2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the backend directory and add the following:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=yourport
     ```

5. Run the backend server:
   ```bash
   cd server
   npm start
   ```

6. Run the frontend React app:
   ```bash
   cd ../client
   npm start
   ```

7. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Learning Outcomes

- Strengthened my understanding of **authentication** in the MERN stack.
- Gained experience working with frontend components and state management in **React**.
- Improved my ability to integrate **MongoDB** for user and post data storage.
- Experimented with **JWT** for secure token-based authentication.

## Future Improvements

- Complete the frontend UI to fully mimic Instagram's interface.
- Add **commenting** and **like** functionalities for posts.
- Improve authentication, including **password resets** and **OAuth** (Google, Facebook).
- Implement a **real-time feed** and notifications using **WebSockets** or **Firebase**.

## License

This project is open-source and available under the [MIT License](./LICENSE).
