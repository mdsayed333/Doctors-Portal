import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, email, img, specialty } = doctor;

//   const handleDelete = (email) => {
//       const confirm = window.confirm("Do you really want to delete?");
//       if(confirm){
//         fetch(`http://localhost:5000/doctor/${email}`, {
//             method: 'DELETE',
//             headers: {
//                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             if(data.deletedCount){
//                 toast(`Doctor: ${name} is deleted.`);
//                 refetch();
//             }
//         });
//       }
//   }
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div class="flex items-center space-x-3">
          <div class="avatar">
            <div class="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div class="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{specialty}</td>
      <td>{email}</td>
      <th>
      <label onClick={()=> setDeletingDoctor(doctor)} for="my-modal-6" class="btn btn-outline btn-error btn-xs">
        open modal
      </label>
        {/* <button onClick={() => handleDelete(email)} class="btn btn-outline btn-error btn-xs">Delete</button> */}
      </th>
    </tr>
  );
};

export default DoctorRow;
