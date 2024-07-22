# Text-Translator-be
## Deployed Frontend Link: 

## Project Presentation Video Link: 
This is the text-translator backend repo



# Translator Backend

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Translator Backend application provides a robust backend for translating text between various languages using the Google Translate API. It stores the translation history in a MongoDB database and provides simple API endpoints for translation and health checks.

## Features

- Translate text from one language to another using the Google Translate API.
- Save translation history to a MongoDB database.
- Simple API endpoints for translation and health check.

## Technologies Used

- Node.js
- Express
- dotenv
- cors
- translate-google-api

## Setup and Installation

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (>=14.x)

### Installation Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Deepak-25yadav/text-translator-be.git
    cd translator-backend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    

3. **Start the application:**

    ```bash
    npm start
    ```

    The server will be running at `http://localhost:8080`.

## Usage

Once the server is running, you can use the provided API endpoints to interact with the translation service.

## API Endpoints

### Health Check

- **GET /translator/**

  **Response:**
  ```json
  {
    "message": "Congratulations your translator is working fine."
  }


