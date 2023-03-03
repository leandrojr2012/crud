import         express            from 'express';
import         bodyParser         from 'body-parser';
import         path               from "path";
import         { admin }          from './router/admin.js';
import         { fileURLToPath }  from "url";



const app = express()
const port = 8080

//CONFIG

    //Body Parser
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(bodyParser.json())

    //Template Engine
    app.set('view engine', 'ejs');
    app.set('views', './views');

    //Public
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    app.use(express.static(path.join(__dirname,"public")))

    app.use (express.json())


//ROTAS

    //Rotas Principais
    app.get('/', (req, res) => {
        res.render('principal/home.ejs');
    });

    //Rotas Admin
    app.use('/admin', admin)



//PORTA

app.listen(port, ()=>{
    console.log("Servidor rodando na porta: ",port, "ROTA=> localhost:8080/")
  });
