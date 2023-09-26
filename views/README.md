# Views

A template is a text file defining the structure or layout of an output file, with placeholders used to represent where data will be inserted when the template is rendered (in Express, templates are referred to as views).

In this application we use Pug (formerly known as Jade) for our templates.

Pug uses a representation of HTML where the first word in any line usually represents an HTML element, and indentation on subsequent lines is used to represent nesting. The result is a page definition that translates directly to HTML, but is more concise and arguably easier to read. The downside of using Pug is that it is sensitive to indentation and whitespace (if you add an extra space in the wrong place you may get an unhelpful error code). Once you have your templates in place, however, they are very easy to read and maintain.

## Configuring Pug