const express = require("express");
const cors = require("cors");
require("dotenv").config();

const industryRoutes 			= require("./routes/industryRoutes");
const vendorRoutes 				= require("./routes/vendorRoutes");
const categoryRoutes 			= require("./routes/categoryRoutes");
const attributesRoutes 			= require("./routes/attributesRoutes");
const attributesValueRoutes 	= require("./routes/attributesValueRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test API
app.get("/", (req, res) => {
    res.json({
        status: true,
        message: "API Running"
    });
});

// Routes
app.use("/api/industries", industryRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/attributes", attributesRoutes);
app.use("/api/attributes-value", attributesValueRoutes);

// 404 Handler
app.use((req, res) => {
    res.status(404).json({
        status: false,
        message: "API Route Not Found"
    });
});

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        status: false,
        message: "Internal Server Error"
    });
});


// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});