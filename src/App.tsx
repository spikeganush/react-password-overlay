import React from 'react';
import PasswordOverlay from './components/PasswordOverlay';

function App() {
  return (
    <div className="App">
      <PasswordOverlay
        overlayVisibile={true}
        password="12345678"
        passwordVerifError={{
          length: false,
          upper: false,
          lower: false,
          number: false,
          special: false,
        }}
      />
    </div>
  );
}

export default App;
