import          { db }          from "../db/_database.js";


export async function adicionarDados(dados_nome, dados_sobrenome, dados_idade, dados_sexo, dados_pergunta, dados_email){
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
            db.insert({dados_nome, dados_sobrenome, dados_idade, dados_sexo, dados_pergunta, dados_email}).into("dados")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }

    })
}