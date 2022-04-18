const express = require("express");
const app = express();
const port = process.env.port || 3000;
const path = require("path");

const staticPath = path.join(__dirname, "../node/Public")

app.use(express.static(path.join(__dirname, "../node/Public")))

app.get("/", (req,res)=> {
    res.sendFile(staticPath)
})

app.listen(port, () => {
    console.log(`port is listing at ${port}`)
})
