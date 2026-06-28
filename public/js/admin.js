document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('activityChart');
    if (ctx && window.Chart) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
                datasets: [{
                    label: 'Atividade',
                    data: [24, 31, 28, 34, 40, 29, 37],
                    backgroundColor: ['#4f8cff', '#6dc7ff', '#4f8cff', '#6dc7ff', '#4f8cff', '#6dc7ff', '#4f8cff'],
                    borderRadius: 8
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: false } },
                scales: { y: { beginAtZero: true } }
            }
        });
    }
});
