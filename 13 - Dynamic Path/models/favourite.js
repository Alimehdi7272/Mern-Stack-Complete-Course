// Core Module
const fs = require("fs");
const path = require("path");

//Local Module
const rootDir = require("../utils/pathUtil");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {
  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }

  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home Id is already marked favourite.");
      } else {
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), callback);
      }
    });
  }

  static deleteById(delHomeId,callback){
      Favourite.getFavourites(homeIds =>{
        homeIds = homeIds.filter(home => home !== delHomeId );
        fs.writeFile(favouriteDataPath, JSON.stringify(homeIds), callback);
      });
  }
};
