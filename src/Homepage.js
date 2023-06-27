import React from 'react'
import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function Homepage() {
  return (
      <div className='Homepage'>
        <Header />
        <SearchBar />
        <EmployeeList />
    </div>
  )
}

export default Homepage