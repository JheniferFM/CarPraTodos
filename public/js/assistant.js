document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const messagesArea = document.getElementById('messagesArea');
    const typingIndicator = document.getElementById('typingIndicator');
    const micButton = document.getElementById('micButton');
    const copyLastBtn = document.getElementById('copyLastBtn');
    const listenLastBtn = document.getElementById('listenLastBtn');
    const suggestionPills = document.querySelectorAll('.suggestion-pill');
    const historyItems = document.querySelectorAll('.history-item');

    typingIndicator.style.display = 'none';

    let recognition;
    let listening = false;
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.lang = 'pt-BR';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.addEventListener('result', (event) => {
            const transcript = event.results[0][0].transcript;
            input.value = transcript;
        });

        recognition.addEventListener('end', () => {
            listening = false;
            micButton.classList.remove('listening');
            micButton.setAttribute('aria-label', 'Ativar microfone');
        });
    } else {
        micButton.disabled = true;
        micButton.title = 'Microfone não suportado pelo navegador';
    }

    const knowledgeBase = [
        {
            triggers: ['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'tudo bem', 'ta bem', 'eai', 'ei'],
            summary: 'Oi! Estou aqui para ajudar com o CAR e o Código Florestal.',
            explanation: 'Fale comigo de forma simples, como se estivéssemos conversando na sua propriedade. Posso esclarecer dúvidas sobre APP, Reserva Legal, regularização, documentação e próximos passos.',
            example: 'Por exemplo: “Oi, tenho uma nascente” ou “Olá, quero saber se preciso regularizar meu imóvel”.',
            nextSteps: 'Diga qual é sua dúvida ou como está sua propriedade, e eu explico com calma e de forma prática.',
            links: []
        },
        {
            triggers: [
                'como acessar a academia',
                'acessar a academia',
                'academia',
                'onde está a academia',
                'onde esta a academia',
                'onde encontro a academia',
                'como entro na academia',
                'entrar na academia'
            ],
            summary: 'A Academia CAR fica na página inicial do site, em um bloco dedicado com cursos e guias práticos.',
            explanation: 'No site principal, role a página inicial até encontrar o bloco “Academia CAR”. Lá você verá treinamentos, materiais e explicações sobre CAR, benefícios e legislação. Não precisa entrar com senha: basta clicar no bloco para começar.',
            example: 'Por exemplo: “Onde encontro a academia?” ou “Como entro na academia?”.',
            nextSteps: 'Volte para a página inicial e clique em “Academia CAR”. Se quiser, posso indicar qual conteúdo começar primeiro.',
            links: [
                { label: 'Ir para a página inicial', href: 'index.html' }
            ]
        },
        {
            triggers: [
                'ajuda com documentação',
                'documentação',
                'documentos',
                'quais documentos',
                'documentos para car',
                'como documento',
                'como documento o car',
                'doc'
            ],
            summary: 'Posso orientar você sobre os documentos essenciais para o CAR e o diagnóstico.',
            explanation: 'Os documentos mais importantes são: título ou escritura do imóvel, mapa da área, informações sobre APP e Reserva Legal, e comprovantes de uso do solo. Com esses dados, o diagnóstico mostra se falta algo para avançar na regularização.',
            example: 'Por exemplo: “Quais documentos preciso para o CAR?” ou “Tenho escritura e mapa, preciso mais alguma coisa?”.',
            nextSteps: 'Me conte quais documentos você já tem, e eu digo o que falta ou o que você deve priorizar.',
            links: [
                { label: 'Ver documentos necessários', href: 'index.html#faq' }
            ]
        },
        {
            triggers: ['o que é car', 'o que e car', 'o que é o car', 'o que e o car', 'car'],
            summary: 'O Cadastro Ambiental Rural é um registro eletrônico obrigatório para imóveis rurais.',
            explanation: 'Ele reúne informações ambientais da propriedade para ajudar no uso sustentável da terra, identificar áreas de preservação e orientar a regularização. O objetivo não é tirar sua terra, mas deixar mais claro o que deve ser protegido e como isso afeta o imóvel.',
            example: 'Imagine uma fazenda com uma nascente: o CAR ajuda a registrar essa área para que ela seja tratada como APP e fique protegida conforme a lei.',
            nextSteps: 'Se quiser, posso explicar como iniciar o cadastro ou quais documentos são úteis para começar.',
            links: [
                { label: 'Ver exemplos de APP', href: 'index.html#faq' },
                { label: 'Saber mais sobre o diagnóstico', href: 'index.html#faq' }
            ]
        },
        {
            triggers: ['o que é app', 'o que e app', 'app'],
            summary: 'APP significa Área de Preservação Permanente.',
            explanation: 'São áreas protegidas por lei, como margens de rios, nascentes e encostas. A ideia é manter esses espaços com vegetação para proteger água, solo e evitar erosão.',
            example: 'Se você tem um rio na propriedade, a faixa ao redor dele pode ser uma APP, que deve ser mapeada no CAR e mantida com cobertura vegetal adequada.',
            nextSteps: 'Posso ajudar a identificar se a sua área pode ser considerada APP e como isso aparece no diagnóstico.',
            links: [
                { label: 'Saber mais sobre APP', href: 'index.html#faq' }
            ]
        },
        {
            triggers: ['reserva legal', 'o que é reserva legal', 'o que e reserva legal'],
            summary: 'Reserva Legal é a área da propriedade que precisa manter vegetação nativa.',
            explanation: 'Essa área varia de acordo com o tamanho do imóvel e a região. Ela funciona como um “estoque de natureza” dentro da fazenda e ajuda a equilibrar a produção com a conservação ambiental.',
            example: 'Em uma produção agrícola, a Reserva Legal é o espaço em que você pode conservar árvores, matas e pequenas áreas de floresta dentro do terreno.',
            nextSteps: 'Posso explicar como calcular a Reserva Legal e o que isso significa para o seu CAR.',
            links: [
                { label: 'Entender Reserva Legal', href: 'index.html#faq' }
            ]
        },
        {
            triggers: ['quem precisa fazer o car', 'quem precisa fazer car', 'quem precisa do car', 'quem deve fazer o car'],
            summary: 'Todo imóvel rural precisa do CAR, independentemente do tamanho.',
            explanation: 'O CAR é obrigatório para imóveis rurais e serve para registrar dados ambientais como APP, Reserva Legal e áreas produtivas. Ele é importante mesmo para pequenos produtores, porque traz segurança jurídica e facilita o acesso a programas ambientais.',
            example: 'Se você tem um pequeno sítio com criação de gado e algumas áreas de mata, o CAR ajuda a organizar isso e mostrar quais partes precisam ser tratadas com cuidado.',
            nextSteps: 'Posso orientá-lo sobre como começar o cadastro e quais documentos você pode reunir primeiro.',
            links: [
                { label: 'Benefícios do CAR', href: 'index.html#beneficios' }
            ]
        },
        {
            triggers: ['como regularizar', 'como regularizar minha propriedade', 'regularizar minha propriedade', 'regularizar propriedade'],
            summary: 'Regularizar a propriedade significa ajustar os registros ambientais e o CAR conforme a legislação.',
            explanation: 'Isso inclui declarar APP, Reserva Legal e áreas produtivas, além de mostrar se há passivo ambiental. A regularização ajuda a evitar problemas e a aproveitar benefícios previstos pelo Programa de Regularização Ambiental.',
            example: 'Se você tem uma nascente e não informou isso no CAR, a regularização ajuda a corrigir essa informação e a entender os próximos passos para proteger a área.',
            nextSteps: 'Posso indicar os principais documentos e os passos iniciais para você começar a regularização.',
            links: [
                { label: 'Passos para regularizar', href: 'index.html#faq' }
            ]
        },
        {
            triggers: ['quais benefícios', 'benefícios', 'beneficios'],
            summary: 'A regularização traz benefícios como acesso a crédito, apoio técnico e menos riscos em fiscalizações.',
            explanation: 'Quando o imóvel está cadastrado e organizado, o produtor pode participar de programas ambientais, receber orientações e comprovar sua situação ao órgão ambiental. Isso também pode facilitar venda ou arrendamento no futuro.',
            example: 'Um produtor que regulariza o CAR pode ter mais facilidade para conseguir financiamento rural ou apoio de programas de conservação.',
            nextSteps: 'Posso mostrar os benefícios mais comuns para pequenos produtores e como eles estão ligados ao CAR.',
            links: [
                { label: 'Benefícios da regularização', href: 'index.html#beneficios' }
            ]
        },
        {
            triggers: ['tenho uma nascente', 'nascente'],
            summary: 'Uma nascente pode ser classificada como APP e precisa ser identificada no CAR.',
            explanation: 'Nem toda área de nascente é irregular, mas ela deve ser registrada para garantir proteção. O importante é verificar a largura do curso d’água e a vegetação ao redor.',
            example: 'Se sua nascente está dentro da propriedade, o CAR deve indicar essa área para que ela seja preservada e usada com cuidado.',
            nextSteps: 'Posso ajudar a entender como essa área deve ser tratada no cadastro e quais cuidados tomar.',
            links: [
                { label: 'Entender área de nascente', href: 'index.html#faq' }
            ]
        },
        {
            triggers: ['tenho um rio', 'rio'],
            summary: 'Um rio na propriedade pode ter APP nas faixas laterais e precisa ser analisado no CAR.',
            explanation: 'A presença de água indica áreas protegidas que devem ser mantidas com vegetação. Isso serve para preservar a água e evitar erosões e assoreamento.',
            example: 'Um pequeno córrego pode ter APP mesmo sem ser um grande rio, dependendo da largura e do uso ao redor.',
            nextSteps: 'Posso explicar como o CAR trata essas faixas e o que você deve verificar na sua propriedade.',
            links: [
                { label: 'Saiba sobre APP em cursos d’água', href: 'index.html#faq' }
            ]
        },
        {
            triggers: ['recebi uma notificação', 'notificação', 'notificacao'],
            summary: 'Uma notificação indica que o órgão ambiental está pedindo informações ou correções no cadastro.',
            explanation: 'Isso não significa que você está definitivamente irregular, mas é um sinal para analisar o CAR e, se precisar, buscar apoio técnico. A notificação pode ser para atualizar dados de APP, Reserva Legal ou áreas de preservação.',
            example: 'Se veio uma notificação, vale revisar o cadastro e verificar se as informações ambientais estão corretas antes de responder ao órgão.',
            nextSteps: 'Posso orientá-lo sobre como preparar a resposta e quando buscar um técnico habilitado.',
            links: [
                { label: 'O que fazer ao receber uma notificação', href: 'index.html#faq' }
            ]
        },
        {
            triggers: ['quero fazer meu diagnóstico', 'diagnóstico', 'diagnostico'],
            summary: 'O diagnóstico ajuda a identificar sua situação ambiental e os próximos passos para o CAR.',
            explanation: 'Ele faz perguntas sobre APP, Reserva Legal, documentos e intenções do produtor. Com isso, você entende melhor onde estão os pontos de atenção.',
            example: 'Ao responder se há nascente ou vegetação nativa, o diagnóstico indica se você já tem informações suficientes ou se precisa de apoio técnico para continuar.',
            nextSteps: 'Posso iniciar um pequeno diagnóstico aqui mesmo ou indicar os principais itens para o seu caso.',
            links: [
                { label: 'Começar o diagnóstico', href: 'index.html#faq' }
            ]
        }
    ];

    const normalizeText = (value) => {
        return value
            .normalize('NFD')
            .replace(/\p{Diacritic}/gu, '')
            .toLowerCase();
    };

    const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&');

    const findBestMatch = (message) => {
        const text = normalizeText(message);
        const sorted = [...knowledgeBase].sort((a, b) => {
            const maxA = Math.max(...a.triggers.map((t) => t.length));
            const maxB = Math.max(...b.triggers.map((t) => t.length));
            return maxB - maxA;
        });

        return sorted.find((item) =>
            item.triggers.some((trigger) => {
                const regex = new RegExp(`\\b${escapeRegex(normalizeText(trigger))}\\b`, 'u');
                return regex.test(text);
            })
        );
    };

    const getResponse = (message) => {
        const trimmed = message.trim();
        if (!trimmed) {
            return {
                summary: 'Por favor, envie uma pergunta para que eu possa ajudar.',
                explanation: 'Eu preciso de uma dúvida clara para orientar você sobre CAR, APP, Reserva Legal e regularização.',
                example: 'Tente perguntas como “O que é CAR?” ou “Tenho um rio dentro da propriedade.”',
                nextSteps: 'Envie sua pergunta e eu explico com calma, passo a passo.',
                links: []
            };
        }

        const match = findBestMatch(trimmed);
        if (match) return match;

        const lowerText = trimmed.toLowerCase();
        if (lowerText.includes('academia') || lowerText.includes('acessar a academia')) {
            return {
                summary: 'A Academia CAR está na página inicial do site, em um bloco dedicado com cursos e guias.',
                explanation: 'Role a página inicial até encontrar a seção “Academia CAR”. Ela traz conteúdos práticos sobre CAR, benefícios e legislação. Você não precisa de login: basta clicar para começar.',
                example: 'Por exemplo: “Onde encontro a academia?” ou “Como entro na academia?”.',
                nextSteps: 'Abra a página inicial e clique em “Academia CAR”. Posso orientar você no próximo passo.',
                links: [
                    { label: 'Ir para a página inicial', href: 'index.html' }
                ]
            };
        }

        if (lowerText.includes('documentação') || lowerText.includes('documentos') || lowerText.includes('doc')) {
            return {
                summary: 'Posso ajudar você a reunir os documentos certos para o CAR e o diagnóstico.',
                explanation: 'Os documentos mais úteis são: escritura ou título do imóvel, planta ou mapa da área, informações sobre APP e Reserva Legal, e dados de uso do solo. Isso ajuda a entender o que falta no seu cadastro.',
                example: 'Por exemplo: “Quais documentos preciso para o CAR?” ou “Tenho escritura e mapa, e agora?”.',
                nextSteps: 'Conte o que você já tem e eu indico quais documentos buscar ou revisar.',
                links: [
                    { label: 'Ver documentos necessários', href: 'index.html#faq' }
                ]
            };
        }

        return {
            summary: 'Estou aqui para ajudar com dúvidas sobre o CAR e o Código Florestal.',
            explanation: 'Respondo de forma simples e direta, sem jargões. Conte-me como está sua propriedade ou qual é a sua dúvida, e eu explico o que você deve fazer.',
            example: 'Por exemplo: “Tenho uma nascente” ou “Como sei se preciso regularizar meu imóvel?”.',
            nextSteps: 'Escreva sua pergunta com seu caso específico, e eu explico cada passo de forma tranquila.',
            links: []
        };
    };

    const createAssistantBubble = (answer) => {
        const row = document.createElement('div');
        row.className = 'message-row assistant';

        const linkHtml = answer.links && answer.links.length > 0
            ? `<div class="assistant-section">
                    <strong>Links relacionados</strong>
                    <ul class="assistant-links">
                        ${answer.links.map((link) => `<li><a href="${link.href}">${link.label}</a></li>`).join('')}
                    </ul>
               </div>`
            : '';

        const html = `
            <div class="avatar assistant-avatar"><i class="bi bi-robot"></i></div>
            <div class="bubble assistant-bubble-content">
                <div class="assistant-section">
                    <p class="assistant-summary">${answer.summary}</p>
                </div>
                <div class="assistant-section">
                    <strong>Explicação</strong>
                    <p>${answer.explanation}</p>
                </div>
                <div class="assistant-section">
                    <strong>Exemplo prático</strong>
                    <p>${answer.example}</p>
                </div>
                <div class="assistant-section">
                    <strong>Próximos passos</strong>
                    <p>${answer.nextSteps}</p>
                </div>
                ${linkHtml}
                <div class="assistant-actions">
                    <button class="action-btn copy-action" type="button">Copiar resposta</button>
                    <button class="action-btn listen-action" type="button">Ouvir resposta</button>
                </div>
            </div>
        `;

        row.innerHTML = html;
        return row;
    };

    const createUserBubble = (text) => {
        const row = document.createElement('div');
        row.className = 'message-row user';
        row.innerHTML = `
            <div class="bubble user-bubble"><p>${text}</p></div>
        `;
        return row;
    };

    const scrollToChatBottom = () => {
        messagesArea.scrollTop = messagesArea.scrollHeight;
    };

    const addMessage = (content, type = 'user') => {
        const row = type === 'assistant' ? createAssistantBubble(content) : createUserBubble(content);
        messagesArea.insertBefore(row, typingIndicator);
        messagesArea.scrollTop = messagesArea.scrollHeight;
    };

    const showTyping = () => {
        typingIndicator.style.display = 'flex';
        messagesArea.scrollTop = messagesArea.scrollHeight;
    };

    const hideTyping = () => {
        typingIndicator.style.display = 'none';
    };

    const getLastAssistantText = () => {
        const assistantBubble = document.querySelector('.message-row.assistant .assistant-bubble-content');
        return assistantBubble ? assistantBubble.innerText.trim() : '';
    };

    const speakText = (text) => {
        if (!window.speechSynthesis) return;
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
    };

    const copyText = async (text) => {
        if (!navigator.clipboard) return;
        try {
            await navigator.clipboard.writeText(text);
        } catch (error) {
            console.warn('Não foi possível copiar:', error);
        }
    };

    const sendMessage = (text) => {
        const value = text ? text.trim() : input.value.trim();
        if (!value) return;

        addMessage(value, 'user');
        input.value = '';
        showTyping();

        setTimeout(() => {
            hideTyping();
            const response = getResponse(value);
            addMessage(response, 'assistant');
            scrollToChatBottom();
        }, 800);
    };

    sendButton.addEventListener('click', () => sendMessage());
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    });

    if (micButton) {
        micButton.addEventListener('click', () => {
            if (!recognition) return;
            if (!listening) {
                recognition.start();
                listening = true;
                micButton.classList.add('listening');
                micButton.setAttribute('aria-label', 'Aguardando fala...');
            } else {
                recognition.stop();
                listening = false;
                micButton.classList.remove('listening');
                micButton.setAttribute('aria-label', 'Ativar microfone');
            }
        });
    }

    if (copyLastBtn) {
        copyLastBtn.addEventListener('click', async () => {
            const text = getLastAssistantText();
            if (text) await copyText(text);
        });
    }

    if (listenLastBtn) {
        listenLastBtn.addEventListener('click', () => {
            const text = getLastAssistantText();
            if (text) speakText(text);
        });
    }

    suggestionPills.forEach((pill) => {
        pill.addEventListener('click', () => {
            scrollToChatBottom();
            sendMessage(pill.textContent);
        });
    });

    historyItems.forEach((item) => {
        item.addEventListener('click', () => {
            const quickText = item.textContent.trim();
            scrollToChatBottom();
            sendMessage(quickText);
        });
    });

    messagesArea.addEventListener('click', (event) => {
        const copyButton = event.target.closest('.copy-action');
        const listenButton = event.target.closest('.listen-action');

        if (copyButton) {
            const bubble = copyButton.closest('.assistant-bubble-content');
            if (bubble) copyText(bubble.innerText.trim());
        }

        if (listenButton) {
            const bubble = listenButton.closest('.assistant-bubble-content');
            if (bubble) speakText(bubble.innerText.trim());
        }
    });
});
