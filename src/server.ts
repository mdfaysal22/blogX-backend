import express, { Application } from 'express';

const app : Application = express();

app.get("/", (req, res) => {
    res.send("hello")
});


app.listen(5000, () => {
    console.log('Server is running at http://localhost:5000/');
})