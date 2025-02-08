const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());


app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend's URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));


// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/InteriorDesign')
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Connection Error: ", err));

// Service Schema & Model
const serviceSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    image: String
});
const Service = mongoose.model("Service", serviceSchema);

// Admin Schema & Model
const adminSchema = new mongoose.Schema({
    email: String,
    password: String
});
const Admin = mongoose.model("Admin", adminSchema);

// Insert Dummy Admin Credentials (if not already inserted)
const insertDummyAdmin = async () => {
    const existingAdmin = await Admin.findOne({ email: "admin@example.com" });
    if (!existingAdmin) {
        await new Admin({ email: "admin@example.com", password: "admin123" }).save();
        console.log("Dummy Admin Inserted");
    }
};
insertDummyAdmin();

// CRUD Operations for Services
app.post('/services', async (req, res) => {
    try {
        const body = req.body;
        const data = new Service(req.body);
        await data.save();
        res.json({ message: "Service created successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/services', async (req, res) => {
    const data = await Service.find();
    
    res.json(data);
});



app.get('/services/:id', async (req, res) => {
    try {
        const { id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid ObjectId format" });
        }

        const data = await Service.findById(id);
        if (!data) {
            return res.status(404).json({ error: "Service not found" });
        }

        res.json(data);
    } catch (error) {
        console.error("Error fetching service:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/services/search/:key", async (req, res) => {
    const data = await Service.find({
        "$or": [
            { name: { $regex: req.params.key, $options: "i" } },
            { description: { $regex: req.params.key, $options: "i" } }
        ]
    });
    res.json(data);
});

app.put("/services/:id", async (req, res) => {
    const {name, image, description,_id, __v} = req.body;
    const data = await Service.findByIdAndUpdate(req.params.id, {name, image, description}, { new: true });
    res.json(data);
});

app.delete("/services/:id", async (req, res) => {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted successfully" });
});

// Delete All Services Endpoint
app.get("/services/delete/all", async (req, res) => {
    await Service.deleteMany({});
    res.json({ message: "All services deleted successfully" });
});

// Admin Login Endpoint
app.post("/admin/login", async (req, res) => {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email, password });
    if (admin) {
        res.json({ message: "Login Successful" });
    } else {
        console.log("invalid creds")
        res.status(401).json({ error: "Invalid Credentials" });
    }
});

// Start Server
app.listen(5000, () => {
    console.log("Server listening on port 5000");
});
