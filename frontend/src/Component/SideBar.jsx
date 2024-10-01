import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar = (isVisible) => {
    return (
        <Sidebar className=''>
            <Menu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Documentation </MenuItem>
            </Menu>
        </Sidebar >
    )
}

export default SideBar