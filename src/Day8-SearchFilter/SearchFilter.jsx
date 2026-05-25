import React, { useState } from 'react'

const SearchFilter = () => {

  const data = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Michael Johnson' },
    { id: 4, name: 'Emily Davis' },
    { id: 5, name: 'William Brown' },
    { id: 6, name: 'Olivia Wilson' },
    { id: 7, name: 'James Taylor' },
    { id: 8, name: 'Sophia Anderson' },
    { id: 9, name: 'Benjamin Thomas' },
    { id: 10, name: 'Ava Martinez' },
    { id: 11, name: 'Daniel Lee' },
    { id: 12, name: 'Mia Harris' },
    { id: 13, name: 'Matthew Clark' },
    { id: 14, name: 'Isabella Lewis' },
    { id: 15, name: 'David Walker' },
    { id: 16, name: 'Charlotte Hall' },
    { id: 17, name: 'Joseph Allen' },
    { id: 18, name: 'Amelia Young' },
    { id: 19, name: 'Christopher King' },
    { id: 20, name: 'Evelyn Wright' },
    { id: 21, name: 'Andrew Scott' },
    { id: 22, name: 'Abigail Green' },
    { id: 23, name: 'Ryan Adams' },
    { id: 24, name: 'Harper Baker' },
    { id: 25, name: 'Brandon Nelson' },
    { id: 26, name: 'Ella Carter' },
    { id: 27, name: 'Justin Mitchell' },
    { id: 28, name: 'Avery Perez' },
    { id: 29, name: 'Kevin Roberts' },
    { id: 30, name: 'Sofia Turner' }
];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
        <h1>Search + Filter</h1>
        <input
           type="text"
           placeholder="Search..."
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
        />
        <hr/>
        {
            filteredData.length > 0 ? (
                <ul>
                    {filteredData.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )
        }
    </div>
  )
}

export default SearchFilter