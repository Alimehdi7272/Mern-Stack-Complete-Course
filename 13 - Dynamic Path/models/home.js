// Core Module
const fs = require("fs");
const path = require("path");

//Local Module
const rootDir = require("../utils/pathUtil");
const Favourite = require("./favourite");

const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    ((this.houseName = houseName),
      (this.price = price),
      (this.location = location),
      (this.rating = rating),
      (this.photoUrl = photoUrl));
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      if(this.id){ // Edit home
        registeredHomes = registeredHomes.map(home =>
          home.id == this.id ? this : home
        );
      }else{ // Add home
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }

   static findById(homeId, callback) {
    Home.fetchAll((home) => {
      const homes = home.find((home) => home.id === homeId);
      callback(homes);
    });
  }

  static deleteById(homeId, callback) {
    Home.fetchAll((homes) => {
      homes = homes.filter((home) => home.id !== homeId);
      fs.writeFile(homeDataPath,JSON.stringify(homes),error =>{
        Favourite.deleteById(homeId,callback);
      });
    });
  }

};
