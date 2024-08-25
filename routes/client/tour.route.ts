import { Router } from "express";
import controller from "../../controllers/tour.controller";

const router: Router = Router();

router.get('/:slugCategory', controller.index )


export const tourRoutes: Router = router;