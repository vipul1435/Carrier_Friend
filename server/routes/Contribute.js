import express from 'express';

import {postContribute,getContribute,updateContribute} from '../controllers/Contribute.js';

const router = express.Router();

router.post('/',postContribute);
router.get('/',getContribute);
router.put('/:id',updateContribute);
export default router;