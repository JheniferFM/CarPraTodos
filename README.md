# 🌿 CAR para Todos

> Plataforma digital para simplificar o entendimento da legislação do Cadastro Ambiental Rural (CAR) e orientar produtores rurais na regularização ambiental de suas propriedades.

🔗 **Demo ao vivo:** [car-pra-todos-kam3.vercel.app](https://car-pra-todos-kam3.vercel.app)

---

## 📋 Sobre o Projeto

O **CAR para Todos** nasceu do desafio de tornar a legislação ambiental acessível para pequenos e médios produtores rurais. Muitas vezes, as informações sobre o CAR são técnicas, cheias de termos difíceis e espalhadas em diferentes canais — o que gera dúvidas, erros de cadastro e perda de benefícios.

A plataforma reúne em um único lugar explicações em linguagem simples, um assistente virtual inteligente, diagnóstico guiado da propriedade, conteúdos educativos e um painel de gestão para órgãos ambientais.

---

## ✨ Funcionalidades

### 👨‍🌾 Para o Produtor Rural

| Página | Descrição |
|---|---|
| `index.html` | Landing page com apresentação, missão e acesso rápido às funcionalidades |
| `entender-car.html` | Explica o que é o CAR, quem precisa, obrigatoriedade e benefícios |
| `entendendo-leis.html` | Código Florestal em linguagem simples: APP, Reserva Legal, PRA, PSA e CRA |
| `minha-situacao.html` | Diagnóstico guiado da propriedade com exportação de relatório |
| `beneficios.html` | Listagem de benefícios por região: crédito rural, PRA, PSA, CRA e incentivos |
| `academia-car.html` | Trilhas de aprendizagem com microaulas e conteúdos curtos sobre legislação |
| `assistant.html` | Chat com assistente virtual inteligente para tirar dúvidas sobre o CAR |
| `conversar-analista.html` | Apresentação e guia de uso do assistente virtual |

### 🏛️ Para Órgãos Ambientais

| Página | Descrição |
|---|---|
| `dashboard.html` | Painel de gestão com indicadores, gráficos, mapa por estado, tabela de municípios e painel Omnichannel |

---

## 🤖 Assistente Virtual

O assistente conta com:

- Base de conhecimento local sobre CAR e Código Florestal
- **Reconhecimento de voz** (Web Speech API)
- **Leitura em voz alta** das respostas (text-to-speech)
- Histórico de conversas
- Sugestões de perguntas rápidas
- Copiar resposta com um clique
- Indicador de "digitando..."

---

## ♿ Acessibilidade

A plataforma possui barra de acessibilidade (`accessibility.js`) com:

- **Alto contraste**
- **Fonte ampliada** (múltiplos níveis)
- **Leitura por voz**
- **Suporte visual** para navegação mais confortável
- Compatível com a **Lei Brasileira de Inclusão (LBI)**

---

## 🌐 Omnichannel

O painel de governo inclui um módulo de **Canais de Atendimento** com visualização de mensagens recebidas por:

- WhatsApp
- E-mail
- Site
- Telegram
- Instagram

---

## 🌍 Internacionalização

A plataforma suporta múltiplos idiomas:

- 🇧🇷 Português
- 🇺🇸 English
- 🇳🇴 Norsk

---

## 🛠️ Tecnologias

### Frontend
- **HTML5**, **CSS3**, **JavaScript** (vanilla)
- **Bootstrap 5.3** — layout e componentes responsivos
- **Bootstrap Icons 1.11** — ícones
- **Chart.js** — gráficos no dashboard

### Backend (estrutura preparada)
- **PHP / Laravel** — Blade templates em `resources/views/`
- **Migrations** para banco de dados relacional

### Banco de Dados
Estrutura relacional planejada com tabelas para:
`users`, `profiles`, `diagnostics`, `questions`, `answers`, `courses`, `lessons`, `quizzes`, `certificates`, `benefits`, `messages`, `histories`, `notifications`, `articles`, `logs`

### Hospedagem
- **Vercel** (deploy estático)

---

## 📁 Estrutura do Projeto

```
CarparaTodos/
├── index.html
├── assistant.html
├── dashboard.html
├── academia-car.html
├── beneficios.html
├── entender-car.html
├── entendendo-leis.html
├── minha-situacao.html
├── conversar-analista.html
├── styles.css
├── script.js
├── public/
│   ├── css/
│   │   ├── design-system.css
│   │   ├── assistant.css
│   │   ├── dashboard.css
│   │   ├── academia.css
│   │   ├── beneficios.css
│   │   └── diagnostico.css
│   ├── js/
│   │   ├── accessibility.js
│   │   ├── assistant.js
│   │   ├── dashboard.js
│   │   ├── academia.js
│   │   ├── beneficios.js
│   │   └── diagnostico.js
│   └── images/
├── resources/
│   └── views/          # Blade templates (Laravel)
├── database/
│   └── migrations/     # Estrutura do banco de dados
└── docs/
    ├── design-system.md
    └── pwa-car-para-todos-product-design.md
```

---

## 🚀 Como Rodar Localmente

Por ser uma plataforma web estática, basta abrir o `index.html` no navegador ou usar um servidor local:

```bash
# Com Python
python3 -m http.server 8080

# Com Node.js (npx)
npx serve .
```

Acesse `http://localhost:8080` no navegador.

---

## 🎯 Público-Alvo

- **Pequenos e médios produtores rurais** — principal público, que precisa de orientação clara para regularizar sua propriedade
- **Analistas ambientais** — que utilizam o painel de gestão para acompanhar dúvidas e direcionar ações educativas

---

## 📈 Impactos Esperados

- Mais imóveis regularizados no CAR
- Maior adesão aos Programas de Regularização Ambiental (PRA)
- Produtores mais aptos a acessar crédito rural e incentivos
- Redução de demandas nas ouvidorias e canais de atendimento
- Dados do CAR mais confiáveis para políticas públicas
- Fortalecimento da imagem do Brasil em ESG e sustentabilidade

---

## 🤝 Código Aberto

Este projeto foi desenvolvido como **Bem Público Digital**, incentivando que outros estados, órgãos públicos e países possam utilizá-lo e adaptá-lo. A separação entre conteúdo e aplicação permite atualizar legislações e programas sem reescrever o sistema.

---

## 👥 Equipe

**Hackathon haCARthon — Desafio 3 — Equipe 211**

---

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.
