document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.querySelectorAll('.footer-year').forEach((element) => {
    element.textContent = year;
  });

  const body = document.body;
  const savedContrast = localStorage.getItem('car-accessibility-contrast');
  const savedFont = localStorage.getItem('car-accessibility-font');

  if (savedContrast === 'true') {
    body.classList.add('contrast-mode');
  }

  if (savedFont === 'true') {
    body.classList.add('font-large');
  }

  const contrastButton = document.querySelector('[data-action="contrast"]');
  const fontButton = document.querySelector('[data-action="font"]');

  if (contrastButton) {
    contrastButton.addEventListener('click', () => {
      body.classList.toggle('contrast-mode');
      const active = body.classList.contains('contrast-mode');
      localStorage.setItem('car-accessibility-contrast', String(active));
      contrastButton.textContent = active ? 'Desativar alto contraste' : 'Ativar alto contraste';
    });
  }

  if (fontButton) {
    fontButton.addEventListener('click', () => {
      body.classList.toggle('font-large');
      const active = body.classList.contains('font-large');
      localStorage.setItem('car-accessibility-font', String(active));
      fontButton.textContent = active ? 'Diminuir fonte' : 'Aumentar fonte';
    });
  }

  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach((tab) => tab.classList.remove('active'));
      button.classList.add('active');
      document.querySelectorAll('.auth-form').forEach((form) => form.classList.toggle('hidden', !form.id.includes(button.dataset.tab)));
    });
  });

  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const authMessage = document.getElementById('authMessage');

  const getRedirectRoute = (role) => {
    if (role === 'Administrador') return 'admin.html';
    if (role === 'Analista Ambiental') return 'dashboard.html';
    return 'index.html';
  };

  const applyUserState = (user) => {
    localStorage.setItem('car-user', JSON.stringify(user));
    document.querySelectorAll('a[href="login.html"]').forEach((link) => {
      link.textContent = user.role === 'Administrador' ? 'Painel' : user.role === 'Analista Ambiental' ? 'Dashboard' : 'Meu acesso';
      link.href = getRedirectRoute(user.role);
    });
  };

  const savedUser = JSON.parse(localStorage.getItem('car-user') || 'null');
  if (savedUser) {
    applyUserState(savedUser);
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value.trim();
      const password = loginForm.querySelector('input[type="password"]').value.trim();
      const role = loginForm.querySelector('select').value;

      if (!email || !password) {
        if (authMessage) {
          authMessage.textContent = 'Informe o e-mail e a senha para continuar.';
        }
        return;
      }

      const user = { email, role, status: 'logado' };
      applyUserState(user);
      if (authMessage) {
        authMessage.textContent = `Login realizado com sucesso! Redirecionando para o painel.`;
      }
      window.setTimeout(() => {
        window.location.href = getRedirectRoute(role);
      }, 900);
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = registerForm.querySelector('input[name="name"]').value.trim();
      const email = registerForm.querySelector('input[type="email"]').value.trim();
      const password = registerForm.querySelector('input[type="password"]').value.trim();
      const role = registerForm.querySelector('select').value;

      if (!name || !email || !password) {
        if (authMessage) {
          authMessage.textContent = 'Preencha todos os campos para criar a conta.';
        }
        return;
      }

      const user = { name, email, role, status: 'cadastro' };
      applyUserState(user);
      if (authMessage) {
        authMessage.textContent = `${name} cadastrado com sucesso! Redirecionando para o painel.`;
      }
      window.setTimeout(() => {
        window.location.href = getRedirectRoute(role);
      }, 900);
    });
  }

  const diagnosticForm = document.getElementById('diagnosticForm');
  const diagnosticResult = document.getElementById('diagnosticResult');

  if (diagnosticForm && diagnosticResult) {
    diagnosticForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const type = diagnosticForm.querySelector('#propertyType').value;
      const area = Number(diagnosticForm.querySelector('#propertyArea').value || 0);
      const hasApp = diagnosticForm.querySelector('#hasApp').checked;
      const hasReserva = diagnosticForm.querySelector('#hasReserva').checked;
      const status = diagnosticForm.querySelector('#carStatus').value;

      const recommendations = [];
      if (hasApp) {
        recommendations.push('Manter a APP demarcada e consultar o mapeamento local para evitar novas irregularidades.');
      } else if (area > 60) {
        recommendations.push('Avaliar a necessidade de recuperação da APP ou da Reserva Legal com apoio técnico.');
      }

      if (!hasReserva) {
        recommendations.push('Revisar a Reserva Legal e estudar recuperação ambiental antes do próximo atendimento.');
      }

      if (status !== 'regularizado') {
        recommendations.push('Organizar a documentação e priorizar a regularização do CAR para reduzir riscos.');
      }

      diagnosticResult.classList.remove('hidden');
      diagnosticResult.innerHTML = `
        <h3>Relatório personalizado</h3>
        <p><strong>Tipo da propriedade:</strong> ${type}</p>
        <p><strong>Área aproximada:</strong> ${area} hectares</p>
        <p><strong>Situação do CAR:</strong> ${status}</p>
        <ul class="result-list">
          <li>APP ${hasApp ? 'já identificada' : 'não informada'}.</li>
          <li>Reserva Legal ${hasReserva ? 'presente' : 'a confirmar'}.</li>
          <li>Recomendação principal: ${recommendations[0] || 'Manter o acompanhamento regular e buscar orientação técnica.'}</li>
        </ul>
      `;
    });
  }

  const quizForm = document.getElementById('quizForm');
  const quizResult = document.getElementById('quizResult');

  if (quizForm && quizResult) {
    quizForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const answer = quizForm.querySelector('select').value;
      const score = answer === 'reserva' ? 10 : 4;
      quizResult.classList.remove('hidden');
      quizResult.innerHTML = `
        <h3>Resultado do quiz</h3>
        <p>Sua pontuação foi <strong>${score}/10</strong>.</p>
        <p>${score >= 8 ? 'Você demonstrou bom entendimento.' : 'Continue estudando e aproveite o conteúdo da Academia CAR.'}</p>
      `;
    });
  }

  const assistantForm = document.getElementById('assistantForm');
  const chatMessages = document.getElementById('chatMessages');

  if (assistantForm && chatMessages) {
    assistantForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = assistantForm.querySelector('textarea');
      const question = input.value.trim();
      if (!question) return;

      const response = generateAssistantAnswer(question);
      chatMessages.insertAdjacentHTML('beforeend', `
        <div class="chat-bubble user">${question}</div>
        <div class="chat-bubble assistant">${response}</div>
      `);
      input.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
  }
});

function generateAssistantAnswer(question) {
  const text = question.toLowerCase();
  if (text.includes('app')) {
    return 'A APP é a Área de Preservação Permanente. Ela é importante para proteger nascentes, margens de rios e encostas, e pode exigir cuidados especiais na propriedade.';
  }
  if (text.includes('reserva legal')) {
    return 'A Reserva Legal é a área destinada à conservação da vegetação nativa. A sua manutenção é essencial para a regularização e para a preservação ambiental.';
  }
  if (text.includes('benefício')) {
    return 'A regularização do CAR pode facilitar acesso a crédito rural, programas públicos e maior segurança jurídica para a propriedade.';
  }
  return 'Posso explicar termos como APP, Reserva Legal, CAR e benefícios ambientais. Se quiser, também posso orientar sobre os próximos passos da regularização.';
}
