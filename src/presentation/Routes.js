const { Router }  = require("express")

const router = Router()

const AllUserController = require("./controllers/AllUserController");

const UserController = require("./controllers/UserController");

const UserController2 = require("./controllers/UserController2");

router.get("/", AllUserController.handle);

router.get("/user", UserController.handle);

router.get("/user/2", UserController2.handle);

router.post("/", AllUserController.handle);

router.post("/user", UserController.handle);

router.post("/user/2", UserController2.handle);

module.exports = router;
