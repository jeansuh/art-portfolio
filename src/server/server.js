import express from "express";
import axios from "axios";
import cors from "cors"

const app = express();
const port = 3001;

app.use(cors());

app.get('/', (req, res) => {
    const url = 'https://i.imgur.com/Y07bj5m.jpeg';
    res.json({url});
});

app.listen(port, () => {
    console.log(`running on port ${port}`)
}) 