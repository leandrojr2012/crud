import localStrategy from "passport-local";
import { db } from "../db/_database.js";

export async function autenticacao(passport){

    passport.use(new localStrategy({usernameField: 'email'}, (dadosUserEmail, dadosUserSenha, done) =>{
        db  .select('dadosUserEmail')
            .from('user').then((usuario)=>{
                if(!usuario){
                    return done(null, false, {message:"Esta conta nao existe"})
                }

                compare(dadosUserSenha, usuario.dadosUserSenha, (erro, batem) =>{
  
                    if(batem){
                        return done(null, usuario)
                    }else{
                        return done(null, false, {message: "Senha Incorreta"})
                    }
                })  
            })
    }))
    console.log(usuario)


}
console.log(usuario)  
