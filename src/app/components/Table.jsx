import React from "react";
import { MdDelete} from "react-icons/md";

const Table = ({tHead,tData,handleDelete,tag}) => {
  return (
    <table className="table-auto min-w-full text-sm bg-gray-400">
      <thead className="text-xs uppercase font-medium ">
        <tr >
          {tHead?.map((head,index)=>(<th
            key={index}
            scope="col"
            className="px-6 py-3 text-left text-base tracking-wider border-2"
          >
            {head}
          </th>))}
        </tr>
      </thead>
      <tbody>
        {tData?.map((data,index) => (          
          <tr key={index} >
              {data.subject&&<td className="px-6 py-3 text-left  border-2 ">
                {data.subject}                
              </td>}
              <td className="px-6 py-3 text-left  border-2 ">              
                {data.name||data.rollNo}                
              </td>
              <td className="px-6 py-3 text-left  border-2 ">              
                {data.heading1||data.studentName}                
              </td>
              {data.heading2&&<td className="px-6 py-3 text-left  border-2 ">              
                {data.heading2}                
              </td>}
              <td className="px-6 py-3 text-left  border-2 ">              
                {data.percentage}                
              </td>
              {data.photo && <td className="px-6 py-3 text-left  border-2 ">              
                {data?.photo?.name}                
              </td>}
              <td className="px-6 py-3 text-left  border-2 ">              
                <p className="inline-block ml-3 hover:cursor-pointer text-lg " onClick={()=>handleDelete(data,tag)}><MdDelete /></p>
              </td>              
            </tr>
          ))}
      </tbody>
    </table>
  );

};

export default Table;
