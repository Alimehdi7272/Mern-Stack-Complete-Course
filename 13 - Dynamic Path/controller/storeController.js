const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: " Homes List",
      currentPage: "home",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites(favourites =>{
        Home.fetchAll((registeredHomes) => {
            const favouriteHomes = registeredHomes.filter(home => favourites.includes(home.id));
            res.render("store/favourite-list", {
              favouriteHomes: favouriteHomes,
              pageTitle: "My Favourites",
              currentPage: "favourites",
            });
        });
  })
};

exports.postAddToFavourites = (req,res,next) => {
  Favourite.addToFavourite(req.body.id, error =>{
    if(error){
      console.log('Error while marking favourites :',error);
    }
    res.redirect("/favourites");
  });
  
}

exports.postRemoveFromFavourites = (req,res,next) =>{
      const homeId = req.params.homeId;
      console.log('came into remove favourites',homeId);
      Favourite.deleteById(homeId,error=>{
          if(error){
            console.log('Error while removing from favourites :',error);
          }
          res.redirect('/favourites');
      });
  
}

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("At home detail page", homeId);
  Home.findById(homeId, (home) => {
    if(!home) {
      console.log('home not found');
      res.redirect("/homes");
    }
    else { 
    console.log('home details found',home);
    res.render("store/home-detail", {
      home : home,
      pageTitle: "detail page",
      currentPage: "home"
    });
  }

  });
};
