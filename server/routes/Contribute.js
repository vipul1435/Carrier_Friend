import express from 'express';

import {postContribute} from '../controllers/Contribute.js';

const router = express.Router();

router.post('/',postContribute);

export default router;