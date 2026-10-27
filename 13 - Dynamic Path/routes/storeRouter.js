// External Module
const express = require('express')
const storeRouter = express.Router();
// Local Module
const storeControllers = require('../controller/storeController');

storeRouter.get("/",storeControllers.getIndex);
storeRouter.get("/homes",storeControllers.getHomes);
storeRouter.get("/bookings",storeControllers.getBookings);
storeRouter.get("/favourites",storeControllers.getFavouriteList);
storeRouter.get("/homes/:homeId",storeControllers.getHomeDetails);
storeRouter.post("/favourites",storeControllers.postAddToFavourites);
storeRouter.post("/favourites/delete/:homeId",storeControllers.postRemoveFromFavourites);

module.exports = storeRouter;