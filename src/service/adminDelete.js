import          { db }          from "../db/_database.js";


export async function deletarDados(id_dados){
    return new Promise(async ( resolve, reject) =>{

        db('dados')
        .where({
            id_dados:id_dados
        }).del()
            .then (data =>{
                resolve()
            }).catch(err => {
                console.log(err)
            }
        )
    })
}