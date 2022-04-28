import React from 'react';
import Menu from '../Menu/Menu';
import { renderRoutes } from "react-router-config";

export const MainLayouts = (props) => {
  return (
    <div>
      <Menu />
      <div>{renderRoutes(props.route.routes)}</div>
    </div>
  
  )
}