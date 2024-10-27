import { Router } from "express";
const router: Router = Router();

import controller from "../../controllers/cart.controller";

router.get("/", controller.index);


export const cartRoutes: Router = router;