import { Router } from "express";
import multer from "multer";
const storage = multer.diskStorage({
    destination: "./posters",
    filename: (req, file, cb) => {
        cb(null,file.originalname);
    }
});

const upload = multer({ storage: storage});

import * as bms from "./request-handler/bms-handler.js";

const routerbms = Router();

routerbms.route("/add-Movies").post(upload.single("poster"),bms.addmvs);

routerbms.route("/print-Movies").get(bms.printmvs);

export default routerbms;

