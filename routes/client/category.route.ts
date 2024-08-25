import { Router } from "express";
import controller from "../../controllers/category.controller";

const router: Router = Router();

router.get('', controller.categories)


export const categoryRoutes: Router = router;