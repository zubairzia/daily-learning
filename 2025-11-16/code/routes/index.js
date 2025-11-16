const express = require('express');
const router = express.Router();

// Example route
router.get('/test', (req, res) => {
    res.send("Route works!");
});

module.exports = router;
