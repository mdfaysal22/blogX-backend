import dotenv from 'dotenv';

dotenv.config({ path: `${process.cwd()}/.env` });

export default {
    port: process.env.PORT || 5001,
    database_url: process.env.DATABASE, 
    node_env : process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET
}