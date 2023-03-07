import          { db }          from "../../db/_database.js"


export async function loginUser(dadosUserEmail, dadosUserSenha){
    return new Promise(async ( resolve, reject) =>{


        if(dadosUserEmail == " "){
            reject('Campo Email nao pode conter espaço!')
            return;
        }        
        else if(dadosUserEmail.trim() == "" || dadosUserSenha.trim() =='' ){
            reject('Nenhum campo pode ficar em branco!')
            return;
        }
        else{   
            db.insert({dadosUserEmail, dadosUserSenha}).into("login")
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            })
        }

    })
}