import express from "express";
import invalidPath from '../controllers/invalid.js'
const router = express.Router();

router.all('*', invalidPath);

export default router;