import          { db }          from "../../db/_database.js"


export async function CriarDadosUser(dadosUserNome, dadosUserEmail, dadosUserSenha, dadosUserConfirmaSenha){
    return new Promise(async ( resolve, reject) =>{


        if(dadosUserEmail == " "){
            reject('Campo Email nao pode conter espaço!')
            return;
        }        
        else if(dadosUserNome.trim() == "" || dadosUserEmail.trim() == "" || dadosUserSenha.trim() =='' || dadosUserConfirmaSenha.trim() == ''){
            reject('Nenhum campo pode ficar em branco!')
            return;
        }
        else if(dadosUserSenha != dadosUserConfirmaSenha){
            reject('As senhas nao conferem!')
            return;
        }
        else{   
            db.insert({dadosUserNome, dadosUserEmail, dadosUserSenha}).into("user")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }

    })
}