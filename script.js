const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas =[
    {
 enunciado: "Quais são os sinais e sintomas mais comuns na depressão, e como podemos diferenciar a depressão de outras condições de saúde mental?",
alternativas:[
 "Como podemos identificar sinais de depressão em comparação com outras condições de saúde mental, como ansiedade ou transtorno bipolar, em diferentes faixas etárias",
"Como a depressão afeta exclusivamente o sono e o apetite, sem influenciar outros aspectos da saúde mental",
],
    },
    {
 enunciado: "Você acha que o celular afasta as pessoas pessoalmente?",
alternativas:[
  "Sim",
  "Não",
        ],
    },
];
