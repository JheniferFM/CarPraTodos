# Arquitetura proposta do projeto

## Visão geral
A solução CAR para Todos é pensada como uma plataforma web completa para democratizar o acesso ao Cadastro Ambiental Rural, com foco em acessibilidade, linguagem simples e automação.

## Frontend
- Vue.js 3 para a interface do usuário
- Componentização por módulos: landing, autenticação, assistente, diagnóstico, academia, dashboard e painel administrativo
- Design responsivo com paleta inspirada na natureza

## Backend
- Laravel 12 como framework principal
- MVC com controllers, services e repositories
- API REST documentada
- Autenticação, autorização e middlewares

## Banco de dados
- MySQL
- Tabelas principais: users, roles, questions, answers, diagnostics, lessons, modules, benefits, reports, logs

## Fluxo de navegação
1. Usuário acessa a landing page
2. Realiza cadastro ou login
3. Utiliza assistente, diagnóstico ou academia
4. Analistas acompanham dashboards e relatórios
5. Admin gerencia usuários e conteúdos
