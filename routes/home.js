import express from "express";
import getHome from "../controllers/home.js";

const router = express.Router();
router.route('/').get(getHome);
router.route('/home').get(getHome);

export default router;