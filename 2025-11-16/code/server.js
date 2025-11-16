const app = require('./app/app.js'); // Correct path to app.js
const { connectDB } = require('./config/db.js'); 

const PORT = process.env.PORT || 3000;

async function startServer() {
    await connectDB(); 
    app.listen(PORT, () => {
        console.log(`🌍 Server listening on port ${PORT}`);
        console.log(`Access the API at http://localhost:${PORT}/api`);
    });
}

startServer();
