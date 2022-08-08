import React, { useCallback } from 'react';
import classNames from 'classnames';
import type { ExtNode } from 'relatives-tree/lib/types';
import css from './FamilyNode.module.css';

interface FamilyNodeProps {
  node: any;
  isRoot: boolean;
  isHover?: boolean;
  onClick: (id: string) => void;
  onSubClick: (id: string) => void;
  style?: React.CSSProperties;
  setShow:any
}

export const FamilyNode = React.memo(
  function FamilyNode({ node, isRoot, isHover, onClick, onSubClick, style,setShow }: FamilyNodeProps) {
    const clickHandler = useCallback(() => {
      setShow(true)
      onClick(node.id)
    }, [node.id, onClick]);
    const clickSubHandler = useCallback(() => onSubClick(node.id), [node.id, onSubClick]);

    return (
      <div className={css.root} style={style}>
        <div
          className={classNames(
            css.inner,
            css[node.gender],
            isRoot && css.isRoot,
            isHover && css.isHover,
          )}
          onClick={clickHandler}
        >
          <img src={node.profileImage ? node.profileImage : node.gender.toLowerCase() == "male" ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png":"https://www.kindpng.com/picc/m/24-248273_profile-image-png-of-a-woman-female-profile.png"} style={{height:"100%"}}/>
          {/* <div className={css.id}>{node.id}</div> */}
        </div>
        {node.hasSubTree && (
          <div
            className={classNames(css.sub, css[node.gender])}
            onClick={clickSubHandler}
          />
        )}
      </div>
    );
  },
);
