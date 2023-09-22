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