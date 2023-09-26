# Views

In the Nexus application, views play a crucial role in defining the structure and layout of web pages. We utilize Pug (formerly known as Jade) as our chosen template engine for rendering these views.

Pug offers a more concise and arguably more readable representation of HTML. In Pug, HTML elements are denoted by the first word on each line, and nesting is indicated by proper indentation. This approach allows us to define page structures that directly translate to HTML. However, it's essential to note that Pug is sensitive to indentation and whitespace, so attention to detail is crucial to avoid potential errors. Once your templates are correctly structured, they become highly maintainable.

## Configuring the Template Engine

During the initial setup of this project, we configured the template engine using the following command:

```bash
express . --view=pug
```

This command, executed in the app's root directory, set Pug as our view engine and instructed Express to look for templates in the /views subdirectory.

In the `app.js` file, you'll find the following settings, which define our view engine and the directory where templates are stored:

```javascript
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

These configurations enable Express to seamlessly render views using the Pug template engine.

# Forms

Handling forms in the Nexus application follows similar patterns as displaying information about our models. When a form is submitted, the server routes the request to a controller function, which performs necessary database operations, including reading from or writing to the models. The controller function then generates an HTML page in response.

What adds complexity to form handling is the server's ability to process user-provided data and handle errors gracefully. Here's a high-level overview of the form processing flow:

![Form Processing Flowchart](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms/web_server_form_handling.png)

Starting with a user's request for a page containing a form (depicted in green), the server orchestrates the entire process, from rendering the initial form to handling data submission, validation, and redisplaying the form with error information when necessary. This ensures a smooth and user-friendly experience when interacting with forms in the Nexus application.