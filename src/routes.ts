import { Request, Response, Router } from 'express';

import multer from "multer";

const multerConfig = multer();

const router = Router();
                      //Single lê somente 1 arquivo
router.post("/printing", multerConfig.single("file"), (request: Request, response: Response) => {
  console.log(request.file?.buffer.toString("utf-8"));
  return response.send();
})

export { router };