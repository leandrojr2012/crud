import          { db }          from "../db/_database.js";


export async function editarDados(dados_nome, dados_sobrenome, dados_idade, dados_sexo, dados_pergunta, dados_email){
    return new Promise(async ( resolve, reject) =>{


        if(dados_nome.trim() == "" || dados_sobrenome.trim() == "" || 
        dados_idade.trim() == "" || dados_sexo.trim() == "" || 
        dados_pergunta.trim() == "" || dados_email.trim() == ""){
            reject('Nenhum campo pode ficar em branco!')
            return;
        }
        else if(dados_email == " "){
            reject('Campo Email nao pode conter espaço!')
            return;
        }
        else{   
            db('dados')
            .where({
                id_dados: id_dados
            }).update({
                dados_nome: dados_nome,
                dados_sobrenome: dados_sobrenome,
                dados_idade: dados_idade,
                dados_sexo: dados_sexo,
                dados_pergunta: dados_pergunta,
                dados_email: dados_email
            })
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }

    })
}