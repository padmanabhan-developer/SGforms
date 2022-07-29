import logo from './logo.svg';
import './App.css';
import DnsForm from './modules/dns/DnsForm';
import IpamForm from './modules/ipam/IpamForm';

function App() {
  return (
    <div className="App app-container">
      <DnsForm />
      <IpamForm />
    </div>
  );
}

export default App;
