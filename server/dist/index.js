"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Initialize the express app
const app = (0, express_1.default)();
// Define server port
const port = process.env.PORT;
// create a default route
app.get("/", (req, res) => {
    res.send("Express + Typescript server");
});
//Start listening to the request on the defined port
app.listen(port, () => {
    console.log(`listening on port ${port} `);
});
