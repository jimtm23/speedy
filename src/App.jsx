import { useEffect, useState } from 'react';
import './styles.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    cylinder: '12kg',
    quantity: 1,
    date: '',
    payment: 'cash',
    notes: '',
  });
  const [installPrompt, setInstallPrompt] = useState(null);
  const [installMessage, setInstallMessage] = useState('');

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setInstallMessage('App installed successfully.');
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted — see console for payload.');
    console.log('Order payload:', form);
  };

  const handleInstallClick = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      const choice = await installPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setInstallMessage('The app was installed successfully.');
      }
      setInstallPrompt(null);
      return;
    }

    setInstallMessage('Use your browser menu and choose “Add to Home Screen” or “Install app”.');
  };

  return (
    <main className="app-shell">
      <div className="split">
        <aside className="hero">
          <div className="logo">Speedy <span>LPG</span></div>
          <p className="tagline">LPG express delivery</p>
          <div className="hero-decor" aria-hidden />
        </aside>

        <section className="form-card">
          <div className="install-bar">
            <button type="button" className="install-app" onClick={handleInstallClick}>
              Install app
            </button>
            {installMessage && <p className="install-message">{installMessage}</p>}
          </div>

          <h2>Place an Order</h2>
          <p className="form-desc">Fast delivery — fill in your details and we'll bring LPG to you.</p>

          <form onSubmit={handleSubmit} className="order-form">
            <label>
              Full name
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>

            <label>
              Phone
              <input name="phone" value={form.phone} onChange={handleChange} required />
            </label>

            <label>
              Delivery address
              <textarea name="address" value={form.address} onChange={handleChange} rows={2} required />
            </label>

            <div className="row">
              <label>
                Cylinder
                <select name="cylinder" value={form.cylinder} onChange={handleChange}>
                  <option>12kg</option>
                  <option>5kg</option>
                  <option>45kg</option>
                </select>
              </label>

              <label>
                Quantity
                <input type="number" min="1" name="quantity" value={form.quantity} onChange={handleChange} />
              </label>
            </div>

            <label>
              Preferred delivery date
              <input type="date" name="date" value={form.date} onChange={handleChange} />
            </label>

            <label>
              Payment method
              <select name="payment" value={form.payment} onChange={handleChange}>
                <option value="cash">Cash on delivery</option>
                <option value="card">Card</option>
                <option value="online">Online</option>
              </select>
            </label>

            <label>
              Notes (optional)
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={2} />
            </label>

            <div className="actions">
              <button type="submit" className="submit">Send Order</button>
              <button type="button" className="secondary" onClick={() => setForm({ name: '', phone: '', address: '', cylinder: '12kg', quantity: 1, date: '', payment: 'cash', notes: '' })}>Reset</button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}

export default App;
