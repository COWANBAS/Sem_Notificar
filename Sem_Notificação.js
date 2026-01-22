// ==UserScript==
// @name           Sem Notificação
// @description    Remove as notificações de todos os sites do navegador.
// @namespace      CowanNOT
// @license        GPL-3.0
// @version        1.0
// @author         Cowanbas
// @match          *://*/*
// @run-at         document-start
// ==/UserScript==

(function() {
    'use strict';

    // Lista de nomes comuns de notificações
    const notificationSelectors = [
        '.notification',       // Classe de notificação
        '#notification',       // ID de notificação
        '.notif',              // Abreviação às vezes usada
        '.alert',              // Alertas do Bootstrap
        '.toast',              // Notificações tipo toast
        '.popup',              // Notificações estilo popup
        '[role="alert"]',      // Role ARIA para alerta
        '[data-notification]'  // Atributo de dados customizado
    ];

    // Remover as notificações
    function removeNotifications() {
        notificationSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.remove();
            });
        });
    }

    // Tirar as notificações ao recarregar a página
    window.addEventListener('load', removeNotifications);

    // Observar notificações adicionadas dinamicamente
    const observer = new MutationObserver(removeNotifications);
    observer.observe(document.body, { childList: true, subtree: true });

})();

