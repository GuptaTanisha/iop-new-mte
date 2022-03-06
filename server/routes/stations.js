import {getStations,bookSlot,book,getSlots,contact} from '../controllers/stations.js';
import express from 'express';

const router = express.Router();
router.get('/',getStations);
router.post('/:id/bookSlot',bookSlot);
router.get('/:id',getSlots);
router.post('/book',book);
router.post("/contact", contact);

export default router;
