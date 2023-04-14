import express from "express";
import cors from "cors";
import connectDatabase from "./src/database/database.js";
import dotenv from "dotenv";

import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js";
import swaggerRoute from "./src/routes/swagger.route.cjs";

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());

dotenv.config();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/news", newsRoute);
app.use("/doc", swaggerRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));

//GET - Pega uma info
//POST - Cria uma info
//PUT - Reescreve todo o object mesmo as informações não alteradas
//PATH - Altera apenas um item do object
//DELETE - Apaga uma info
