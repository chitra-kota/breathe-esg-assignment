import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchRecords();
  }, []);

  const fetchRecords = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/records/");
    setRecords(res.data);
  };

  const addSampleData = async () => {
    await axios.post("http://127.0.0.1:8000/api/records/", {
      source: "SAP",
      activity: "Diesel Consumption",
      quantity: 500,
      unit: "Litres",
      scope: "Scope 1",
      status: "PENDING",
      suspicious: false
    });

    fetchRecords();
  };
  const updateStatus = async (id, status, record) => {
  await axios.put(`http://127.0.0.1:8000/api/records/${id}/`, {
    ...record,
    status: status
  });

  fetchRecords();
}; 

  return (
    <div className="App">
      <h1>ESG Data Review Dashboard</h1>

      <button onClick={addSampleData}>Add Sample Record</button>

      <table>
        <thead>
          <tr>
            <th>Source</th>
            <th>Activity</th>
            <th>Quantity</th>
            <th>Unit</th>
            <th>Scope</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {records.map((record) => (
            <tr key={record.id} className={record.suspicious ? "suspicious" : ""}>
              <td>{record.source}</td>
              <td>{record.activity}</td>
              <td>{record.quantity}</td>
              <td>{record.unit}</td>
              <td>{record.scope}</td>
              <td>{record.status}</td>
              <td>
  <button onClick={() => updateStatus(record.id, "APPROVED", record)}>
    Approve
  </button>

  <button onClick={() => updateStatus(record.id, "REJECTED", record)}>
    Reject
  </button>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;