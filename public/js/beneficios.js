document.addEventListener('DOMContentLoaded', () => {
    const programs = [
        {
            title: 'Crédito Rural para Pequenos Produtores',
            type: 'credito-rural',
            state: 'MG',
            city: 'Uberlândia',
            description: 'Linha de financiamento com apoio técnico para produtores familiares.',
            lat: -18.9186,
            lng: -48.2772
        },
        {
            title: 'PSA – Programa de Sustentação do Agro',
            type: 'psa',
            state: 'SP',
            city: 'Ribeirão Preto',
            description: 'Apoio para produtores com foco em recuperação de renda e produção.',
            lat: -21.1775,
            lng: -47.8103
        },
        {
            title: 'PRA – Programa de Recuperação Agrícola',
            type: 'pra',
            state: 'PR',
            city: 'Londrina',
            description: 'Programa para fortalecimento da produção e recuperação econômica.',
            lat: -23.3045,
            lng: -51.1696
        },
        {
            title: 'Benefício Ambiental para Conservação',
            type: 'ambiental',
            state: 'BA',
            city: 'Ilhéus',
            description: 'Incentivo para áreas de preservação e recuperação ambiental.',
            lat: -14.7936,
            lng: -39.0395
        }
    ];

    const map = L.map('map').setView([-15.7795, -47.9292], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const markersLayer = L.layerGroup().addTo(map);
    const programList = document.getElementById('programList');
    const resultadoCount = document.getElementById('resultadoCount');

    const renderPrograms = (filters = {}) => {
        const filtered = programs.filter((program) => {
            const matchesState = !filters.state || program.state === filters.state;
            const matchesCity = !filters.city || program.city.toLowerCase().includes(filters.city.toLowerCase());
            const matchesType = !filters.type || program.type === filters.type;
            return matchesState && matchesCity && matchesType;
        });

        markersLayer.clearLayers();
        programList.innerHTML = '';

        if (!filtered.length) {
            programList.innerHTML = '<p class="text-muted mb-0">Nenhum programa encontrado.</p>';
            resultadoCount.textContent = '0 resultados';
            return;
        }

        resultadoCount.textContent = `${filtered.length} resultados`;

        filtered.forEach((program) => {
            const marker = L.marker([program.lat, program.lng]).addTo(markersLayer);
            marker.bindPopup(`<strong>${program.title}</strong><br>${program.city} - ${program.state}`);

            const item = document.createElement('div');
            item.className = 'program-item';
            item.innerHTML = `
                <div class="d-flex justify-content-between align-items-start gap-2">
                    <div>
                        <h6>${program.title}</h6>
                        <p>${program.description}</p>
                    </div>
                    <span class="badge bg-primary-subtle text-primary">${program.city}</span>
                </div>
                <small class="text-muted">${program.state} • ${program.type.replace('-', ' ')}</small>
            `;
            programList.appendChild(item);
        });

        const bounds = L.latLngBounds(filtered.map((program) => [program.lat, program.lng]));
        map.fitBounds(bounds, { padding: [40, 40] });
    };

    document.getElementById('aplicarFiltros').addEventListener('click', () => {
        renderPrograms({
            state: document.getElementById('estadoFilter').value,
            city: document.getElementById('municipioFilter').value,
            type: document.getElementById('tipoFilter').value
        });
    });

    renderPrograms();
});
