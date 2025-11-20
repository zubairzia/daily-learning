📅 Day 3 – Node.js & Express Backend Progress
🚀 Focus of the Day

Today I worked on understanding Express routing, project structure, and how APIs actually work inside a Node.js backend. I learned the difference between filesystem folders and API routes, and built my first working Express API endpoint.

⭐ What I Learned Today
✅ 1. How Express Routing Works

Routes are not folders on disk — they are virtual URL paths handled by Express.

A route like /api/test exists only when the server is running, not in the filesystem.

Express builds routes using code, not folder structure.

✅ 2. How Routers Are Mounted

I learned how Express combines paths:

In app.js:

app.use('/api', mainRoutes);


In routes/index.js:

router.get('/test', ...);


Full URL becomes:

👉 /api/test
(even though no api/test folder exists)

✅ 3. Understanding Folder Structure

I finalized a clean backend structure:

src/
  server.js
  app/
    app.js
  routes/
    index.js


server.js → starts the server

app.js → loads Express + routes

routes/index.js → defines API endpoints

✅ 4. Created My First Working Route

Inside routes/index.js I added:

router.get('/test', (req, res) => {
    res.send("Route works!");
});


Then tested:

👉 http://localhost:3000/api/test

and confirmed the backend responds correctly.

🧠 Key Concept I Understood Today

Routes are NOT files or folders.
Routes are URL patterns handled by Express in code.

This cleared up a major confusion about why no api/test folder exists.

🔥 Today’s Wins

Successfully created and tested /api/test

Fixed routing structure

Improved understanding of Express

Cleaned up project organization

Built confidence working with routers and mounting paths

🎯 Plan for Tomorrow (Day 4)

Add more routes (e.g., /api/customers)

Begin working with Prisma models

Implement CRUD (Create/Read/Update/Delete)

Test endpoints with Postman or Thunder Client
