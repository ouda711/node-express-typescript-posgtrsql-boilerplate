import dotenv from 'dotenv';
dotenv.config();

export default {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database":process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": 0
  },
  "test": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database":process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": 0
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database":process.env.DATABASE_NAME,
    "host": "127.0.0.1",
    "dialect": "postgres",
    "dialectOptions":{
      "ssl":{
        require:true,
        rejectUnauthorized: false
      },
    },
    "operatorsAliases": 1,
  }
}
