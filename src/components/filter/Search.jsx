import React from 'react'

const Search = ({availableOnly, filterText, onFilterTextChange, onAvailableChange}) => {
  console.log("Search", availableOnly);
  return (
   <form>
    <input 
    type='text' 
    placeholder='Search...'
    value={filterText}
    onChange={(e) => onFilterTextChange(e.target.value)}/>
    <label>
        <input 
        type='checkbox'
        checked={availableOnly}
        onChange={(e) => onAvailableChange(e.target.checked)}
        />
        {' '}
        Only show available users
    </label>
   </form>
  )
}

export default Search