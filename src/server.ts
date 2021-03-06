import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import routes from './routes/index.';
import 'reflect-metadata'
import uploadConfig from './config/upload';

import './database';

const app = express();

app.use(cors());
app.use(express.json())
app.use('/files', express.static(uploadConfig.directory));
app.use(routes)
// app.get('/', (request, response) => {
//   return response.json({ message: 'Hello GoStack' });
// });

app.listen(3333, () => {
  console.log('🚀 servidor started on port 3333');
});
