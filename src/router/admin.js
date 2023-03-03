import              express             from "express";
import              {db}                from "../db/_database.js";
import              {adicionarDados}    from "../service/adminPost.js";
import              {editarDados}       from "../service/adminUpdate.js";
import              {deletarDados}      from "../service/adminDelete.js";


const router = express.Router()

// ROTAS ADMIN 

router.get('/post', (req, res) =>{
    res.render('admin/posts.ejs')
})

router.get('/delete/:id', async (req, res) =>{
    const rows = await db .select('id_dados', 'dados_nome', 'dados_sobrenome', 'dados_email')
    .from('dados')
    .where({'id_dados':req.params.id})
    const idUrl = req.params.id
    res.render('admin/delete.ejs', {idUrl:idUrl, rows:rows})
})

router.get('/update/:id', async (req, res) =>{
    const rows = await db .select('id_dados', 'dados_nome', 'dados_sobrenome', 'dados_idade', 'dados_sexo', 'dados_pergunta', 'dados_email')
    .from('dados')
    .where({'id_dados':req.params.id})
    .first()
    const idUrl = req.params.id
res.render('admin/update.ejs', {idUrl:idUrl, rows:rows})
})
 
router.get('/view', async (req,res) =>{
    const rows = await db .select('id_dados', 'dados_nome', 'dados_sobrenome', 'dados_email') 
    .from('dados')
res.render('admin/view.ejs', {rows:rows})
})

router.get('/view/read/:id', async (req,res) =>{
    const rows = await db .select('id_dados', 'dados_nome', 'dados_sobrenome', 'dados_idade', 'dados_sexo', 'dados_pergunta', 'dados_email')
    .from('dados')
    .where({'id_dados':req.params.id})
    const idUrl = req.params.id
res.render('admin/viewRead.ejs', {idUrl:idUrl, rows:rows})
})
  

//ROTA ITERAÇÃO ADMIN

router.post('/dados/cadastrar', async (req, res) =>{

    const dados_nome = req.body.nome
    const dados_sobrenome = req.body.sobrenome
    const dados_idade = req.body.idade
    const dados_sexo = req.body.sexo
    const dados_pergunta = req.body.pergunta
    const dados_email = req.body.email
    adicionarDados(dados_nome, dados_sobrenome, dados_idade, dados_sexo, dados_pergunta, dados_email)   
        .then(()=>{
            return res.json({
                erro:false,
                mensagem:"Dados cadastrados com sucesso!"
            })
        }).catch((err) => {console.log(err)
            return  res.status(400).json({
                erro:true,
                mensagem:err
            })
        })
})

router.delete('/dados/deletar/:id', async (req, res) =>{

    const id_dados = req.params.id
    deletarDados(id_dados)   
        .then(()=>{
            return res.json({
                erro:false,
                mensagem:"Dados deletados com sucesso!"
            })
        }).catch((err) => {console.log(err)
            return  res.status(400).json({
                erro:true,
                mensagem:err
            })
        })
})  

router.put('/dados/edit/:id', async (req, res) =>{

    const id_dados = req.params.id
    const dados_nome = req.body.nome
    const dados_sobrenome = req.body.sobrenome
    const dados_idade = req.body.idade
    const dados_sexo = req.body.sexo
    const dados_pergunta = req.body.pergunta
    const dados_email = req.body.email
    editarDados(id_dados, dados_nome, dados_sobrenome, dados_idade, dados_sexo, dados_pergunta, dados_email)   
        .then(()=>{
            return res.json({
                erro:false,
                mensagem:"Dados cadastrados com sucesso!"
            })
        }).catch((err) => {console.log(err)
            return  res.status(400).json({
                erro:true,
                mensagem:err
            })
        })
})


export {router as admin}    
