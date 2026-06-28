<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Academia CAR | CAR para Todos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="{{ asset('css/design-system.css') }}">
    <link rel="stylesheet" href="{{ asset('css/academia.css') }}">
</head>
<body>
    <div class="container py-4 py-md-5">
        <header class="hero-card rounded-4 p-4 p-md-5 mb-4">
            <div class="row align-items-center g-4">
                <div class="col-lg-8">
                    <span class="badge rounded-pill bg-white text-primary px-3 py-2 mb-3">Academia CAR</span>
                    <h1 class="display-6 fw-bold mb-3">Entenda a legislação do CAR de forma leve, prática e clara.</h1>
                    <p class="lead text-muted mb-4">Acompanhe cursos, vídeos, artigos e quizzes para dominar os principais passos, regras e direitos relacionados ao CAR.</p>
                    <div class="d-flex flex-wrap gap-2">
                        <a href="#cursos" class="btn btn-primary">Começar agora</a>
                        <a href="#quiz" class="btn btn-outline-primary">Responder quiz</a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="progress-card p-4 rounded-4">
                        <p class="mb-2 fw-semibold">Seu progresso</p>
                        <div class="progress mb-3" style="height: 10px;">
                            <div class="progress-bar" style="width: 68%"></div>
                        </div>
                        <h3 class="h2 mb-1">68%</h3>
                        <p class="text-muted mb-0">3 de 5 módulos concluídos</p>
                    </div>
                </div>
            </div>
        </header>

        <section class="row g-4 mb-4">
            <div class="col-md-3 col-sm-6">
                <div class="stat-card p-3 rounded-4 h-100">
                    <i class="bi bi-play-circle-fill"></i>
                    <h5 class="mt-3 mb-1">Vídeos</h5>
                    <p class="mb-0 text-muted">12 conteúdos</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="stat-card p-3 rounded-4 h-100">
                    <i class="bi bi-journal-text"></i>
                    <h5 class="mt-3 mb-1">Artigos</h5>
                    <p class="mb-0 text-muted">18 materiais</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="stat-card p-3 rounded-4 h-100">
                    <i class="bi bi-patch-check-fill"></i>
                    <h5 class="mt-3 mb-1">Certificados</h5>
                    <p class="mb-0 text-muted">5 emitidos</p>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
                <div class="stat-card p-3 rounded-4 h-100">
                    <i class="bi bi-trophy-fill"></i>
                    <h5 class="mt-3 mb-1">Ranking</h5>
                    <p class="mb-0 text-muted">Top 12%</p>
                </div>
            </div>
        </section>

        <section id="cursos" class="mb-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h2 class="h4 fw-bold">Cursos</h2>
                <a href="#" class="text-decoration-none fw-semibold">Ver todos</a>
            </div>
            <div class="row g-3">
                <div class="col-lg-4 col-md-6">
                    <div class="content-card p-4 rounded-4 h-100">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-primary-subtle text-primary">Novo</span>
                            <span class="text-muted small">15 min</span>
                        </div>
                        <h5>Primeiros passos na plataforma</h5>
                        <p class="text-muted">Aprenda a navegar pelo painel e encontrar os principais recursos.</p>
                        <button class="btn btn-outline-primary btn-sm">Continuar</button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="content-card p-4 rounded-4 h-100">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-success-subtle text-success">Popular</span>
                            <span class="text-muted small">20 min</span>
                        </div>
                        <h5>Entenda seus benefícios</h5>
                        <p class="text-muted">Descubra como identificar oportunidades e próximos passos.</p>
                        <button class="btn btn-outline-primary btn-sm">Começar</button>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="content-card p-4 rounded-4 h-100">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <span class="badge bg-warning-subtle text-warning">Recomendado</span>
                            <span class="text-muted small">10 min</span>
                        </div>
                        <h5>Documentação essencial</h5>
                        <p class="text-muted">Saiba o que reunir para dar mais agilidade ao seu processo.</p>
                        <button class="btn btn-outline-primary btn-sm">Abrir</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="row g-4 mb-5">
            <div class="col-lg-6">
                <div class="panel-card p-4 rounded-4 h-100">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h3 class="h5 fw-bold">Artigos</h3>
                        <a href="#" class="text-decoration-none fw-semibold">Ver mais</a>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item px-0">
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Guia de acesso ao diagnóstico</span>
                                <span class="badge bg-light text-dark">5 min</span>
                            </div>
                        </li>
                        <li class="list-group-item px-0">
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Como organizar documentos</span>
                                <span class="badge bg-light text-dark">4 min</span>
                            </div>
                        </li>
                        <li class="list-group-item px-0">
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Benefícios para quem inicia agora</span>
                                <span class="badge bg-light text-dark">6 min</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="panel-card p-4 rounded-4 h-100">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h3 class="h5 fw-bold">Vídeos</h3>
                        <a href="#" class="text-decoration-none fw-semibold">Assistir</a>
                    </div>
                    <div class="video-card p-3 rounded-3 mb-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <strong>Introdução ao assistente</strong>
                                <p class="mb-0 text-muted small">Vídeo curto com explicações básicas</p>
                            </div>
                            <i class="bi bi-play-circle-fill fs-4"></i>
                        </div>
                    </div>
                    <div class="video-card p-3 rounded-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div>
                                <strong>Como acompanhar seu progresso</strong>
                                <p class="mb-0 text-muted small">Aprenda a manter tudo organizado</p>
                            </div>
                            <i class="bi bi-play-circle-fill fs-4"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="quiz" class="row g-4 mb-5">
            <div class="col-lg-8">
                <div class="panel-card p-4 rounded-4">
                    <h3 class="h5 fw-bold mb-3">Quiz</h3>
                    <p class="text-muted">Teste seus conhecimentos e ganhe mais pontos.</p>
                    <div class="quiz-card p-3 rounded-3 mb-3">
                        <p class="fw-semibold mb-2">1. O que é o diagnóstico inteligente?</p>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="quiz1" id="q1a">
                            <label class="form-check-label" for="q1a">Um formulário para orientar o usuário</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="quiz1" id="q1b">
                            <label class="form-check-label" for="q1b">Um jogo sem utilidade</label>
                        </div>
                    </div>
                    <button class="btn btn-primary" id="checkQuiz">Conferir resposta</button>
                    <p id="quizResult" class="mt-3 mb-0 fw-semibold"></p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="panel-card p-4 rounded-4 h-100">
                    <h3 class="h5 fw-bold mb-3">Certificados</h3>
                    <div class="cert-card p-3 rounded-3 mb-3">
                        <strong>Certificado de Introdução</strong>
                        <p class="text-muted small mb-0">Concluído</p>
                    </div>
                    <div class="cert-card p-3 rounded-3">
                        <strong>Certificado de Benefícios</strong>
                        <p class="text-muted small mb-0">Em andamento</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="row g-4">
            <div class="col-lg-8">
                <div class="panel-card p-4 rounded-4">
                    <h3 class="h5 fw-bold mb-3">Ranking</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item px-0 d-flex justify-content-between align-items-center">
                            <span><strong>1.</strong> Ana Costa</span>
                            <span class="badge bg-primary">1.240 pts</span>
                        </li>
                        <li class="list-group-item px-0 d-flex justify-content-between align-items-center">
                            <span><strong>2.</strong> João Mendes</span>
                            <span class="badge bg-secondary">1.090 pts</span>
                        </li>
                        <li class="list-group-item px-0 d-flex justify-content-between align-items-center">
                            <span><strong>3.</strong> Larissa Alves</span>
                            <span class="badge bg-secondary">980 pts</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="panel-card p-4 rounded-4 h-100">
                    <h3 class="h5 fw-bold mb-3">Progresso semanal</h3>
                    <div class="d-flex align-items-end gap-2" style="height: 180px;">
                        <div class="bar bg-primary" style="height: 70%"></div>
                        <div class="bar bg-info" style="height: 55%"></div>
                        <div class="bar bg-success" style="height: 80%"></div>
                        <div class="bar bg-warning" style="height: 65%"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('js/accessibility.js') }}"></script>
    <script src="{{ asset('js/academia.js') }}"></script>
</body>
</html>
