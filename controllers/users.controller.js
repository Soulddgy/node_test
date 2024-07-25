const { message } = require("statuses");
const Users = require("../models/users.model.js");

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content is Empty"
        });
    }
    const users = new Users({
        id: req.body.id,
        name: req.body.name,
        age: req.body.age
    });

    Users.create(users, (err, data) =>{
        if(err)
            res.status(500).send({
        message: "Error MSG"
        });
        else{
            res.send(data);
        }
    });
}

exports.findOne = (req, res) => {
      
    Users.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `Not found SW_Device with id ${req.params.id}.`
              });
            } 
            else {
              res.status(500).send({
                message: "Error retrieving SW_Device with id " + req.params.id
              });
            }
          } 
          else 
              res.send(data);
        });
};

exports.deleteOne = (req, res) =>{

  Users.delete(req.params.id, (err, data) =>{
    if (err) {
      if (err.kind === "no such data") {
        res.status(404).send({
          message: `Not found SW_Device with id ${req.params.id}.`
        });
      } 
      else {
        res.status(500).send({
          message: "Error retrieving SW_Device with id " + req.params.id
        });
      }
    } 
    else{
      res.send({ message: "Delete complete with id " + req.params.id });

    }
  });
}
