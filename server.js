const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//미들웨어
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//사용자 데이터를 저장할 배열
// const users = [{ id: 1, name: 'kim' }, { id: 2, name: 'sol' }];


//simple 
app.get("/", function (req, res) {
    return res.send("hello world");
})



require("./routes/user.routes.js")(app);


app.listen(port, function () {
    return console.log("server listening on port: ${port}")
})