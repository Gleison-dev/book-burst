import { Router } from "express";
import { bookRoute } from "./book.route.js";

const router = Router();

router.use(bookRoute);

export { router };
