const districecontroller = require("../models/districe.model");

exports.districedata = async (req,res) =>{
    try {
        const districe = new districecontroller({
            name:req.body.name,
            statename:req.body.statename,
            people:req.body.people
        })

        const data = await districe.save();

        res.status(201).json({
            message:'DISTRICE DATA INSERT SUCCESSFULLEY',
            status:201
        })

    } catch (error) {
        res.status(500).json({
            message:"SOMETHING WENT WRONG",
            status:500
        })
    }
}

exports.getdata = async (req, res) => {
    try {
        const male = req.body.male
      const data = await usermodel.findAndCountAll({where:{male:male}})
  
      if (data) {
        res.status(200).json({
          message: 'GET PROPERTY SUCCESSFULLY',
          status: 200,
          Data: data,
        })
      } else {
        res.status(404).json({
          message: 'PROPERTIES NOT FOUND...',
          status: 404,
        })
      }
    } catch (error) {
      console.log('error:::', error)
      res.status(500).json({
        message: 'SOMETHING WENT WRONG',
        status: 500,
      })
    }
  }