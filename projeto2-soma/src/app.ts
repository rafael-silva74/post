// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
const app: Express = express();

// Permite receber dados em JSON pelo body
app.use(express.json());

// Define a porta onde o servidor ficará disponível
const PORT: number = 8082;

// Cria a rota POST /soma
app.post("/soma", (req, res) => {
    try {

        // Recebe os três números enviados pelo cliente
        const { numero1, numero2, numero3 } = req.body;

        // Verifica se os valores são numéricos
        if (
            typeof numero1 !== "number" || !Number.isFinite(numero1) ||
            typeof numero2 !== "number" || !Number.isFinite(numero2) ||
            typeof numero3 !== "number" || !Number.isFinite(numero3)
        ) {
            return res.status(400).json({
                erro: "Informe três valores numéricos válidos."
            });
        }

        // Realiza a soma
        const resultado = numero1 + numero2 + numero3;

        // Retorna o resultado
        return res.status(200).json({
            resultado: resultado
        });

    } catch (erro) {
        return res.status(500).json({
            erro: "Erro interno do servidor."
        });
    }
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});