import ModalAddNewUsers from "./ModalAddNewUsers";
import "./ManageUser.scss";
import { useState } from "react";

const ManageUser = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="manage-user-container">
      <div className="title">Manage Users</div>
      <div className="user-content">
        <button className="btn btn-info"
        onClick={() => setShowModal(true)}
        >Add new user
        </button>
       <div className="table-user-container">
         table User
      </div>
      <ModalAddNewUsers show={showModal} setShow ={setShowModal}/>
    </div>
    </div>
  );
};

export default ManageUser;
