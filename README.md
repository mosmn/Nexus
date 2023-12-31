# Nexus

A dynamic platform for sharing and accessing study materials and resources. Users can contribute and explore a wide range of study materials, including past exams, midterms, quizzes, exercises, and more. Nexus serves as a central hub where students can collaborate and access valuable educational content for specific subjects and courses.

## Architecture

The Nexus project follows the MVC (Model-View-Controller) architecture, a widely adopted design pattern in web development.

![MVC](https://media.geeksforgeeks.org/wp-content/uploads/20220224160807/Model1.png)

### Models
Models serve as the fundamental building blocks of the database. For each distinct entry type in the Nexus project (e.g., user, subject), a dedicated model has been meticulously crafted to encapsulate the specific details of that entry type. These models meticulously define the structure of information that is used by both views and controllers.

### Views
Views are responsible for crafting the user interface (UI) that users interact with. In the Nexus project, a templating engine has been thoughtfully chosen. These views dynamically generate the UI based on data provided by controllers, ensuring a seamless and engaging user experience.

### Controllers
Controllers are the decision-makers of the application. They determine which view to render and orchestrate the flow of information that populates it. Within the Nexus project, controllers play a pivotal role in shaping the user's interaction with the platform, ensuring a cohesive and responsive user journey.

## Data Flow

![Alt text](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes/mvc_express.png)

The diagram above illustrates the primary flow of data within the Nexus project and highlights essential components to be implemented when handling HTTP requests and responses. In addition to the views and routes, the diagram introduces "controllers," which are functions responsible for separating request routing logic from request processing.

### Key Components

1. **Routes**: Routes are responsible for directing incoming HTTP requests (including any encoded information in request URLs) to the appropriate controller functions.

2. **Controller Functions**: Controller functions play a crucial role in fetching requested data from the models, generating HTML pages to display the data, and returning these pages to users for viewing in their web browsers.

3. **Views (Templates)**: Views, often referred to as templates, are utilized by controllers to render data into visually appealing web pages that users interact with.

4. **Models**: Models are responsible for managing the data that is displayed in the views. They are also responsible for the validation of data and the business logic of the application.

The primary data flow within the Nexus project adheres to the following sequence:

- **Routes**: These components receive HTTP requests sent to the Express server and forward them to the relevant controller functions.

- **Controllers**: Controller functions manage the interaction with the models to read and write data. They utilize views or templates to render data into HTML, which is then sent back as an HTTP response to the client.