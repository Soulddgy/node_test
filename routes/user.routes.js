module.exports = app => {
    const users = require("../controllers/users.controller.js");

    var router = require("express").Router();

    router.post("/create", users.create);

    router.get("/find:id", users.findOne);

    router.get("/delete:id", users.deleteOne)

    app.use('/api/users', router);
}
