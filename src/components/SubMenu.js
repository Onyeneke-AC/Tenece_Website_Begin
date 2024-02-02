import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 1rem;
  list-style: none;
  text-decoration: none;
  font-size: 11.8px;
  // border: 1px solid blue;

  &:hover {
    color: #DA251C;
    border-top: 1px solid #DA251C;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 3px;
`;

const DropdownLink = styled(Link)`
  background: #000;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 11.8px;
  transition:  all 0.8s ease;

  &:hover {
    color: #DA251C;
    cursor: pointer;
    border-top: 1px solid #DA251C;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;