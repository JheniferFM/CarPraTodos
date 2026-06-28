<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assistente Inteligente | CAR para Todos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="{{ asset('css/design-system.css') }}">
    <link rel="stylesheet" href="{{ asset('css/assistant.css') }}">
</head>
<body>
    <div class="app-shell">
        <aside class="sidebar">
            <div class="sidebar-top">
                <div class="brand">
                    <div class="brand-icon"><i class="bi bi-stars"></i></div>
                    <div>
                        <h5>Assistente</h5>
                        <p>CAR para Todos</p>
                    </div>
                </div>

                <button class="new-chat-btn">
                    <i class="bi bi-plus-lg"></i>
                    <span>Novo chat</span>
                </button>
            </div>

            <div class="history-section">
                <p class="section-label">Histórico</p>
                <div class="history-list">
                    <button class="history-item active">
                        <i class="bi bi-chat-left-text"></i>
                        <span>Diagnóstico de benefícios</span>
                    </button>
                    <button class="history-item">
                        <i class="bi bi-chat-left-text"></i>
                        <span>Ajuda com documentação</span>
                    </button>
                    <button class="history-item">
                        <i class="bi bi-chat-left-text"></i>
                        <span>Como acessar a academia</span>
                    </button>
                </div>
            </div>

            <div class="sidebar-footer">
                <div class="footer-card">
                    <p class="section-label">Sugestões</p>
                    <div class="suggestion-pill">O que é CAR?</div>
                    <div class="suggestion-pill">O que é APP?</div>
                    <div class="suggestion-pill">O que é Reserva Legal?</div>
                    <div class="suggestion-pill">Como regularizar minha propriedade?</div>
                    <div class="suggestion-pill">Tenho uma nascente.</div>
                    <div class="suggestion-pill">Recebi uma notificação.</div>
                </div>
            </div>
        </aside>

        <main class="chat-panel">
            <header class="chat-header">
                <div>
                    <p class="section-label mb-1">Assistente Inteligente</p>
                    <h2>Como posso te ajudar hoje?</h2>
                </div>
                <div class="header-actions">
                    <button class="header-btn" id="copyLastBtn" type="button" aria-label="Copiar última resposta"><i class="bi bi-clipboard"></i></button>
                    <button class="header-btn" id="listenLastBtn" type="button" aria-label="Ouvir última resposta"><i class="bi bi-volume-up"></i></button>
                </div>
            </header>

            <section class="messages-area" id="messagesArea">
                <div class="message-row assistant">
                    <div class="avatar assistant-avatar"><i class="bi bi-robot"></i></div>
                    <div class="bubble">
                        <p>Olá! Sou seu assistente virtual. Posso te ajudar a entender a legislação, os passos do diagnóstico e as obrigações relacionadas ao CAR.</p>
                    </div>
                </div>

                <div class="message-row user">
                    <div class="bubble user-bubble">
                        <p>Quero saber como iniciar o diagnóstico do CAR.</p>
                    </div>
                </div>

                <div class="message-row assistant">
                    <div class="avatar assistant-avatar"><i class="bi bi-robot"></i></div>
                    <div class="bubble">
                        <p>Você pode começar pelo painel, clicar em “Diagnóstico” e responder as perguntas guiadas. Depois, eu posso te orientar com os próximos passos e as principais regras.</p>
                    </div>
                </div>

                <div class="message-row assistant typing" id="typingIndicator">
                    <div class="avatar assistant-avatar"><i class="bi bi-robot"></i></div>
                    <div class="typing-bubble">
                        <span></span><span></span><span></span>
                    </div>
                </div>
            </section>

            <section class="composer-card">
                <div class="composer-tools">
                    <button class="tool-btn" id="micButton" type="button" aria-label="Ativar microfone"><i class="bi bi-mic-fill"></i></button>
                    <button class="tool-btn" type="button" aria-label="Anexar arquivo"><i class="bi bi-paperclip"></i></button>
                </div>

                <div class="composer-input-wrap">
                    <i class="bi bi-chat-left-text composer-icon"></i>
                    <input type="text" id="messageInput" placeholder="Digite sua pergunta..." />
                </div>

                <button class="send-btn" id="sendButton" type="button">
                    <i class="bi bi-send-fill"></i>
                </button>
            </section>
        </main>
    </div>

    <script src="{{ asset('js/accessibility.js') }}"></script>
    <script src="{{ asset('js/assistant.js') }}"></script>
</body>
</html>
