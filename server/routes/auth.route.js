import express from 'express';

import { clientsignup, gensignin } from '../controller/auth.controller.js';
import { freelancesignup } from '../controller/auth.controller.js';


const router=express.Router();

router.post("/client-signup",clientsignup)
router.post("/freelance-signup",freelancesignup)

router.post("/gen-signin",gensignin)



export default router;