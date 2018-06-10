var db=require("../dbconnection");
var student={
    getAllStudent(callback){
        db.query("select * from student",callback);
    },
    getStudentById: function(id,callback) {
        return db.query("select * from student where Id=?",[id], callback);
      },
    addStudent(item,callback){
        db.query("insert into student values(?,?,?,?,?,?)",[item.Id,item.Name,item.Mobile,item.Gender,item.City,item.Fees],callback);
    },
    deleteStudent:function(id,callback){
        db.query("delete from student where Id=?",[id],callback);
    },
    updateStudent:function(item,id,callback){
        db.query("update student set Name=?,Mobile=?,Gender=?,City=?,Fees=? where Id=?",[item.Name,item.Mobile,item.Gender,item.City,item.Fees,id],callback);
    }
};
module.exports=student;