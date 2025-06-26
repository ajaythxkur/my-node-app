import express from "express";

const app = express();

app.get("/", async(req, res) => {
    res.json({ status: "working" })
})

app.listen(3000, function() {
    console.log(`server is running at port 3000`)
})