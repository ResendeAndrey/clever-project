# Clever Project

## Overview

Clever Project is a modern web application designed to provide users with a seamless experience in managing their photos and authentication. It leverages a robust tech stack to ensure high performance, security, and scalability.

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express - to simulate the login
- **Authentication**: JSON Web Tokens (JWT)
- **API**: Axios for HTTP requests
- **State Management**: React Context, React Query
- **Testing**: Vitest
- **Build Tools**: Vite
- **Others**: dotenv for environment configuration

## Features

- **User Authentication**: Secure login using JWT tokens.
- **Photo Management**: View and manage a list of photos.
- **Responsive Design**: Mobile-first design with Tailwind CSS.
- **Favorite Photos**: Mark and manage favorite photos.
- **Lazy Loading**: Optimize image loading for better performance.

## Project Structure

```
/server              # Backend code
/src
  /components        # Reusable components
  /context           # Context API for state management
  /features          # Specific features like auth and photos
  /hooks             # Custom / Mutations / Query Global hooks
  /pages             # Application pages
  /services          # API services
  /utils             # Utility functions and validation schemas
/tests               # Test cases and configurations
```

## Getting Started

### Prerequisites

- Node.js
- yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/clever-project.git
   cd clever-project
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```bash
   PEXELS_API_KEY='Mz0iC21IFLz9HuN8ypIbJ54l8OuGnpW2IsVoQrYBEyagQXt1YeBEA7H0'
   JWT_SECRET='9f74a5d3e0c14fce9b3c4b8e6a7f8d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c'
   ```

### Running the Application

1. Start the development server:

   ```bash
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173` to view the application.

### Running Tests



```bash
yarn test
yarn test:ui - to see in a web interface
yarn test:coverage - to check the coverage of project
```
