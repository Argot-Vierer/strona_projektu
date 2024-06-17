# GamersGatheringGround

GamersGatheringGround is a web application designed to provide a seamless experience for gamers to connect, share, and discover new games. The platform features a list of gamers, a filtering mechanism to search for specific users, and the ability to mark favorite users. Additionally, the application includes form validation for contact purposes.

## Features

### 1. User List and Filtering
- Fetch a list of users from the [Random User API](https://randomuser.me/api/?results=10).
- Display user details in a table format including picture, name, gender, location, email, username, date of birth, phone, cell, and nationality.
- Filter users in real-time using the search input.

### 2. Favorite Users
- Mark users as favorites.
- Remove users from the favorite list.
- Favorite users are displayed in a separate table.

### 3. Form Validation
- Validate contact forms to ensure all fields are correctly filled before submission.
- Check for required fields: first name, last name, email, and message.
- Validate email format using a regular expression.

## Technologies Used

- HTML
- CSS (Bootstrap for styling)
- JavaScript (JS for DOM manipulation and API interaction)
- Random User API for generating user data

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gamers-gathering-ground.git
