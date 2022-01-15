const express = require('express');
const userRouter = require('./controllers/User/userRouter');
const loginRouter = require('./controllers/User/loginRouter');

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
