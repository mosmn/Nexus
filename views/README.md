# Views

Views in the Nexus application are templates that define the structure or layout of the output pages, with placeholders used to represent where data will be inserted when the template is rendered. We use Pug (formerly known as Jade) for our templates.

## Template Structure

Pug uses a representation of HTML where the first word in any line usually represents an HTML element, and indentation on subsequent lines is used to represent nesting. The result is a page definition that translates directly to HTML, but is more concise and arguably easier to read. However, it's important to note that Pug is sensitive to indentation and whitespace, so be cautious when formatting your templates.

## Configuration

To configure the template engine in the Nexus project, we've used the following setup:

```javascript
// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
```

This configuration tells Express to use Pug as the view engine and to search for templates in the `/views` subdirectory.

## Forms

Form handling in the Nexus application follows a standard pattern where the route sends a request to a controller function. The controller function performs any necessary database actions, including reading data from the models, then generates and returns an HTML page. Form data provided by the user is processed, and the server may redisplay the form with error information if any issues arise.

Here's an overview of the form processing flowchart:

![Form Processing Flowchart](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms/web_server_form_handling.png)

## Validation and Sanitization

Before storing data from a form, it must be validated and sanitized to ensure data integrity and security:

- **Validation** checks that entered values are appropriate for each field, such as being within the correct range or format, and verifies that all required fields have values.
- **Sanitization** removes or replaces characters in the data that could be used for malicious purposes.

In the Nexus project, we use the `express-validator` module to perform both validation and sanitization of form data.

### Installation

To use `express-validator`, install the module by running the following command:

```bash
npm install express-validator
```

### Usage

We import the necessary functions from `express-validator` in our controllers:

```javascript
const { body, validationResult } = require("express-validator");
```

Here's a brief explanation of key functions:

- `body([fields, message])`: Specifies fields in the request body (e.g., POST parameters) to validate and/or sanitize. You can chain validation and sanitization criteria, and define error messages if validation fails.

- `validationResult(req)`: Runs the validation, and the errors are available in the form of a validation result object. You can check if there were errors using `isEmpty()` and retrieve error messages with `array()`.

These functions help ensure that data from forms is validated and sanitized properly, improving data quality and security.

For more detailed information about [`express-validator`](https://express-validator.github.io/docs/#basic-guide), refer to the module's documentation on GitHub, which covers additional capabilities such as schema validation and custom validators.