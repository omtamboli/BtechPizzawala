import express from "express";
import passport from "passport";
import { logout, myprofile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get('/googlelogin',passport.authenticate("google" ,{
    scope: ["profile"],

})
);

router.get('/login',
passport.authenticate("google"),
 (req,res) => {
    res.send("Logged In")
})
router.get('/logout',logout)
router.get("/me",isAuthenticated, myprofile);

export default router;