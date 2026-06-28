<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel Administrativo | CAR para Todos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="{{ asset('css/design-system.css') }}">
    <link rel="stylesheet" href="{{ asset('css/admin.css') }}">
</head>
<body>
    <div class="page-wrapper">
        <aside class="sidebar">
            <div class="brand">
                <div class="brand-icon"><i class="bi bi-shield-check"></i></div>
                <div>
                    <h5>CAR Admin</h5>
                    <p>Gestão</p>
                </div>
            </div>

            <nav class="nav flex-column mt-4">
                <a class="nav-link active" href="#dashboard"><i class="bi bi-grid"></i><span>Dashboard</span></a>
                <a class="nav-link" href="#usuarios"><i class="bi bi-people"></i><span>Usuários</span></a>
                <a class="nav-link" href="#conteudos"><i class="bi bi-journal-text"></i><span>Conteúdos</span></a>
                <a class="nav-link" href="#beneficios"><i class="bi bi-gift"></i><span>Benefícios</span></a>
                <a class="nav-link" href="#logs"><i class="bi bi-clock-history"></i><span>Logs</span></a>
                <a class="nav-link" href="#relatorios"><i class="bi bi-bar-chart"></i><span>Relatórios</span></a>
                <a class="nav-link" href="#configuracoes"><i class="bi bi-gear"></i><span>Configurações</span></a>
            </nav>
        </aside>

        <main class="main-content">
            <header class="topbar">
                <div>
                    <p class="eyebrow mb-1">Painel Administrativo</p>
                    <h2>Gestão central do CAR</h2>
                </div>
                <div class="d-flex gap-2">
                    <button class="btn btn-outline-light"><i class="bi bi-bell"></i></button>
                    <button class="btn btn-primary">+ Novo</button>
                </div>
            </header>

            <section id="dashboard" class="mb-4">
                <div class="row g-4">
                    <div class="col-xl-3 col-md-6">
                        <div class="stat-card">
                            <div class="stat-icon blue"><i class="bi bi-people-fill"></i></div>
                            <div>
                                <p class="stat-label">Usuários</p>
                                <h3>1.240</h3>
                                <span>+12% este mês</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="stat-card">
                            <div class="stat-icon green"><i class="bi bi-journal-check"></i></div>
                            <div>
                                <p class="stat-label">Conteúdos</p>
                                <h3>84</h3>
                                <span>Atualizados</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="stat-card">
                            <div class="stat-icon purple"><i class="bi bi-gift-fill"></i></div>
                            <div>
                                <p class="stat-label">Benefícios</p>
                                <h3>24</h3>
                                <span>Ativos</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-md-6">
                        <div class="stat-card">
                            <div class="stat-icon orange"><i class="bi bi-exclamation-triangle-fill"></i></div>
                            <div>
                                <p class="stat-label">Pendências</p>
                                <h3>8</h3>
                                <span>Requerem atenção</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="row g-4 mb-4">
                <div class="col-xl-8">
                    <div class="panel-card p-4 rounded-4">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="h5 mb-0">Atividade recente</h4>
                            <a href="#" class="text-link">Ver tudo</a>
                        </div>
                        <canvas id="activityChart"></canvas>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="panel-card p-4 rounded-4">
                        <h4 class="h5 mb-3">Ações rápidas</h4>
                        <div class="d-grid gap-2">
                            <button class="btn btn-outline-primary">Adicionar usuário</button>
                            <button class="btn btn-outline-primary">Criar conteúdo</button>
                            <button class="btn btn-outline-primary">Cadastrar benefício</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="usuarios" class="panel-card p-4 rounded-4 mb-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="h5 mb-0">CRUD Usuários</h4>
                    <button class="btn btn-primary btn-sm">+ Novo usuário</button>
                </div>
                <div class="table-responsive">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Perfil</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ana Costa</td>
                                <td>ana@car.com</td>
                                <td>Admin</td>
                                <td><span class="badge bg-success">Ativo</span></td>
                                <td><button class="btn btn-sm btn-outline-primary">Editar</button></td>
                            </tr>
                            <tr>
                                <td>João Mendes</td>
                                <td>joao@car.com</td>
                                <td>Usuário</td>
                                <td><span class="badge bg-warning">Pendente</span></td>
                                <td><button class="btn btn-sm btn-outline-primary">Editar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="conteudos" class="panel-card p-4 rounded-4 mb-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="h5 mb-0">CRUD Conteúdos</h4>
                    <button class="btn btn-primary btn-sm">+ Novo conteúdo</button>
                </div>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="content-item p-3 rounded-3">
                            <h6>Primeiros passos na plataforma</h6>
                            <p class="text-muted mb-2">Curso • Atualizado hoje</p>
                            <button class="btn btn-sm btn-outline-primary">Editar</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="content-item p-3 rounded-3">
                            <h6>Guia de benefícios ambientais</h6>
                            <p class="text-muted mb-2">Artigo • Revisado ontem</p>
                            <button class="btn btn-sm btn-outline-primary">Editar</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="beneficios" class="panel-card p-4 rounded-4 mb-4">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="h5 mb-0">CRUD Benefícios</h4>
                    <button class="btn btn-primary btn-sm">+ Novo benefício</button>
                </div>
                <div class="row g-3">
                    <div class="col-md-4">
                        <div class="benefit-item p-3 rounded-3">
                            <h6>Crédito Rural</h6>
                            <p class="text-muted mb-2">Estado: MG</p>
                            <button class="btn btn-sm btn-outline-primary">Editar</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="benefit-item p-3 rounded-3">
                            <h6>PSA</h6>
                            <p class="text-muted mb-2">Estado: SP</p>
                            <button class="btn btn-sm btn-outline-primary">Editar</button>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="benefit-item p-3 rounded-3">
                            <h6>PRA</h6>
                            <p class="text-muted mb-2">Estado: PR</p>
                            <button class="btn btn-sm btn-outline-primary">Editar</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="logs" class="panel-card p-4 rounded-4 mb-4">
                <h4 class="h5 mb-3">Logs</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item px-0">12:40 - Usuário Ana atualizou conteúdo “Primeiros passos”</li>
                    <li class="list-group-item px-0">11:25 - Benefício “Crédito Rural” foi cadastrado</li>
                    <li class="list-group-item px-0">10:10 - Login de administrador realizado</li>
                </ul>
            </section>

            <section id="relatorios" class="panel-card p-4 rounded-4 mb-4">
                <h4 class="h5 mb-3">Relatórios</h4>
                <div class="row g-3">
                    <div class="col-md-6">
                        <div class="report-card p-3 rounded-3">
                            <h6>Uso por período</h6>
                            <p class="text-muted mb-0">Média de acessos semanal: 340</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="report-card p-3 rounded-3">
                            <h6>Engajamento</h6>
                            <p class="text-muted mb-0">Taxa de conclusão: 81%</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="configuracoes" class="panel-card p-4 rounded-4">
                <h4 class="h5 mb-3">Configurações</h4>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="form-label">Nome da plataforma</label>
                        <input class="form-control" value="CAR para Todos">
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">E-mail de suporte</label>
                        <input class="form-control" value="suporte@car.com">
                    </div>
                </div>
                <button class="btn btn-primary mt-3">Salvar alterações</button>
            </section>
        </main>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="{{ asset('js/accessibility.js') }}"></script>
    <script src="{{ asset('js/admin.js') }}"></script>
</body>
</html>
