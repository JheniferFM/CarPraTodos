document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');

    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Funcionalidade do menu lateral
    // Mantém a navegação padrão (href) e apenas atualiza o estado visual.
    const navLinks = document.querySelectorAll('.sidebar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });


    const stateDetails = {
        'São Paulo': 'Usuários 3.120 · Diagnósticos 1.045 · Cursos 950 · Certificados 480 · Dúvidas 760',
        'Minas Gerais': 'Usuários 2.480 · Diagnósticos 820 · Cursos 710 · Certificados 360 · Dúvidas 540',
        'Bahia': 'Usuários 1.920 · Diagnósticos 650 · Cursos 540 · Certificados 290 · Dúvidas 420',
        'Amazonas': 'Usuários 1.120 · Diagnósticos 420 · Cursos 310 · Certificados 150 · Dúvidas 210',
        'Rio Grande do Sul': 'Usuários 1.840 · Diagnósticos 760 · Cursos 620 · Certificados 310 · Dúvidas 520'
    };

    const stateChips = document.querySelectorAll('.state-chip');
    const mapStateName = document.getElementById('mapStateName');

    stateChips.forEach(chip => {
        chip.addEventListener('click', () => {
            stateChips.forEach(item => item.classList.remove('active'));
            chip.classList.add('active');
            const stateName = chip.dataset.state;
            mapStateName.textContent = stateName;
            document.querySelector('.map-details p').textContent = stateDetails[stateName];
        });
    });

    if (!window.Chart) return;

    const lineCtx = document.getElementById('lineChart');
    const barCtx = document.getElementById('barChart');
    const pieCtx = document.getElementById('pieChart');
    const donutCtx = document.getElementById('donutChart');

    if (lineCtx) {
        new Chart(lineCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [
                    {
                        label: 'Cadastros',
                        data: [1050, 1180, 1320, 1450, 1580, 1720],
                        borderColor: '#1b5e20',
                        backgroundColor: 'rgba(30,93,45,0.15)',
                        tension: 0.35,
                        fill: true,
                        pointRadius: 4
                    },
                    {
                        label: 'Diagnósticos',
                        data: [860, 920, 980, 1020, 1080, 1120],
                        borderColor: '#1565c0',
                        backgroundColor: 'rgba(21,101,192,0.12)',
                        tension: 0.35,
                        fill: true,
                        pointRadius: 4
                    },
                    {
                        label: 'Cursos concluídos',
                        data: [520, 610, 690, 760, 820, 912],
                        borderColor: '#43a047',
                        backgroundColor: 'rgba(67,160,71,0.12)',
                        tension: 0.35,
                        fill: true,
                        pointRadius: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: '#425047' } }
                },
                scales: {
                    x: { ticks: { color: '#6b7b6f' }, grid: { display: false } },
                    y: { ticks: { color: '#6b7b6f' }, grid: { color: 'rgba(16,32,26,0.08)' }, beginAtZero: true }
                }
            }
        });
    }

    if (barCtx) {
        new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['APP', 'Reserva Legal', 'PRA', 'PSA', 'CAR', 'Código Florestal'],
                datasets: [{
                    label: 'Dúvidas',
                    data: [1280, 940, 760, 620, 540, 420],
                    backgroundColor: ['#1b5e20', '#43a047', '#66bb6a', '#81c784', '#a5d6a7', '#c8e6c9']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: { x: { ticks: { color: '#6b7b6f' }, grid: { display: false } }, y: { beginAtZero: true, ticks: { color: '#6b7b6f' }, grid: { color: 'rgba(16,32,26,0.08)' } } }
            }
        });
    }

    if (pieCtx) {
        new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['O que é APP?', 'Tenho um rio.', 'Vou perder minha terra?', 'Como fazer o CAR?'],
                datasets: [{
                    data: [38, 24, 18, 20],
                    backgroundColor: ['#1b5e20', '#43a047', '#66bb6a', '#a5d6a7']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { position: 'bottom', labels: { color: '#425047' } } }
            }
        });
    }

    if (donutCtx) {
        new Chart(donutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Regular', 'Atenção', 'Possível Pendência', 'Necessita Apoio'],
                datasets: [{
                    data: [42, 24, 18, 16],
                    backgroundColor: ['#2e7d32', '#f59e0b', '#fb8c00', '#d32f2f'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '68%',
                plugins: { legend: { display: false } }
            }
        });
    }
});
