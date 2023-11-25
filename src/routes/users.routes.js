const { Router } = require("express");
const UserController = require("../controllers/UserController");
const user = new UserController();

const userRoutes = Router()

userRoutes.get("/", user.index);
userRoutes.post("/", user.create);
userRoutes.delete("/:id", user.delete);
userRoutes.get("/:id", user.show);
userRoutes.put("/:id", user.update);

module.exports = userRoutes;