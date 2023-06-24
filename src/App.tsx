// React imports
import { useState } from 'react';

// Css imports
import './app.css';

// Component imports
import Tile from './components/Tile';
import TextInput from './components/TextInput';
import MoneyValue from './components/MoneyValue';

function App() {
  const [netIncome, setnetIncome] = useState(0);

  const leftContent = (
    <>
      <TextInput placeholder="Net Income" onChange={(val) => setnetIncome(val)} />
    </>
  );

  const rightContent = (
    <>
      <h3>
        Net Income: <MoneyValue value={netIncome} />
      </h3>
    </>
  );

  return (
    <div className="test-border container">
      <Tile name="Left">{leftContent}</Tile>
      <Tile name="Right">{rightContent}</Tile>
    </div>
  );
}

export default App;
