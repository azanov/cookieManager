cookieManager
==================

A small script for managing cookies in JavaScript

Usage
-----

### API

```javascript

// global
cookie.get(
	'name'
); // Returns the value of a cookie by its name, if it doesn't exist - null;

cookie.set(
	'name',    // Name of the cookie to set
	'value',   // Value of the cookie
	30,        // Optional, How many days should the cookie be valid?
	'test.com' // Optional, The domain name of the cookie
); // Sets a cookie

cookie.remove(
	'name'
); // Removes a cookie by its name

cookie.getDomain(); // Returns the current domain name. Empty string if it's localhost


// Or with jQuery
$.cookie.get(
	'name'
); // Returns the value of a cookie by its name, if it doesn't exist - null;

$.cookie.set(
	'name',    // Name of the cookie to set
	'value',   // Value of the cookie
	30,        // Optional, How many days should the cookie be valid?
	'test.com' // Optional, The domain name of the cookie
); // Sets a cookie

$.cookie.remove(
	'name'
); // Removes a cookie by its name

$.cookie.getDomain(); // Returns the current domain name. Empty string if it's localhost

```

### Quickstart:

```javascript
$.cookie.set('test', 'hello world!', 30);
var test = $.cookie.get('test');
$.cookie.remove('test');
```
