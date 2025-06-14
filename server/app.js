import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// MODULES
import sequelize from './database/pool.js';

import AccountsRouter from './routers/accountsRouter.js';

//DATABASE


//CONFIG
const app = express();
app.use(express.json());
app.use(cors());

sequelize.sync(); 

app.use('/api/developer/account/', AccountsRouter);

app.listen(3000, () => {
    console.log(`\x1b[35m |!--------API STARTED --------!| \x1b [0m`);
});