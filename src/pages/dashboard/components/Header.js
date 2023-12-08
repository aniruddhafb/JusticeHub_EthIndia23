import { Avatar, IconButton, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';

const Header = () => {
    const [anonAadhaar] = useAnonAadhaar();
    const router = useRouter();

    useEffect(() => {
        console.log("Anon Aadhaar status: ", anonAadhaar.status);
        (anonAadhaar?.status == "logged-out" && router.push("/") )
    }, [anonAadhaar]);
    return (
        <>
            <div className="hamIcon" id="hamIcon">
                <i className="fas fa-bars"></i>
            </div>
            <div className="logout">
                <Menu  style={{outline:"none"}}>
                    <MenuButton
                        as={IconButton}
                        icon={
                            <Stack direction='row'>
                                <Avatar style={{ height: "35px", width: "35px" }} src='https://bit.ly/broken-link' />
                            </Stack>
                        }
                    />
                    <MenuList>
                        {anonAadhaar.status == "logged-in" &&
                        <MenuItem style={{outline:"none"}}>
                            {/* Logout {" "} <IoIosLogOut/> */}
                            <LogInWithAnonAadhaar />
                        </MenuItem>
                        }
                    </MenuList>
                </Menu>
            </div>
        </>
    )
}

export default Header