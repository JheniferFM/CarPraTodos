document.addEventListener('DOMContentLoaded', () => {
    const steps = Array.from(document.querySelectorAll('.step-panel'));
    const progressBar = document.getElementById('progressBar');
    const stepCounter = document.getElementById('stepCounter');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const form = document.getElementById('diagnosticForm');
    const resultSection = document.getElementById('resultSection');
    const printBtn = document.getElementById('printBtn');
    const downloadBtn = document.getElementById('downloadBtn');

    let currentStep = 0;

    const updateStep = () => {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index === currentStep);
        });

        const percent = ((currentStep + 1) / steps.length) * 100;
        progressBar.style.width = `${percent}%`;
        stepCounter.textContent = currentStep + 1;
        prevBtn.disabled = currentStep === 0;
        nextBtn.textContent = currentStep === steps.length - 1 ? 'Finalizar' : 'Continuar';
    };

    prevBtn.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep -= 1;
            updateStep();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
            currentStep += 1;
            updateStep();
        } else {
            const situacao = 'Sua situação indica necessidade de organização e acompanhamento, com boas chances de avanço ao seguir o plano sugerido.';
            const pendencias = 'Falta consolidar documentos e definir prioridade entre os benefícios disponíveis.';
            const recomendacoes = 'Acompanhar o processo, organizar os documentos e utilizar o assistente para esclarecer dúvidas.';
            const plano = '1. Reunir documentos. 2. Revisar benefícios. 3. Seguir o diagnóstico. 4. Solicitar apoio quando necessário.';

            document.getElementById('situacaoText').textContent = situacao;
            document.getElementById('pendenciasText').textContent = pendencias;
            document.getElementById('recomendacoesText').textContent = recomendacoes;
            document.getElementById('planoText').textContent = plano;

            form.style.display = 'none';
            resultSection.style.display = 'block';
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    printBtn.addEventListener('click', () => {
        window.print();
    });

    downloadBtn.addEventListener('click', () => {
        alert('Funcionalidade de download PDF preparada para integração futura.');
    });

    updateStep();
});
