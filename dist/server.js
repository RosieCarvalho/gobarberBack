"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index."));
require("reflect-metadata");
require("./database");
var app = express_1.default();
app.use(express_1.default.json());
app.use(index_1.default);
// app.get('/', (request, response) => {
//   return response.json({ message: 'Hello GoStack' });
// });
app.listen(3333, function () {
    console.log('🚀 servidor started on port 3333');
});
