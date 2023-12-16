import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [repairers, setRepairers] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:16001/repairers')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setRepairers(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:16001/customers')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCustomers(data);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>

      <h1>This is repairs</h1>
      {repairers.map((repairer) => (
        <>
          <ul key={repairer.id}>
            <li>{repairer.name}</li>
          </ul>
        </>

      ))}

      <h1>This is customers from another microservice</h1>
      {customers.map((customer) => (
        <>
          <ul key={customer.id}>
            <li>{customer.name}</li>
          </ul>
        </>

      ))}
    </div>
    </>
  )
}

export default App
