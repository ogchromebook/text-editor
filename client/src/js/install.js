const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered event
    window.deferredPrompt = event;

// TODO: Implement a click event handler on the `butInstall` element
  butInstall.classList.toggle('hidden', false);
});

// TODO: Add an handler for the `appinstalled` event
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
      return;
    }
  
    // Show the install prompt
    promptEvent.prompt();
  
    // Reset the deferred prompt variable, it can only be used once
    window.deferredPrompt = null;
  
    // Hide the install button
    butInstall.classList.toggle('hidden', true);
  });
  
  window.addEventListener('appinstalled', (event) => {
    // Clear the deferred prompt
    window.deferredPrompt = null;
  
    console.log('👍', 'appinstalled', event);
  });
