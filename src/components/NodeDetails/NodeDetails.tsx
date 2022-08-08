import React, { memo, useCallback, useState } from 'react';
import classNames from 'classnames';
import type { Node } from 'relatives-tree/lib/types';
import { Relations } from './Relations';
import css from './NodeDetails.module.css';
import { Button, Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Image from "react-bootstrap/Image";
import axios from 'axios';

interface NodeDetailsProps {
  node: any;
  className?: string;
  onSelect: (nodeId: string | undefined) => void;
  onHover: (nodeId: string) => void;
  onClear: () => void;
}

export const NodeDetails = memo(
  function NodeDetails({ node, className, ...props }: NodeDetailsProps) {
    const closeHandler = useCallback(() => props.onSelect(undefined), [props]);
    const [visible, setVisible] = useState(false);
    const [image, setImage] = useState("");
    const [data,setData]=useState(node)

    const handleClose = () => setVisible(false);
  const handleContinue = () => {
    setVisible(false);
  };





  function createPost() {
    const profileId = "3a878c85-bd47-4a42-8713-a0cbbaa21603";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhODc4Yzg1LWJkNDctNGE0Mi04NzEzLWEwY2JiYWEyMTYwMyIsImRza2V5IjoiMDVmODg4M2U4NDRlYmI5MyIsImlhdCI6MTY1OTMzMzAxMSwiZXhwIjoxNjYxOTI1MDExfQ.UjUQ3n2oTE78pk1pHbzlqEZQSKJvmIDa3tsYUAQVtCg";
   
    axios
      .post( "http://34.241.5.204:8010/api/mfamily/node/3a878c85-bd47-4a42-8713-a0cbbaa21603", {
        sourceNode: "3a878c85-bd47-4a42-8713-a0cbbaa21603",
        relationship: "spouse",
        name: "wife",
        mobileNumber: "+91-IN-9080961895",
  },{
        headers: {
          Accept: 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      });
  }

  function createPut() {
    const profileId = "3a878c85-bd47-4a42-8713-a0cbbaa21603";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjNhODc4Yzg1LWJkNDctNGE0Mi04NzEzLWEwY2JiYWEyMTYwMyIsImRza2V5IjoiMDVmODg4M2U4NDRlYmI5MyIsImlhdCI6MTY1OTMzMzAxMSwiZXhwIjoxNjYxOTI1MDExfQ.UjUQ3n2oTE78pk1pHbzlqEZQSKJvmIDa3tsYUAQVtCg";
   
    axios
      .put( "http://34.241.5.204:8010/api/mfamily/3a878c85-bd47-4a42-8713-a0cbbaa21603", {
        name: "queen",
        mobileNumber: "+91-IN-9080961865",
  },{
        headers: {
          Accept: 'application/json',
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      });
  }


  

  // const chooseImage = (event) => {
  //   const file = URL.createObjectURL(event.target.files[0]);

  //   const image = event.target.files;
  //   console.log("image", file);
  //   setImage(file);
  // };
    return (
      <section className={classNames(css.root, className)}>
        {/* <header className={css.header}>
          <h3 className={css.title}>{node.id}</h3>
          <button className={css.close} onClick={closeHandler}>&#10005;</button>
        </header> */}
        {/* <Relations {...props} title="Parents" items={node.parents} />
        <Relations {...props} title="Children" items={node.children} />
        <Relations {...props} title="Siblings" items={node.siblings} />
        <Relations {...props} title="Spouses" items={node.spouses} /> */}


        <div>
          <Modal
            show={true}
            onHide={closeHandler}
            style={{ left: "0%", width: "45%", margin: "2%" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>Person Details </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="w-100 d-flex justify-content-center ">
                <div>
                  <Image
                    src={node.profile}
                    roundedCircle
                    width="100px"
                    height="100px"
                  />
                </div>
              </div>
              <InputGroup className="mb-3 mt-4">
                <Form.Control
                  placeholder="Name"
                  aria-describedby="basic-addon2"
                  value={node.name}
                />
              </InputGroup>
              
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="MobileNumber"
                  aria-describedby="basic-addon2"
                  value={node.gender}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="RelationShip"
                  aria-describedby="basic-addon2"
                  value={node.id}
                />
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={closeHandler}>
                Close
              </Button>
              <Button variant="success" onClick={createPut}>
                Save Changes &#128396;
              </Button>
              <Button variant="warning" onClick={createPost}>
                Add a Member{" "}
                <img
                  src="https://cdn.iconscout.com/icon/free/png-256/add-person-1780869-1514184.png"
                  width={"20px"}
                />
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    
      </section>
    );
  },
);
