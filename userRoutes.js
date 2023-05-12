const express = require("express");
const { adduser, getusers, deleteuser, updateuser } = require("./userController");
const router = express.Router();



/***** @params post * **/
router.post("/adduser", adduser );
/***** @params get * **/
router.get("/",getusers)
/***** @params delete * **/
router.delete("/:id", deleteuser )
/***** @params update * **/
router.put("/:id",updateuser)
module.exports=router
