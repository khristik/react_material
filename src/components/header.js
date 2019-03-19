import React from 'react'
import AppBar from 'material-ui/AppBar';
import { teal500, grey50 } from 'material-ui/styles/colors'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const RightMenu = () => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <MoreVertIcon color={grey50} />
      </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

export const AppHeader = (props) => {
  return (
    <h1>
      <AppBar
        title="Material UI App"
        style={{ background: teal500 }}
        iconElementRight={<RightMenu/>}
        onLeftIconButtonClick={() => props.onLeftIconClick()}
      />
    </h1>
  )
};