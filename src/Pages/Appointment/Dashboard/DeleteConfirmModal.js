import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({deletingDoctor, refetch, setDeletingDoctor}) => {
    const {name, email} = deletingDoctor;

    const handleDelete = () => {
        const confirm = window.confirm("Do you really want to delete?");
        if(confirm){
          fetch(`http://localhost:5000/doctor/${email}`, {
              method: 'DELETE',
              headers: {
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
          })
          .then(res => res.json())
          .then(data => {
              console.log(data);
              if(data.deletedCount){
                  toast(`Doctor: ${name} is deleted.`);
                  setDeletingDoctor(null);
                  refetch();
              }
          });
        }
    }

  return (
    <div>
      {/* <!-- The button to open modal --> */}
      {/* <label for="my-modal-6" class="btn modal-button">
        open modal
      </label> */}

      {/* <!-- Put this part before </body> tag --> */}
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
          Do you really want to delete?
          </h3>
          <p class="py-4 ">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
          <button onClick={() => handleDelete()} class="btn btn-outline btn-error btn-xs">Delete</button>

            <label for="my-modal-6" class="btn btn-outline  btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
