import { useState } from "react";
import {
  Button,
  Dropdown,
  Form,
  FormControl,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";

const AddMember = ({ show, handleHide, parentNode, handleAdd }) => {
  const [member, setMembber] = useState({
    name: "",
    gender: "",
    phoneNumber: "",
    relationShip: "",
    profileImage: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMembber({
      ...member,
      [name]: value,
    });
  };

  const handleProfilePic = (e) => {
    const file = e.target.files[0];
    const bloburl = URL.createObjectURL(file);
    setMembber({
      ...member,
      profileImage: bloburl,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(member);
    setMembber({
      name: "",
      gender: "",
      phoneNumber: "",
      relationShip: "",
      profileImage: "",
    });
  };
  return (
    <Modal show={show} onHide={handleHide}>
      <ModalHeader closeButton>Add a family Member</ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit}>
          <Form.Label htmlFor="">Name:</Form.Label>
          <FormControl
            name="name"
            value={member.name}
            required
            onChange={handleChange}
          />
          <Form.Label htmlFor="" className="mt-2">
            Gender:
          </Form.Label>
          <FormControl
            name="gender"
            required
            value={member.gender}
            onChange={handleChange}
          />
          <Form.Label htmlFor="" className="mt-2">
            RelationShip:
          </Form.Label>
          <Form.Select
            name="relationShip"
            required
            value={member.relationShip}
            onChange={handleChange}
          >
            <option>select</option>
            <option value="spouses">Spouse</option>
            <option value="children">Child</option>
          </Form.Select>
          <Form.Label htmlFor="" className="mt-2">
            Phone Number:
          </Form.Label>
          <FormControl
            name="phoneNumber"
            value={member.phoneNumber}
            onChange={handleChange}
          />
          {/* <Form.Label htmlFor="" className="mt-2">
            choose profile pic
          </Form.Label>
          <div>
            <input type="file" onChange={handleProfilePic} />
          </div> */}
          <div className="mt-4 w-100 ">
            <Button type="submit">Add</Button>
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};
export default AddMember;
