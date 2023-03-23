const statesmodel = require('../models/states.model')

exports.statesdata = async (req,res)=>{
    try {
        const data = new statesmodel({
            name:req.body.name,
            country:req.body.country
        })

        const Data = await data.save();

        res.status(201).json({
            message:"STATESDATA INSERT SUCCESSFULLEY",
            status:201,
            data:Data
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
      const data = await usermodel.findAndCountAll({where:{}})
  
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