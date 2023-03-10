const butInstall = document.getElementById('buttonInstall');

// Lógica para instalar la PWA
// Controlador de eventos al evento `beforeinstallprompt`
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Controlador de eventos de clic en el elemento `butInstall`
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});

// Controlador para el evento `appinstalled`
window.addEventListener('appinstalled', (event) => {
      window.deferredPrompt = null;
});
