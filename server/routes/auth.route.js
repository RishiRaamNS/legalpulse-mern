import express from 'express';

import { clientsignup, gensignin,signout} from '../controller/auth.controller.js';
import { freelancesignup } from '../controller/auth.controller.js';


const router=express.Router();

router.post("/client-signup",clientsignup)
router.post("/freelance-signup",freelancesignup)

router.post("/gen-signin",gensignin)

router.get('/signout',signout)



export default router;