import express from  "express";
import { userLogin, userProfile, userSignup } from "../controllers/userController.js";
import { authUser } from "../middleware/authUser.js";
const router = express.Router();
router.post("/sign-up",userSignup);

router.post("/login",userLogin);

router.get("/profile",authUser,userProfile);

router.put("/profile-update", );

router.delete("/profile-delete",);

router.post("/log-out",);

router.get("/check-user",);

export {router as userRouter};
