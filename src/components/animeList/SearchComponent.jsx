import React, { useEffect, useState } from 'react'

function SearchComponent() {
  const [name, setName] = useState('');
  useEffect(() => {
    console.log('render ulit')
    const save = localStorage.getItem('names');
    if (save) {
      setName(save)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('names', name)
  }, [name]);
  return (
    <div>
      <p>{name}</p>
      <input type="text" placeholder='type name' value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default SearchComponent