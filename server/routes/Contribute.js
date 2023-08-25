import express from 'express';

import {postContribute,getContribute} from '../controllers/Contribute.js';

const router = express.Router();

router.post('/',postContribute);
router.get('/',getContribute);

export default router;