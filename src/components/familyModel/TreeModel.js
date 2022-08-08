import { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Image,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import AddMember from "../addFamilymember/AddMember";

const TreeModel = ({
  handleHide,
  show,
  node,
  handleUpdate,
  nodes,
  setNodes,
}) => {
  const [nodeData, setData] = useState(node);
  const [isAddMember, setmember] = useState(false);

  useEffect(() => {
    setData(node);
  }, [node]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...nodeData,
      [name]: value,
    });
  };
  const handlecancel = () => {
    setmember(false);
  };
  const handleAdd = (newMember) => {
    debugger;
    const id = Math.random().toString(36).substr(2, 9);
    const getNode = JSON.stringify(node);
    const parentNode = JSON.parse(getNode);
    const relation = newMember.relationShip;
    let newMemberData = {
      name: newMember.name,
      gender: newMember.gender,
      id: id,
      children: [],
      parents: [],
      profile: "",
      profileImage: newMember.profileImage,
      siblings: [],
      spouses: [],
    };
    const relationDetails = {
      id,
      type: relation == "spouses" ? "married" : "blood",
    };
    const totalNodes = [...nodes];

    if (relation == "spouses") {
      newMemberData.spouses = [{ id: parentNode.id, type: "married" }];
      parentNode[relation].push(relationDetails);
    } else if (relation == "children") {
      newMemberData.parents = [
        { id: parentNode.id, type: "blood" },
        { id: parentNode.spouses[0].id, type: "blood" },
      ];
      parentNode["children"].push(relationDetails);
      const index = totalNodes.findIndex(
        (profile) => profile.id == parentNode.spouses[0].id
      );
      console.log(newMemberData, index, "second");
      totalNodes[index]["children"].push(relationDetails);
    }

    const index = totalNodes.findIndex(
      (profile) => profile.id == parentNode.id
    );
    totalNodes[index] = parentNode;
    totalNodes.push(newMemberData);
    console.log(JSON.stringify(totalNodes), totalNodes, "totalnode");
    setNodes(totalNodes);
    setmember(false);
    handleHide();
  };
  return (
    <>
      <AddMember
        show={isAddMember}
        handleHide={handlecancel}
        parentNode={nodeData}
        handleAdd={handleAdd}
      />
      <Modal show={show} onHide={handleHide}>
        <ModalHeader closeButton>Details</ModalHeader>
        <ModalBody>
          <div className="w-100 d-flex justify-content-center">
            <div>
              <Image
                src={
                  nodeData.profileImage
                    ? node.profileImage
                    : node.gender.toLowerCase() == "male"
                    ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    : "https://www.kindpng.com/picc/m/24-248273_profile-image-png-of-a-woman-female-profile.png"
                }
                roundedCircle
                width="100px"
                height="100px"
              />
            </div>
          </div>
          <Form.Label htmlFor="">Name:</Form.Label>
          <FormControl
            value={nodeData.name}
            required
            name="name"
            onChange={handleChange}
          />
          <Form.Label htmlFor="" className="mt-2">
            Gender:
          </Form.Label>
          <FormControl
            value={nodeData.gender}
            name="gender"
            required
            onChange={handleChange}
          />
          <div className="mt-4 w-100 ">
            <div
              className="d-flex justify-content-between"
              style={{ width: "35%" }}
            >
              <div>
                <Button
                  onClick={() => {
                    setmember(true);
                  }}
                >
                  Add
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => {
                    handleUpdate(nodeData);
                  }}
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};
export default TreeModel;
