import './App.css';
import Carddetails from './components/Carddetails';
import CreditCard from './components/CreditCard';

function App() {
  return (
    <div className='bg'>
        <div className='left'>
          <CreditCard/>
        </div>
        <Carddetails/>
    </div>
  );
}

export default App;
