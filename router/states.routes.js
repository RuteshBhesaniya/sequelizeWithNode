const router = require('express').Router();

const {
    statesdata,
    getdata
}=require("../controller/states.controller")

router.post("/insertstate",statesdata)
router.get("/getstate",getdata)

module.exports = router