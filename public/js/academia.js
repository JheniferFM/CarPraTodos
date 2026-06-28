document.addEventListener('DOMContentLoaded', () => {
    const quizButton = document.getElementById('checkQuiz');
    const quizResult = document.getElementById('quizResult');

    if (quizButton && quizResult) {
        quizButton.addEventListener('click', () => {
            const answer = document.getElementById('q1a');
            if (answer && answer.checked) {
                quizResult.textContent = 'Correto! O diagnóstico inteligente orienta o usuário em etapas e organiza o próximo passo.';
                quizResult.className = 'mt-3 mb-0 fw-semibold text-success';
            } else {
                quizResult.textContent = 'Quase lá! A resposta correta é que ele orienta o usuário em etapas e organiza os próximos passos.';
                quizResult.className = 'mt-3 mb-0 fw-semibold text-warning';
            }
        });
    }
});
