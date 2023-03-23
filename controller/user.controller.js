const { where } = require('sequelize')
const { mailService } = require('../helper/mail.helper')
const usermodel = require('../models/user.model')

exports.userinsertdata = async (req, res) => {
  try {
    const username = req.body.username
    const newpass =  Math.floor(100000 + Math.random() * 900000)
    // console.log(newpass);
    const email = req.body.email
    const checkmail = await usermodel.findOne({where:{ email: email} })
    
    if (checkmail == null) {
      
      
      
      if (username.length >= 2) {
        
        
        
        const userdata = new usermodel({
          username: req.body.username,
          birthdate: req.body.birthdate,
          email: req.body.email,
          password:newpass,
          gender: req.body.gender,
          moblie: req.body.moblie,
          city: req.body.city,
        })
        
        
        

        const data = await userdata.save()

      let  sub = "new password"
      let html = `<h1>password</h1> ${newpass}` 

     await mailService(email,sub,html)


        res.status(201).json({
          message: 'USERDATA INSERT SUCCESSFULLEY',
          status: 201,
          Data: data,
        })




      } else {
        res.status(403).json({
          message: 'USERNAME LENGTH IS 2 WORD',
        })
      }


      
    } else {
        res.status(409).json({
            message: 'USERNAME ALREADY EXIST',
            status: 409,
        })
    }



  } catch (error) {
    console.log('error::::::::', error)
    res.status(500).json({
      message: 'SOMETHING WENT WRONG',
      status: 500,
    })
  }
}



exports.loginuser = async (req,res) =>{
  
  try{
     const password = req.body.password
     const email = req.body.email
     const checkmail = await usermodel.findOne({where:{email:email}})

     if (checkmail == null) {
        res.status(402).json({
          message:"user is already exited",
          status:402
        })
     } else {
      if (checkmail.password == password) {
           const data = new usermodel({
            email : email,
            password: password
           })

           res.status(200).json({
            message: 'LOGIN SUCCESS',
            status:200
           })

      } else {
         res.status(403).json({
          message: 'PASSWORD IS NOT MATCH',
          status:403
         })
      }
     }
  }
  catch(error){
    console.log(error);
      res.status(500).json({
        message:"SOMETHING WENT WRONG",
        status:500
      })
  }

}

exports.getdata = async (req, res) => {
  try {
    const gender = req.body.gender
    const data = await usermodel.findAndCountAll({where:{gender:gender}})

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


exports.viewuserdata = async (req, res) => {
  try {
    const data = await usermodel.findOne({
      where: {
        id: req.params.id,
      },
    })

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

exports.updatedata = async (req, res) => {
  try {
    const updatedata = await usermodel.update(
      {
        username: req.body.username,
        birthdate: req.body.birthdate,
        email: req.body.email,
        gender: req.body.gender,
        moblie: req.body.moblie,
        city: req.body.city,
      },
      {
        where: {
          id: req.params.id,
        },
      },
    )

    res.status(200).json({
      message: 'UPDATE PROPERTY SUCCESSFULLY',
      status: 200,
    })
  } catch (error) {
    res.status(500).json({
      message: 'SOMETHING WENT WRONG',
      status: 500,
    })
  }
}

exports.deletedata = async (req, res) => {
  try {
    const updateuser = await usermodel.destroy({
      where: {
        id: req.params.id,
      },
    })

    res.status(201).json({
      message: 'DELETE DATA SUCCESSFULLEY',
      status: 201,
    })
  } catch (error) {
    res.status(500).json({
      message: 'SOMETHING WENT WRONG',
      status: 500,
    })
  }
}
