import {getHosts} from '../controllers/hosts.js';
import express from 'express';

const router = express.Router();
router.get("/", getHosts);

export default router;