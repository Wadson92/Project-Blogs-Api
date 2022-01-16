const express = require('express');
const userRouter = require('./controllers/User/userRouter');
const loginRouter = require('./controllers/User/loginRouter');
const categoryRouter = require('./controllers/Categories/routerCategory');

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
