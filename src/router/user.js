import express from "express";
//import { db } from "../db/_database";
import { CriarDadosUser } from "../service/User/cadastroUser.js";
import { loginUser } from "../service/User/login.js";
import passport from "passport";

const router = express.Router()

//ROTAS USER

router.get('/cadastro', (req, res) =>{
    res.render('users/cadastroUser.ejs')
})

router.get('/login', (req, res) =>{
    res.render('users/login.ejs')
})

//ROTA ITERAÇÃO USUARIO

router.post('/dados/cadastrar/usuario', async (req, res) =>{
    const dadosUserNome = req.body.nome
    const dadosUserEmail = req.body.email
    const dadosUserSenha = req.body.senha
    const dadosUserConfirmaSenha = req.body.confirmaSenha

    CriarDadosUser(dadosUserNome, dadosUserEmail, dadosUserSenha, dadosUserConfirmaSenha)
        .then(()=>{
            return res.json({
                erro:false,
                mensagem:"Usuario cadastrado com sucesso!"
            })
        }).catch((err) => {console.log(err)
            return  res.status(400).json({
                erro:true,
                mensagem:err
            })
        })
})

router.post('/login/usuario', async (req, res) =>{
    const dadosUserEmail = req.body.email
    const dadosUserSenha = req.body.senha

    passport.authenticate("local", {
        
    })

    loginUser(dadosUserEmail, dadosUserSenha)
        .then(()=>{
            return res.json({
                erro:false,
                mensagem:"sucesso!"
            })
        }).catch((err) => {console.log(err)
            return  res.status(400).json({
                erro:true,
                mensagem:err
            })
        })
})

export {router as user}