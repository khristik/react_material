import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export const AppDrawer = (props) => {
  return (
    <Drawer
      open={props.open}
      docked={false}
      onRequestChange={open => props.onToggle(open)}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </Drawer>
  )
};