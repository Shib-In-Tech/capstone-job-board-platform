import express from 'express';
import { checkemployer, employerLogin, employerLogout, employerProfile, employerSignup } from '../controllers/employerController.js';
import { authEmploye} from '../middleware/authEmployer.js';
const router=express.Router();

router.post("/sign-up",employerSignup);

router.post("/log-in", employerLogin);

router.get("/profile", authEmploye,employerProfile);

// router.put("/profile-update", mentorProfile);

router.delete("/profile-delete", (req, res, next) => {});

router.post("/log-out",authEmploye, employerLogout);

router.get("/check-employer",authEmploye,checkemployer);


export { router as employerRouter };