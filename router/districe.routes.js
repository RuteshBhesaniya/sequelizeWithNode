const router = require('express').Router()

const {
    districedata,
    getdata
} = require('../controller/districe.controller')

router.post("/districedata",districedata)
router.get("/getdistrice",getdata)

module.exports = router