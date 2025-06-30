const express =require("express");
const router = express.Router();
const {createDonor,getAlldonors,updateDonor,getOneDonor,deleteDonor, getDonorsStats } = require("../controllers/donor");
const {verifyToken}=require("../middleware/verifyToken");
//ADD DONOR
router.post("/",verifyToken,createDonor);
//GET ALL DONORS
router.get("/",getAlldonors);
//UPDATE DONOR
router.put("/:id",updateDonor);
//GET ONE DONOR
router.get("/find/:id",getOneDonor);
//delete donor
router.delete("/:id",deleteDonor);
//DONOR STATS
router.get("/stats",getDonorsStats);

module.exports=router