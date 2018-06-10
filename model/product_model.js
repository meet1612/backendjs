var db=require("../dbconnection");
var product={
    getAllProduct:function(callback){
        return db.query("select * from product",callback);
    },
    getProductById: function(id,callback) {
        return db.query("select * from product where Id=?",[id], callback);
      },
    addProduct:function(item,callback){
        return db.query("insert into product values(?,?,?,?,?,?)",[item.Id,item.Name,item.Price,item.Image,item.Mfg,item.Soh],callback);
    },
    deleteProduct:function(id,callback){
        db.query("delete from product where Id=?",[id],callback);
    },
    updateProduct:function(item,id,callback){
        db.query("update product set Name=?,Price=?,Image=?,Mfg=?,Soh=? where Id=?",[item.Name,item.Price,item.Image,item.Mfg,item.Soh,id],callback);
    }
};
module.exports=product;