import React from 'react'

function EmployeeJulie() {
    const person = [{ name: 'Julie Taylor', title: 'VP of Marketing'}]
    const info = [
        { office: 'Call Office', number: '781-000-0002' },
        { cell: 'Call Mobile', mobNumber: '617-000-0002' },
        { sms: 'SMS', smsNumber: '617-000-0002' }, 
        { email:'Email', emailUs: 'jtaylor@fakeemail.com' }
    ]
  return (
      <div className='EmployeeJulie'>
      <div className='julieTaylor'>
        <h4 style={{ margin: 0, padding: 0 }}>{person[0].name}</h4>
        <h5 style={{ margin: 0, padding: 0, opacity: 0.5 }}>{person[0].title}</h5>
      </div>
      {info.map((item, index) => (
        <div key={index} className='julieInfo'>
          {Object.entries(item).map(([key, value], innerIndex) => (
            <div key={innerIndex} style={{ display: 'flex', alignItems: 'center' }}>
              <p style={{ margin: 0, padding: 0 }}>{value}</p>
              {innerIndex !== Object.keys(item).length - 1 && <span>&gt;</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default EmployeeJulie