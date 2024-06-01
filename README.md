# Task Manager Application

## Overview
This project is a Task Manager application built using Angular. The application allows users to manage a list of tasks, with functionalities to add, complete, and delete tasks. User authentication is implemented to ensure that only logged-in users can access and manage tasks. The application also includes registration and logout functionalities.

## Features
- **Task Management**: Add, complete, and delete tasks.
- **User Authentication**: Login, registration, and logout.
- **Routing Guards**: Protect routes from unauthorized access.
- **Local Storage**: Persist user data and tasks between sessions.
- **State Management**: Use of BehaviorSubject to manage application state.

## Installation

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-repo/task-manager.git
    cd task-manager
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the application**:
    ```sh
    ng serve
    ```
    Open your browser and navigate to `http://localhost:4200/`.
4. Click on Create Account to create account on your browser.



## Components

### TaskListComponent
- Displays the list of tasks.
- Provides options to add, complete, and delete tasks.

### TaskItemComponent
- Represents a single task item.
- Provides a checkbox to mark the task as complete and a button to delete the task.

### AddTaskComponent
- Provides a form to add a new task.

### EditTaskComponent
- Provides a form to edit a new task when clicked on task item.

### LoginComponent
- Provides a form for users to log in.

### RegisterComponent
- Provides a form for users to register a new account.

## Services

### AuthService
- Handles user authentication, including login, logout, and registration.
- Manages the authentication state using `BehaviorSubject`.

### TaskService
- Manages the task list and provides methods to add, complete, and delete tasks.
- Uses `BehaviorSubject` to manage the task state and persist data in local storage.

## Guards

### AuthGuard
- Protects routes that should only be accessible to authenticated users.
- Redirects unauthenticated users to the login page.

### LoginGuard
- Prevents authenticated users from accessing the login page.
- Redirects authenticated users to the task list page.

### TaskCompletionGuard
- Prevents authenticated users from accessing the edit task page if the task is completed.
- Redirects authenticated users to the task list page.

## Usage

### Adding a Task
1. Navigate to the task list page.
2. Use the form to enter the task details.
3. Click the "Add Task" button to add the task to the list.

### Editing a Task
1. Navigate to the task list page.
2. Click on a task item to edit the specific task.
3. Use the form to enter the new task.
4. Click on the "Save" button to update the task.


### Completing a Task
1. Navigate to the task list page.
2. Click the checkbox next to a task to mark it as complete.

### Deleting a Task
1. Navigate to the task list page.
2. Click the "Delete" button next to a task to remove it from the list.

### Logging In
1. Navigate to the login page.
2. Enter your username and password.
3. Click the "Login" button to log in.

### Registering a New Account
1. Navigate to the registration page.
2. Enter your desired username and password.
3. Click the "Register" button to create a new account.

### Logging Out
1. Click the "Logout" link in the navigation menu to log out.

