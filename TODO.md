um # TODO - Remover barra de acessibilidade/contraste do Dashboard

- [ ] Atualizar o arquivo `resources/views/dashboard.blade.php` para NÃO carregar o script `public/js/accessibility.js` (ou script equivalente).
- [ ] Caso o toolbar seja injetado por outro script/JS global, localizar e desabilitar somente para a rota de dashboard.
- [ ] Caso existam estilos relacionados, desabilitar somente no dashboard (CSS/override), sem quebrar contraste opcional em outras telas.
- [ ] Testar renderização do dashboard (desktop e mobile) confirmando que a barrinha não aparece.

