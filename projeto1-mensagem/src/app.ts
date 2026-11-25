// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Permite que o servidor consiga interpretar dados enviados em JSON
app.use(express.json());



// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Rota POST para receber os dados e montar uma mensagem
app.post("/mensagem", (req, res) => {
    try {
    const { nome, idade, time } = req.body;

    // Verifica se todos os campos foram preenchidos
    if (!nome || !idade || !time) {
    return res.status(400).json({
        erro: "Preencha todos os campos: nome, idade e time."
    });
    }

    // Monta a mensagem com os dados recebidos
    const mensagem = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${time}!`;

    // Retorna a mensagem ao cliente
    return res.status(200).json({ mensagem });

} catch (erro) {
    return res.status(500).json({
    erro: "Erro interno do servidor."
    });
}
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});