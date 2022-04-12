import { Router } from "express";
import financesRouter from "./financesRoutes.js";
import userRouter from "./userRoutes.js";

const router = Router();

router.use(userRouter);
router.use(financesRouter);

export default router;
