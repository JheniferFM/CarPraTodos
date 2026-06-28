<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapa de Benefícios | CAR para Todos</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <link rel="stylesheet" href="{{ asset('css/design-system.css') }}">
    <link rel="stylesheet" href="{{ asset('css/beneficios.css') }}">
</head>
<body>
    <div class="container py-4 py-md-5">
        <header class="hero-card rounded-4 p-4 p-md-5 mb-4">
            <div class="row align-items-center g-4">
                <div class="col-lg-7">
                    <span class="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 mb-3">Mapa de Benefícios</span>
                    <h1 class="display-6 fw-bold mb-3">Encontre regras, direitos e oportunidades por estado, município e categoria.</h1>
                    <p class="text-muted mb-0">Explore orientações, benefícios e contextos legais do CAR com navegação visual e filtros práticos.</p>
                </div>
                <div class="col-lg-5">
                    <div class="summary-card p-4 rounded-4">
                        <h5 class="mb-3">Resumo</h5>
                        <div class="d-flex justify-content-between mb-2"><span>Programas ativos</span><strong>24</strong></div>
                        <div class="d-flex justify-content-between mb-2"><span>Estados com cobertura</span><strong>15</strong></div>
                        <div class="d-flex justify-content-between"><span>Municípios mapeados</span><strong>182</strong></div>
                    </div>
                </div>
            </div>
        </header>

        <section class="filters-card rounded-4 p-4 mb-4">
            <div class="row g-3 align-items-end">
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Pesquisar por Estado</label>
                    <select class="form-select" id="estadoFilter">
                        <option value="">Todos os estados</option>
                        <option value="SP">São Paulo</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PR">Paraná</option>
                        <option value="BA">Bahia</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Pesquisar por Município</label>
                    <input type="text" class="form-control" id="municipioFilter" placeholder="Ex.: Uberlândia">
                </div>
                <div class="col-md-3">
                    <label class="form-label fw-semibold">Tipo de benefício</label>
                    <select class="form-select" id="tipoFilter">
                        <option value="">Todos</option>
                        <option value="credito-rural">Crédito Rural</option>
                        <option value="psa">PSA</option>
                        <option value="pra">PRA</option>
                        <option value="ambiental">Benefícios ambientais</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <button class="btn btn-primary w-100" id="aplicarFiltros">Aplicar filtros</button>
                </div>
            </div>
        </section>

        <section class="row g-4">
            <div class="col-lg-7">
                <div class="map-card rounded-4 p-3">
                    <div id="map"></div>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="list-card rounded-4 p-4">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h3 class="h5 fw-bold mb-0">Lista de programas</h3>
                        <span class="badge bg-primary-subtle text-primary" id="resultadoCount">0 resultados</span>
                    </div>
                    <div id="programList" class="program-list"></div>
                </div>
            </div>
        </section>
    </div>

    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="{{ asset('js/accessibility.js') }}"></script>
    <script src="{{ asset('js/beneficios.js') }}"></script>
</body>
</html>
