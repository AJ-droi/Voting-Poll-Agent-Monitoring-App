import React from 'react'

const electionData = [
    {
      ward_name: "jakpa",
      total_result: 10,
      pending_result: 5,
      total_polling_units: 15,
      polling_units_counted: 10,
      polling_units_pending: 5,
      created_at: "2021-10-10",
      updated_at: "2021-10-10",
    },
    {
      ward_name: "jakpa",
      total_result: 10,
      pending_result: 5,
      total_polling_units: 15,
      polling_units_counted: 10,
      polling_units_pending: 5,
      created_at: "2021-10-10",
      updated_at: "2021-10-10",
    },
  ];


  const renderOrderRow = (data: any, index: number) => (
    <tr key={index} className="border rounded-md">
      <td className="lg:text-md  px-4 py-2 text-sm text-center">{data?.ward_name}</td>
      <td className="lg:text-md  px-4 py-2 text-sm text-center">
        {data?.total_polling_units}
      </td>
      <td className="lg:text-md  px-4 py-2 text-sm text-center">
        {data?.polling_units_counted}
      </td>
      <td className="lg:text-md  px-4 py-2 text-sm text-center">
        {data?.polling_units_pending}
      </td>
      <td className="lg:text-md  px-4 py-2 text-sm text-center">
        {data?.pending_result}
      </td>
      <td className="lg:text-md  px-4 py-2 text-sm text-center">
        {data?.total_result}
      </td>
      <td className="lg:text-md  px-4 py-2 text-sm text-center">
        {new Date(data?.created_at).toLocaleDateString()}
      </td>
      <td className="lg:text-md  px-4 py-2 text-sm text-center">
        {new Date(data?.updated_at).toLocaleDateString()}
      </td>
    </tr>
  );

const Table = () => {
    const loading = false;
  return (
     <div className="overflow-x-auto px-[5%]">
        <div className='flex justify-end'>
        <button
              type="submit"
              className="flex  justify-center w-[15%] mb-[2%] rounded-md bg-[#3CB371] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
             Export to CSV
            </button>
        </div>
       
     <table className="min-w-full  bg-[#fff] rounded-md">
       <thead>
         <tr className="bg-[#fff]">
           {[
             "Ward Name",
             "Total Polling Units",
             "Polling Units Counted",
             "Polling Units Pending",
             "Pending Results",
             "Total Results",
             "Created At",
             "Updated At",
           ].map((header, idx) => (
             <th
               key={idx}
               className="lg:text-md  px-4 py-2 text-left text-sm"
             >
               {header}
             </th>
           ))}
         </tr>
       </thead>
       <tbody>
         {loading ? (
           <tr>
             <td className=" px-4 py-2 text-center" colSpan={8}>
               Loading...
             </td>
           </tr>
         ) : electionData.length > 0 ? (
           electionData.map((item, index) => renderOrderRow(item, index))
         ) : (
           <tr>
             <td className="border px-4 py-2 text-center" colSpan={8}>
               No data found
             </td>
           </tr>
         )}
       </tbody>
     </table>
   </div>
  )
}

export default Table