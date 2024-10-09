import express from  "express";
import { checkUser, userLogin, userLogout, userProfile, userSignup } from "../controllers/userController.js";
import { authUser } from "../middleware/authUser.js";
const router = express.Router();
router.post("/sign-up",userSignup);

router.post("/login",userLogin);

router.get("/profile",authUser,userProfile);

router.put("/profile-update", );

router.delete("/profile-delete",);

router.post("/log-out",authUser,userLogout);

router.get("/check-user",authUser,checkUser);

export {router as userRouter};
