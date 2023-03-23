const router = require('express').Router();

const{
    userinsertdata,
    loginuser,
    getdata,
    viewuserdata,
    updatedata,
    deletedata
}= require("../controller/user.controller")

router.post("/insert",userinsertdata)
router.post("/login",loginuser)
router.get("/get",getdata)
router.get("/view/:id",viewuserdata)
router.put("/updata/id",updatedata)
router.delete("/delete/id",deletedata)

module.exports = router