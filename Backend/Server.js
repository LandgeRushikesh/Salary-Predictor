import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/predict", async (req, res) => {

    const experience = req.body.experience;

    const response = await axios.post(
        "http://localhost:5000/predict",
        { experience }
    );

    res.json(response.data);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});