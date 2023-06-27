import React from 'react'

function EmployeeListItem() {
    const EmployeeNames = [
        { name: 'James King', title: 'President and CEO' },
        { name: 'Julia Taylor', title: 'VP of Marketing' },
        { name: 'Eugene Lee', title: 'CFO' },
        { name: 'John Williams', title: 'VP of Engineering' },
        { name: 'Ray Moore', title: 'VP of Sales' },
        { name: 'Paul Jones', title: 'QA Manager'}
    ]
  return (
      <div className='EmployeeListItem'>
          {EmployeeNames.map((EmployeeNames, index) => (
              <div key={index} className='listBorder'>
                <h5 style={{margin: 0}}>{EmployeeNames.name}</h5>
                  <h6 style={{ margin: 0,  opacity: .5}}>{EmployeeNames.title}</h6>
              </div>
          ))}
    </div>
  )
}

export default EmployeeListItem