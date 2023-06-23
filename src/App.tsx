import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [isAlerting, setIsAlerting] = useState(false);

  return (
    <div>
      {isAlerting && (
        <Alert onClose={() => setIsAlerting(false)}>My Alert</Alert>
      )}
      <Button
        color="primary"
        onClick={() => {
          setIsAlerting(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
