import express from 'express';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/auth', (req, res) => {
    const {body} = req;
    if(body.usuario === 'gabrielle' && body.senha == 123){
        const token = jwt.sign({}, 'java_eh_lento');
        res.json(token);
        return;
    }
    res.status(400).send();
});

app.get('/produtos', exigeAuth, (req, res) => {
    res.send('Hello World');
});

function exigeAuth(req, res, next){
    const {token} = req.headers;
    if(jwt.verify(token, 'java_eh_lento')){
        next();
        return;
    }
    res.status(401).send();
}

app.listen(3000, () => console.log('rodando...'));