import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage('Error connecting to backend'));
  }, []);

  getOrigin()
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>🚀 React + Node.js App Deployed on AWS EC2</h1>
      <p>Automated beautifully via <strong>Terraform</strong>.</p>
      <p>Deployed using <strong> Docker </strong>.</p>
    </div>
  );
}

export default App;

