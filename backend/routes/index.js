const express=require("express")
const userRoute=require("./user")
const userAccount=require("./account")

const router=express.Router()
router.use("/user",userRoute);
router.use("/account",userAccount);

module.exports=router;
