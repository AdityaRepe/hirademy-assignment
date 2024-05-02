
### Application Overview:

This frontend application is designed to interact with the APIs provided by softwium.com/fake-api/. It fetches data dynamically from these APIs to display information about books. The application consists of two main pages:

1. **Books Page:** Displays links to all available books. Each book name is clickable, allowing users to navigate to the Book Details Page.

2. **Book Details Page:** Displays detailed information about the selected book, including its title, ISBN, page count, and authors.

### Technology Stack:

- **Framework:** React.js
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Routing:** React Router
- **HTTP Client:** Axios

### Installation and Setup:

1. **Clone Repository:**
   ```
   git clone <repository_url>
   ```

2. **Install Dependencies:**
   ```
   cd <project_directory>
   npm install
   ```

3. **Environment Variables:**
   - Ensure that the `.env` file is present in the project root with the necessary API endpoint configurations.

4. **Run Application:**
   ```
   npm start
   ```

### Folder Structure:

- **`src/components/`**: Contains React components used throughout the application.
- **`src/pages/`**: Houses the main pages of the application (Books Page, Book Details Page).
- **`src/utils/`**: Utility functions and helper modules.
- **`src/context/`**: React Context API setup for managing application state.
- **`src/api/`**: Functions to interact with the API endpoints.

### Implementation Details:

- **Component-Based Architecture:** The application follows a component-based architecture for better code organization and reusability.
- **State Management:** React Context API is utilized for managing application-level state.
- **Routing:** React Router is implemented to handle navigation between different pages of the application.
- **API Interaction:** Axios is used as the HTTP client to fetch data from the provided APIs.
- **Error Handling:** Proper error handling is implemented for API requests to ensure a smooth user experience.
- **Responsive Design:** Tailwind CSS is used for responsive design, making the application mobile-friendly.

### Demo Recording:

A demo video showcasing the functionality of the frontend application, including navigation between pages, data loading from APIs, and interaction with the UI, is available [here](<https://drive.google.com/file/d/1mcGASc6spK8uVG19YeUqtP7vHIqUAlGW/view?usp=sharing>).

### GitHub Repository:

The frontend application is hosted on GitHub. You can access the repository [here](<https://github.com/AdityaRepe/hirademy-assignment>).

---

Feel free to reach out if you have any questions or need further assistance.
