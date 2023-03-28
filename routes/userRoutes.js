const { register, login, setAvatar, getAllUsers } = require("../controllers/usersController");

const router = require("express").Router();
router.post("/register", register);//register is a handler func which triggered when any
                                   //post request is made on /register page. 

router.post("/login", login);//login is a handler func which triggered when any
                             //post request is made on /login page.

router.post("/setAvatar/:id", setAvatar);

router.get("/allusers/:id", getAllUsers);

module.exports = router; 

