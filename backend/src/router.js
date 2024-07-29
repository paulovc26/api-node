const User = require("./models/userModel");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const express = require("express");
const cors = require("cors");
const app = express();

const router = express.Router();

const SECRET_KEY = "fafafa";

router.use(cors());

router.post("/api/user/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: "Preencha todos os campos" });
  }

  try {
    const user = await User.getOneUser(username);
    if (!user) {
      return res.status(404).json({ error: "usuario não encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "SENHA INCORRETA" });
    }

    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ message: "login sucess", token });
  } catch (error) {
    res.status(500).json({ error: "erro ao processar" });
  }
});

module.exports = router;
