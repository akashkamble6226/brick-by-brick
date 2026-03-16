// async and defer are attributes used in the <script> tag in HTML.
// They control how JavaScript files are downloaded and executed without blocking the page.

// Normally, scripts block HTML parsing, which slows page loading.

// Example of normal script:

<script src="app.js"></script>

// Browser behavior:

// 1. HTML parsing stops
// 2. JS file downloads
// 3. JS executes
// 4. HTML parsing resumes

// This blocks the page.

// _____________________________________________

// 1️⃣ async
//<script async src="app.js"></script>

// How it works

// 1. HTML parsing continues
// 2. JS downloads in parallel
// 3. As soon as download finishes → script executes immediately

// So execution order is not guaranteed.

// Example:

//<script async src="a.js"></script>
//<script async src="b.js"></script>

// Possible execution order:

// b.js
// a.js

// because whichever downloads first executes first.

// Use case

// Use async when scripts are independent.

// Examples:

// analytics
// ads
// tracking scripts
// _______________________________________________________

// 2️⃣ defer
// <script defer src="app.js"></script>

// How it works

// 1. HTML parsing continues

// 2. JS downloads in parallel

// 3. Scripts execute after HTML parsing is complete

// Important:

// Execution order is preserved.

// Example:

// <script defer src="a.js"></script>
// <script defer src="b.js"></script>

// Execution order will be:

// a.js
// b.js

// even if b.js downloads first.