import { Router } from "express";
import {
    createTest,
    deleteTest,
    getAllTests,
    getOneTest,
    updateTest
} from "../controllers/testController";

const router = Router();

/**
 * @GET
 * @desc // get all Tests
 * @access public
 */

router.get("/", getAllTests);

/**
 * @GET
 * @desc // get one Test
 * @access public
 */

router.get("/:id", getOneTest);

/**
 * @POST
 * @desc // create Test
 * @access public
 */

router.post("/", createTest);

/**
 * @PUTCH
 * @desc // update Admin
 * @access private
 */

router.patch("/:id", updateTest);

/**
 * @DELETE
 * @desc // delete admin
 * @access private
 */

router.delete("/:id", deleteTest);

export default router;