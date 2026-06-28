<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Diagnóstico Inteligente | CAR para Todos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="{{ asset('css/design-system.css') }}">
    <link rel="stylesheet" href="{{ asset('css/diagnostico.css') }}">
</head>
<body>
    <div class="container py-5">
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="card shadow-lg border-0 rounded-4 overflow-hidden">
                    <div class="card-header bg-primary text-white py-4">
                        <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                            <div>
                                <h2 class="h4 mb-1">Diagnóstico Inteligente do CAR</h2>
                                <p class="mb-0 opacity-75">Responda as etapas abaixo para entender seu cenário, regras aplicáveis e próximos passos.</p>
                            </div>
                            <span class="badge bg-white text-primary px-3 py-2">Etapa <span id="stepCounter">1</span> de 4</span>
                        </div>
                    </div>

                    <div class="card-body p-4 p-md-5">
                        <div class="progress mb-4" style="height: 8px;">
                            <div id="progressBar" class="progress-bar" role="progressbar" style="width: 25%"></div>
                        </div>

                        <form id="diagnosticForm">
                            <div class="step-panel active" data-step="1">
                                <h3 class="h5 mb-3">1. Perfil e contexto</h3>
                                <div class="mb-3">
                                    <label class="form-label">Você já possui algum acesso ou cadastro anterior?</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="cadastro" value="sim" checked>
                                        <label class="form-check-label">Sim</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="cadastro" value="nao">
                                        <label class="form-check-label">Ainda não</label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Qual é o seu principal objetivo hoje com relação ao CAR?</label>
                                    <select class="form-select">
                                        <option>Buscar benefícios</option>
                                        <option>Entender meu diagnóstico</option>
                                        <option>Solicitar apoio</option>
                                        <option>Explorar a plataforma</option>
                                    </select>
                                </div>
                            </div>

                            <div class="step-panel" data-step="2">
                                <h3 class="h5 mb-3">2. Situação atual</h3>
                                <div class="mb-3">
                                    <label class="form-label">Você possui os documentos necessários para entender ou dar andamento ao CAR?</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="documentos" value="sim" checked>
                                        <label class="form-check-label">Sim, já tenho tudo</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="documentos" value="parcial">
                                        <label class="form-check-label">Tenho alguns</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="documentos" value="nao">
                                        <label class="form-check-label">Ainda preciso organizar</label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Como você classifica seu nível de entendimento sobre a legislação e os procedimentos?</label>
                                    <select class="form-select">
                                        <option>Já conheço bem</option>
                                        <option>Tenho alguma noção</option>
                                        <option>Estou começando</option>
                                    </select>
                                </div>
                            </div>

                            <div class="step-panel" data-step="3">
                                <h3 class="h5 mb-3">3. Necessidades</h3>
                                <div class="mb-3">
                                    <label class="form-label">Quais áreas você quer priorizar nesse processo?</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" checked>
                                        <label class="form-check-label">Orientação sobre regras e benefícios</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" checked>
                                        <label class="form-check-label">Acompanhamento do processo</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox">
                                        <label class="form-check-label">Acesso a conteúdos educativos</label>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Deseja receber suporte humano para esclarecer dúvidas?</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="suporte" value="sim" checked>
                                        <label class="form-check-label">Sim</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="suporte" value="nao">
                                        <label class="form-check-label">Não por enquanto</label>
                                    </div>
                                </div>
                            </div>

                            <div class="step-panel" data-step="4">
                                <h3 class="h5 mb-3">4. Confirmar informações</h3>
                                <div class="mb-3">
                                    <label class="form-label">Você deseja finalizar o diagnóstico e gerar o resumo com orientações?</label>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="finalizar" value="sim" checked>
                                        <label class="form-check-label">Sim, gerar resumo</label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="finalizar" value="nao">
                                        <label class="form-check-label">Quero revisar depois</label>
                                    </div>
                                </div>
                                <div class="alert alert-info">
                                    Ao concluir, será gerado um resumo com situação, pendências, recomendações e plano de ação para o CAR.
                                </div>
                            </div>

                            <div class="d-flex justify-content-between mt-4">
                                <button type="button" class="btn btn-outline-secondary" id="prevBtn">Voltar</button>
                                <button type="button" class="btn btn-primary" id="nextBtn">Continuar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center mt-4" id="resultSection" style="display: none;">
            <div class="col-lg-10">
                <div class="card shadow-sm border-0 rounded-4">
                    <div class="card-body p-4">
                        <div class="d-flex justify-content-between align-items-start flex-wrap gap-3 mb-4">
                            <div>
                                <h3 class="h4 mb-1">Resumo do Diagnóstico</h3>
                                <p class="text-muted mb-0">Resultados gerados com base nas respostas fornecidas.</p>
                            </div>
                            <div class="d-flex gap-2">
                                <button class="btn btn-outline-primary" id="printBtn"><i class="bi bi-printer"></i> Imprimir</button>
                                <button class="btn btn-primary" id="downloadBtn"><i class="bi bi-download"></i> Baixar PDF</button>
                            </div>
                        </div>

                        <div class="row g-4">
                            <div class="col-md-6">
                                <div class="border rounded-3 p-3 h-100">
                                    <h5 class="h6 text-primary">Situação</h5>
                                    <p id="situacaoText" class="mb-0"></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="border rounded-3 p-3 h-100">
                                    <h5 class="h6 text-warning">Pendências</h5>
                                    <p id="pendenciasText" class="mb-0"></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="border rounded-3 p-3 h-100">
                                    <h5 class="h6 text-success">Recomendações</h5>
                                    <p id="recomendacoesText" class="mb-0"></p>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="border rounded-3 p-3 h-100">
                                    <h5 class="h6 text-info">Plano de ação</h5>
                                    <p id="planoText" class="mb-0"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('js/accessibility.js') }}"></script>
    <script src="{{ asset('js/diagnostico.js') }}"></script>
</body>
</html>
