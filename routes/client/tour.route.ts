import { Router } from "express";
import controller from "../../controllers/tour.controller";

const router: Router = Router();

router.get('', controller.index )


export const tourRoutes: Router = router;