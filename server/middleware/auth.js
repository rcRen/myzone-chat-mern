import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    if (token) {
      const decoded = jwt.verify(token, process.env.JWTKEY);
      //   req.params.userId = decoded?.id;
    }
    next();
  } catch (error) {
    res.send("Authentication failed");
  }
};

export default auth;
