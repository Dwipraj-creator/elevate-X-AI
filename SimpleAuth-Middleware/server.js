const express = require("express");

const app = express();
app.use(express.json())
const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (authHeader !== "Bearer secret123") {
        return res.status(401).json({
            error: "Unauthorized access"
        });
    }

    next();
};
app.get("/public", (req, res) => {
    res.json({
        message: "This is a public route"
    });
});
app.get("/profile", authMiddleware, (req, res) => {
    res.json({
        name: "Student User",
        role: "Developer"
    });
});
app.get("/dashboard", authMiddleware, (req, res) => {
    res.json({
        message: "Welcome to dashboard"
    });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});