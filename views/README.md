# Views

In this project, we employ templates to define the structure and layout of our web pages, with placeholders serving as insertion points for dynamic data. These templates, commonly referred to as views in Express, play a pivotal role in rendering our web content.

## Pug Templates

Our chosen template engine is Pug, formerly known as Jade. Pug utilizes a unique representation of HTML, where the first word in each line typically signifies an HTML element, and subsequent indentation denotes nesting. This approach results in concise and readable page definitions that closely resemble HTML. However, it's important to note that Pug is sensitive to indentation and whitespace, so precision is key. Once templates are correctly configured, they become effortless to read and maintain.

## Configuration

To set up our template engine and directory structure, we initially ran the following command:

```bash
express . --view=pug
```

This command adjusted our `app.js` file to specify that Pug is the view engine to be used. It also instructed Express to search for templates in the `/views` subdirectory.

```javascript
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

These settings allow us to seamlessly integrate Pug templates into our Express application, streamlining the process of rendering dynamic web content.