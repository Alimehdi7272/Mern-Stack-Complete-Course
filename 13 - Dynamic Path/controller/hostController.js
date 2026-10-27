const Home = require("../models/home");

exports.getAddHome = (req,res,next) => {
   res.render('host/edit-home',
    {
      home : {},
      pageTitle:'Add Home to airbnb',
      currentPage:'addHome',
      editing: false
    });
}

exports.getEditHome = (req,res,next) =>{
   const homeId = req.params.homeId;
   const editing = req.query.editing === 'true';
   Home.findById(homeId, home =>{
        if(!home){ // agar null hai Ya undefined hai toh
          console.log('Home not found');
          return res.redirect("/host/host-home-list");
        }
        console.log(homeId,editing,home);
        res.render('host/edit-home',
              {
                home:home,
                pageTitle:'Edit Your Home',
                currentPage:'host-homes',
                editing: editing
              });
   });
   
}

exports.getHostHomes = (req,res,next) =>{
  Home.fetchAll(registeredHomes =>{
    res.render('host/host-home-list',{registeredHomes:registeredHomes,pageTitle:'Host Homes List',currentPage:'host-homes'});
  });
}

exports.postAddHome = (req,res,next) => {
  const{houseName,price,location,rating,photoUrl} = req.body;
  const home = new Home(houseName,price,location,rating,photoUrl);
  home.save();
  res.redirect('/host/host-home-list');
}

exports.postEditHome = (req,res,next) => {
   const{id,houseName,price,location,rating,photoUrl} = req.body;
  const home = new Home(houseName,price,location,rating,photoUrl);
  home.id = id;
  home.save();
  res.redirect('/host/host-home-list');
}

exports.postDeleteHome = (req,res,next) =>{
  const homeId = req.params.homeId;
  console.log('came in Delete home',homeId);
  Home.deleteById(homeId,error =>{
      if(error){
        console.log('Error while deleting home :',error);
      }
      res.redirect("/host/host-home-list");
  });
 
}