let pintoresContoller = {};
 /*LISTAR -> FIND()*/
 pintoresContoller.list = (requied, resezeCallback)=>{};
 pintores.find({})
 .limit(20)
 .skip(num:0)
 .exec(Callback:(err, pintor)=>{})
 if (err){}
       console.log('Error: ', err)
       }
       res.render(view:'../views/index',options:{
     Pintores: pintor,
     titulo:"Listado de pintores",
     year: new Date().getDate()
        })
      })

};

module.exports = pintoresContoller;

