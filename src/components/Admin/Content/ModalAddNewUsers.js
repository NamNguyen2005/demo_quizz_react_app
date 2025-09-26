import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import createUser from "../../../services/createUser";

const ModalAddNewUsers = (props) => {
  const { show, setShow } = props;
  const handleClose = () =>{
     setShow(false);
     setEmail("");
     setPassword("");
     setUsername("");
     setRole("User");
     setPreviewImage("");
     setImg("");
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("User");
  const [previewImage, setPreviewImage] = useState("");
  const [img, setImg] = useState("");
  const handleUploadImage = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImg(e.target.files[0]);
    }
  };
  // validate email on stackoverflows
  const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

  const handleSendApi = async () => {
    const isValidEmail = validateEmail(email)
    if(!isValidEmail){
        toast.error("Invalid email");
        return;
    }
    if(!password){
        toast.error("Invalid password");
        return;
    }
    // sumbit data
    let data = await createUser(email, password, username, role, img);
    console.log(">>> check res: ",data);
    if(data && data.EC === 0){
        toast.success(data.EM);
        handleClose();
    }
     if(data &&data.EC !== 0){
        toast.error(data.EM);
        handleClose();
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        backdrop="static"
        className="modal-add-new"
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW USER</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">UserName</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div>
              <div className="col-md-12 label-upload">
                <label className="form-label" htmlFor="upload">
                  <FcPlus />
                  Upload image
                </label>
                <input
                  type="file"
                  hidden
                  id="upload"
                  onChange={handleUploadImage}
                />
              </div>
              <div className="col-md-12 img-preview">
                {previewImage ? (
                  <img src={previewImage} alt="Preview" />
                ) : (
                  <span>Preview Image</span>
                )}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSendApi}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNewUsers;
