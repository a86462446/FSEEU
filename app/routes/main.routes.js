const router = require("express").Router();
const mainService = require("../services/main.service");
const { authJwt } = require("../middleware");

router.get("/", mainService.home);

router.get("/helloworld", mainService.helloworld);

router.post(
    "/submit", 
    [authJwt.verifyToken],
    mainService.submit
);

router.get(
    "/post/:param",
    mainService.post
);

module.exports = router;