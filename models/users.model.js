const sql = require("../database/db.js");
sql.connect
// constructor
const Users = function(users) {
    this.id = users.id;
    this.name = users.name;
    this.age = users.age;
  };

Users.create = (newUsers, result) =>{
    sql.query("INSERT INTO users SET ?", newUsers, function(err, res){
        if(err){
            return result(err, null);
        }else{
            return result(null, {id: res.inserId, ...newUsers});
        }
    })
}

Users.findById = (id, result) =>{
    sql.query("SELECT * FROM users WHERE id = ?", [id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
        if(res.length){
            result(null, res);
            return;
        }else{
            return result({ kind: "not_found"}, null);
        }
        
    });
}

Users.delete = (id, result) =>{
    sql.query("DELETE FROM users WHERE id = ?", [id], (err, res) =>{
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.affectedRows == 0) {
            result({ kind: "no such data" }, null);
            return;
        }
        result(null, res);
        
    });
}



module.exports = Users;
