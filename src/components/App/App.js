import axios from "axios";
import { useEffect, useState } from "react";
import { getLocal, getParameterByName } from "../../helper";
import { dataLatest, newOne } from "../tree";
import Main from "./main";

function App() {
  const [treeStatus, setTreeStatus] = useState("success");
  const [familyTreeData, setFamilyTree] = useState(dataLatest);
  const [treeData, setTreeData] = useState([]);

  //formatedData
  function getNodeByRelationship(relationShip, mappingDetails, sourceNode) {
    if (mappingDetails) {
      let temp = mappingDetails.find((x) =>
        relationShip == "Spouse"
          ? (x.targetNode == sourceNode || x.sourceNode == sourceNode) &&
            x.relationShip == "Spouse"
          : x.targetNode == sourceNode && x.relationShip == relationShip
      );
      if (temp) {
        if (temp.targetNode == sourceNode) {
          return temp.sourceNode;
        } else {
          return temp.targetNode;
        }
      }
    }
    return null;
  }

  function formatData(dataLatest) {
    let tempData = [];
    if (dataLatest) {
      dataLatest.profileDetails.forEach((profile) => {
        let fatherNode = getNodeByRelationship(
          "Father",
          dataLatest.mappingDetails,
          profile.profileId
        );
        let motherNode = getNodeByRelationship(
          "Mother",
          dataLatest.mappingDetails,
          profile.profileId
        );
        let spouseNode = getNodeByRelationship(
          "Spouse",
          dataLatest.mappingDetails,
          profile.profileId
        );
        let parent = [];
        let sequence = [];
        if (fatherNode) {
          parent.push(fatherNode);
        }
        if (motherNode) {
          parent.push(motherNode);
        }
        if (spouseNode) {
          sequence.push(spouseNode);
        }
        tempData.push({
          profileId: profile.profileId,
          parentNodeId: parent,
          seqNodeId: sequence,
          name: profile.name,
          gender: profile.gender,
          nodeId: profile.profileId,
          relationShip: profile.relationShip,
          profileImage: profile.profileImage,
        });
      });
      console.log(tempData, "temo");
      let formatedData = [];
      for (const treeData of tempData) {
        let childList = [];
        const Spouse =
          treeData.seqNodeId?.length > 0
            ? treeData.seqNodeId.map((id) => {
                const spousedata = {
                  id,
                  type: "married",
                };
                return spousedata;
              })
            : [];
        const parent =
          treeData.parentNodeId?.length > 0
            ? treeData.parentNodeId.map((id) => {
                const parentData = {
                  id,
                  type: "blood",
                };
                return parentData;
              })
            : [];
        for (const tree of tempData) {
          if (tree.parentNodeId?.length > 0) {
            for (const parent of tree.parentNodeId) {
              const combinationData = {
                id: tree.profileId,
                parentId: parent,
                type: "blood",
              };
              childList.push(combinationData);
            }
          }
        }
        let treeReformatedData = {
          id: treeData.profileId,
          gender: treeData.gender,
          name: treeData.name,
          profile:
            "https://wikijay.com/wp-content/uploads/2021/10/vikatan_2021-05_88a3b08e-bf1e-4e46-9361-8a414c4c6a1a_60abbda05de13-min.jpg",

          spouses: Spouse,
          siblings: [],
          parents:parent ,
          children: childList.filter(
            (data) => data.parentId == treeData.profileId
          ),
          profileImage: treeData.profileImage,
        };
        formatedData.push(treeReformatedData);
      }
      console.log(formatedData, "tempformet");

      setTreeData(formatedData);
    }
  }

  //end

  const handleGetData = async (profileId, token) => {
    try {
      const response = await axios.get(
        "http://34.241.5.204:8010/api/mfamily/ft/" + profileId,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status == 200) {
        console.log("responsess", response.data.data.node);
        // setTreeStatus("success");
        const data = response.data.data.node;
        const formatting = data?.map((data) => {
          const format = {
            id: data.profileId,
            gender: data.gender,
            name: data.name,
            spouses: data.spouse
              ? data.spouse.map((val) => ({
                  id: val.profileId,
                  type: "married",
                }))
              : [],
            siblings: [],
            parents: data.parents
              ? data.parents.map((val) => ({
                  id: val.profileId,
                  type: "blood",
                }))
              : [],
            children: data.child
              ? data.child.map((val) => ({ id: val.profileId, type: "blood" }))
              : [],
            profileImage:
              "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/2/6/w1200X800/MK_Stalin_PTI.jpg",
          };

          return format;
        });
        console.log(formatting, "formatting");

        setTreeData(formatting);
      }
    } catch (error) {
      // setTreeStatus("error");
      console.log(error, "error");
    }
  };

  const localSetup = (token, id) => {
    localStorage.setItem("token", token);
    localStorage.setItem("profileId", id);
  };
  // const handleVerifyUser = async (token, id) => {
  //   const data = {
  //     profileId: id,
  //     deviceId: "",
  //   };

  //   try {
  //     const resp = await axios.post(
  //       "http://34.241.5.204:8010/api/muser/authToken/",
  //       data,
  //       {
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     if (resp.status == 200) {
  //       setTreeStatus("success");

  //       handleGetData();
  //     }
  //   } catch (error) {
  //     console.log(error, "error");
  //     setTreeStatus("error");
  //   }
  // };
  const handleIsverifiedUser = () => {
    const href = window.location.href;
    const token = getParameterByName("token", href);
    const profileId = getParameterByName("profileId", href);
    localSetup(token, profileId);
    // handleVerifyUser(token, profileId);
    handleGetData(profileId, token);
  };

  const renderTree = (type) => {
    switch (type) {
      case "loading":
        return <div>loading...</div>;
      case "error":
        return <div>Invalid user</div>;
      case "success":
        return (
          <div>
            <Main
              nodes={treeData}
              familyNode={familyTreeData}
              setFamilyTree={setFamilyTree}
              setNodes={setTreeData}
            />
          </div>
        );
      default:
        break;
    }
  };

  useEffect(() => {
    // handleIsverifiedUser();
    // handleVerifyUser();
    formatData(familyTreeData);
  }, [familyTreeData]);

  return renderTree(treeStatus);
}

export default App;
