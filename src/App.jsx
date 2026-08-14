import { useEffect, useState } from 'react';

function App() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setInstallPrompt(null);
    };

    const displayMode = window.matchMedia('(display-mode: standalone)');
    const syncInstalledState = () => setIsInstalled(displayMode.matches);

    syncInstalledState();
    displayMode.addEventListener?.('change', syncInstalledState);
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      displayMode.removeEventListener?.('change', syncInstalledState);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    installPrompt.prompt();
    const choice = await installPrompt.userChoice;

    if (choice.outcome === 'accepted') {
      setIsInstalled(true);
    }

    setInstallPrompt(null);
  };

  return (
    <main className="app-shell">
      <section className="card">
        <p className="eyebrow">Progressive Web App</p>
        <h1>React PWA Starter</h1>
        <p className="description">
          This app is designed to install on mobile like a native app, with offline support,
          standalone display mode, and app-like behavior.
        </p>

        {isInstalled ? (
          <div className="status success">Installed on this device</div>
        ) : installPrompt ? (
          <button type="button" className="install-button" onClick={handleInstallClick}>
            Install on mobile
          </button>
        ) : (
          <div className="status">Open in Chrome or Safari on mobile to see the install prompt.</div>
        )}
      </section>
    </main>
  );
}

export default App;
