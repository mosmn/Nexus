# Controllers

In the Nexus project, we adhere to the Model-View-Controller (MVC) architecture to maintain a structured and organized codebase. The Controllers folder plays a crucial role in this architecture by housing the route handler callbacks. These controllers are responsible for handling incoming HTTP requests, processing data, and delivering responses.

## Purpose

The primary purpose of the Controllers is to keep our routes clean and maintainable. Instead of defining route handler functions directly in the route files, we encapsulate them within dedicated controller modules. This separation of concerns offers several advantages:

1. **Modularity**: Each controller focuses on a specific aspect of the application, such as users, materials, subjects, etc. This modularity simplifies code maintenance and enhances code readability.

2. **Reusability**: Controllers can be reused across multiple routes or endpoints. For example, user-related operations, like profile management or authentication, are handled by the UserController and can be easily integrated into various parts of the application.

3. **Testing**: Separating route handlers into controllers facilitates unit testing. You can test each controller function independently, ensuring that they work correctly.

4. **Scalability**: As the project grows, adding new features or routes becomes more manageable. You can create new controllers to handle new functionality without cluttering existing routes.

## Controller Structure

Each controller module follows a consistent structure:

```javascript
// Example UserController
const UserModel = require('../models/userModel'); // Import the corresponding model
const { validationResult } = require('express-validator');

// Define route handler callbacks as methods within the controller
const UserController = {
  // Example route handler for user registration
  async registerUser(req, res) {
    try {
      // Request validation using express-validator
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Business logic and data manipulation
      // ...

      // Sending an HTTP response
      return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },

  // Other route handlers for user-related operations
  // ...
};

module.exports = UserController;
```

## Using Controllers

To use a controller in a route, import the controller module and invoke the appropriate method as the route handler. Here's an example of how to use the UserController for user registration:

```javascript
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

// Define a route that uses the UserController's registerUser method
router.post('/register', UserController.registerUser);

// Other routes using UserController methods
// ...

module.exports = router;
```

By organizing our route handler callbacks in this manner, we maintain a clean and efficient codebase, making it easier to develop and maintain the Nexus platform.