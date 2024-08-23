import { useState } from 'react'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    { name: 'Hamza', rollNo: '101', fatherName: 'Arif' },
    { name: 'Hammad', rollNo: '102', fatherName: 'Arif' },
    { name: 'Haseeb', rollNo: '103', fatherName: 'Arif' },
  ]);

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Students List</h1>
      {students.map((student, index) => (
        <div key={index} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-md">
          <p className="text-lg font-medium">
            <span className="font-semibold">Name:</span> {student.name}
          </p>
          <p className="text-lg font-medium">
            <span className="font-semibold">Roll No:</span> {student.rollNo}
          </p>
          <p className="text-lg font-medium">
            <span className="font-semibold">Father's Name:</span> {student.fatherName}
          </p>
        </div>
      ))}
    </>
  )
}

export default App;
