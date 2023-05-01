import React, { useState } from 'react'
import UserTable from './UserTable'
import Search from './Search'

const FilterUserTable = ({user}) => {
  const [filterText , setFilterText] = useState('');
  const [availableOnly, setAvailableOnly] = useState(false);
  return (
    <div>
        <Search
        filterText={filterText}
        availableOnly={availableOnly}
        onFilterTextChange={setFilterText}
        onAvailableChange={setAvailableOnly}/>
        <UserTable 
        user={user}
        filterText={filterText}
        availableOnly={availableOnly}/>
    </div>
  )
}

export default FilterUserTable