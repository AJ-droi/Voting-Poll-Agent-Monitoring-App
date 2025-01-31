import React from 'react'

const Analytics = () => {
  return (
    <div className="grid grid-cols-3 justify-items-center py-5 gap-4 px-[1%]">
    {[1, 2, 3].map((item, index) => (
      <div
        key={index}
        className="bg-[#fff] w-[80%] h-[100px] flex rounded-md items-center justify-between px-[3%]"
      >
        <h3 className="text-[12px]">Total Wards Reporting</h3>
        <p className="text-[12px]">70000</p>
      </div>
    ))}
  </div>
  )
}

export default Analytics