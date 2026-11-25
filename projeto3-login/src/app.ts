// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Permite receber dados em JSON pelo body
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8083
const PORT: number = 8083;

// Define o usuário e a senha corretos
const usuarioCorreto = "Blazezin";
const senhaCorreta = "123456";

// Cria uma rota POST para realizar o login
app.post("/login", (req, res) => {
    try {

        // Recebe o usuário e a senha enviados pelo cliente
        const { usuario, senha } = req.body;

        // Verifica se os campos foram preenchidos
        if (
            typeof usuario !== "string" || usuario.trim() === "" ||
            typeof senha !== "string" || senha.trim() === ""
        ) {
            return res.status(400).json({
                erro: "Informe um usuário e uma senha válidos."
            });
        }

        // Verifica se o usuário e a senha estão corretos
        if (usuario === usuarioCorreto && senha === senhaCorreta) {

            return res.status(200).json({
                mensagem: "Login realizado com sucesso!"
            });

        } else {

            // Retorna um erro informando o usuário
            return res.status(401).json({
                erro: "Usuário ou senha incorretos.",
                usuario: usuario
            });

        }

    } catch (erro) {
        return res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a escutar requisições HTTP
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});