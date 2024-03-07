import express from "express";

const app = express();

const PORT = 3000;

app.use(express.jason());

app.listen(PORT, () =>{
    console.log(`Sever is lsitening on port ${PORT}`);
});