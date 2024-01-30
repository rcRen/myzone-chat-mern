import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`) });

const config = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3001,
    APP_FONTEND_PORT: process.env.APP_FONTEND_PORT || 3000,
    MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING || "",
    JWTKEY: process.env.JWTKEY || ""
}
export default config
