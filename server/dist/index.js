"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
// In package.json we used nodemon index.ts
// and this possible because tsconfig.json file is on the same files
//  level as index.ts
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const task_entities_1 = require("./src/tasks/task.entities");
const task_router_1 = require("./src/tasks/task.router");
// Initialize the express app
const app = (0, express_1.default)();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [task_entities_1.Task],
    synchronize: true,
});
// Parse Request Body
app.use(body_parser_1.default.json());
// Configure CORS
app.use((0, cors_1.default)());
// Define server port
const port = process.env.PORT;
exports.AppDataSource.initialize()
    .then(() => {
    //Start listening to the request on the defined port
    app.listen(port, () => {
        console.log(`listening on port ${port} `);
    });
})
    .catch((err) => {
    console.error('Error: Initialization unsuccessful', err);
});
app.use('/', task_router_1.taskRouter);
