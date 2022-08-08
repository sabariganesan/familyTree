import React, { useMemo, useState, useCallback, useEffect } from 'react';
import type { Node, ExtNode } from 'relatives-tree/lib/types';
import treePackage from 'relatives-tree/package.json';
import ReactFamilyTree from 'react-family-tree';
import { SourceSelect } from '../SourceSelect/SourceSelect';
import { PinchZoomPan } from '../PinchZoomPan/PinchZoomPan';
import { FamilyNode } from '../FamilyNode/FamilyNode';
import { NodeDetails } from '../NodeDetails/NodeDetails';
import { NODE_WIDTH, NODE_HEIGHT, SOURCES, DEFAULT_SOURCE } from '../const';
import { getNodeStyle } from './utils';
import testData from "../average.json"

import css from './App.module.css';
import TreeModel from '../familyModel/TreeModel';

export default React.memo(
  function Main(props:any) {
    const [source, setSource] = useState(DEFAULT_SOURCE);
    const data = props.nodes
    const [nodes, setNodes] = useState<any>([]);
    const [show,setShow] = useState<Boolean>(false)

    const firstNodeId = useMemo(() => nodes[0]?.id, [nodes]);
    const [rootId, setRootId] = useState("");

    const [selectId, setSelectId] = useState<string>();
    const [hoverId, setHoverId] = useState<string>();

  //   const resetRootHandler = useCallback(() => {
  //     alert(firstNodeId)
  //   setRootId(firstNodeId)
  // }, [firstNodeId]);

    useEffect(()=>{
       setNodes(data)
       setRootId(data[0]?.id)
    },[data])

    // useEffect(()=>{
    //   alert(firstNodeId)
    //   setRootId(firstNodeId)
    // },[firstNodeId])


    const changeSourceHandler = useCallback(
      (value: string, nodes: readonly Readonly<Node>[]) => {
        setRootId(nodes[0].id);
        setNodes(nodes);
        setSource(value);
        setSelectId(undefined);
        setHoverId(undefined);
      },
      [],
    );

    const selected = useMemo(() => (
      nodes.find((item:any) => item.id === selectId)
    ), [nodes, selectId]);

    const handleHide=()=>{
      setShow(false)
    }

    const handleUpdate=(nodeData:any)=>{
      const {familyNode,setFamilyTree} = props
     const familyProfile = [...familyNode.profileDetails]
     const index = familyProfile.findIndex((profile:any)=>(profile.profileId==nodeData.id))
     familyProfile[index].name = nodeData.name;
     familyProfile[index].gender = nodeData.gender; 
     const updatedDetails = {
      ...familyNode,
      profileDetails:familyProfile
     }
     setFamilyTree(updatedDetails); 
     setShow(false)
    }

    return (
      <div className={css.root}>
        {/* <header className={css.header}>
          <h1 className={css.title}>
            FamilyTree demo
            <span className={css.version}>
              core: {treePackage.version}
            </span>
          </h1>

          <div>
            <label>Source: </label>
            <SourceSelect value={source} items={SOURCES} onChange={changeSourceHandler} />
          </div>

          <a href="https://github.com/SanichKotikov/react-family-tree-example">GitHub</a>
        </header> */}
        {nodes.length > 0 && (
                <div className={css.new}>

          <div  className={css.wrapper}>
            <ReactFamilyTree
              nodes={nodes}
              rootId={rootId}
              width={NODE_WIDTH}
              height={NODE_HEIGHT}
              className={css.tree}
              renderNode={(node: Readonly<ExtNode>) => (
                <FamilyNode
                  key={node.id}
                  node={node}
                  isRoot={node.id === rootId}
                  isHover={node.id === hoverId}
                  onClick={setSelectId}
                  onSubClick={setRootId}
                  style={getNodeStyle(node)}
                  setShow={setShow}
                />
              )}
            />
          </div>
          </div>
        )}
        {/* {rootId !== firstNodeId && (
          <button className={css.reset} onClick={resetRootHandler}>
            Reset
          </button>
        )} */}
        {/* {selected && (
          <NodeDetails
            node={selected}
            className={css.details}
            onSelect={setSelectId}
            onHover={setHoverId}
            onClear={() => setHoverId(undefined)}
          />
        )} */}
        {selected && <TreeModel show={show} handleHide={handleHide}  node={selected} handleUpdate={handleUpdate} nodes={nodes} setNodes={props.setNodes} />}
      </div>
    );
  },
);
