import { Router } from "express";

import * as financesController from "../controllers/financialController.js";

const financesRouter = Router();

financesRouter.get(
  "/financial-events/sum",
  financesController.financialEventsSum
);

financesRouter.get("/financial-events", financesController.financialEvents);

financesRouter.post("/financial-events", financesController.addEvents);

export default financesRouter;
