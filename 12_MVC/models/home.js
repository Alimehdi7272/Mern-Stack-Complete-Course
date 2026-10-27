// Core Module
const fs = require('fs');
const path = require('path');

//Local Module
const rootDir = require('../utils/pathUtil');

module.exports = class Home {

  constructor(houseName,price,location,rating,photoUrl){
    this.houseName = houseName,
    this.price = price,
    this.location = location,
    this.rating = rating,
    this.photoUrl = photoUrl
  }
  
  save() {
    Home.fetchAll(registeredHomes =>{
      registeredHomes.push(this);
    const homeDataPath = path.join(rootDir,'data','homes.json');
    fs.writeFile(homeDataPath,JSON.stringify(registeredHomes),error =>{
      console.log('File Writing Concluded',error);
    });
    })
    
  }

  static fetchAll(callback){
    const homeDataPath = path.join(rootDir,'data','homes.json');
    fs.readFile(homeDataPath,(error,data) =>{
      callback(!error ? JSON.parse(data) : []);
    });
    
  }




  // save() {
  //   registeredHomes.push(this);
  // }

  // static fetchAll(){
  //   return registeredHomes;
  // }
}