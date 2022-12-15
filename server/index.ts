// In package.json we used nodemon index.ts
// and this possible because tsconfig.json file is on the same files
//  level as index.ts
import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Task } from './src/tasks/task.entities';
import { taskRouter } from './src/tasks/task.router';

// Initialize the express app
const app: Express = express();
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  entities: [Task],
  synchronize: true,
});

// Parse Request Body
app.use(bodyParser.json());

// Configure CORS
app.use(cors());

// Define server port
const port = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    //Start listening to the request on the defined port
    app.listen(port, () => {
      console.log(`listening on port ${port} `);
    });
  })
  .catch((err) => {
    console.error('Error: Initialization unsuccessful', err);
  });

app.use('/', taskRouter);
