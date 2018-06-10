var db = require("../dbconnection");
var task = {
  getAllTask: function(callback) {
    return db.query("select * from task", callback);
  },
  getTaskById: function(id,callback) {
    return db.query("select * from task where Id=?",[id], callback);
  },
  addTask:function(item,callback){
      db.query("insert into task values(?,?,?)",[item.Id,item.Title,item.Status],callback);
  },
  deleteTask:function(id,callback){
    db.query("delete from task where Id=?",[id],callback);
  },
  updateTask:function(item,id,callback){
    db.query("update task set Title=?,Status=? where Id=?",[item.Title,item.Status,id],callback);
  }
};
module.exports = task;