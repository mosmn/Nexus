# Nexus

A dynamic platform for sharing and accessing study materials and resources. Users can contribute and explore a wide range of study materials, including past exams, midterms, quizzes, exercises, and more. Nexus serves as a central hub where students can collaborate and access valuable educational content for specific subjects and courses.

## Architecture

This project is built using the MVC (Model-View-Controller) architecture.

![MVC](https://media.geeksforgeeks.org/wp-content/uploads/20220224160807/Model1.png)

Models are the basic building blocks of your database. So for every type of entry in the DB (user, subject, etc. in the nexus Project), l've create a model that will hold the details of that type of entry. Models define the types of information that get used by your views and controllers.

Views are, of course, the component that generates the UI for your application. In our case, we’ve selected a templating engine that uses data supplied by a controller to display the desired information.

Controllers are the components that decide what view to display and what information is going to be put into it.