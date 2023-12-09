import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, IconButton, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, Stack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { FaPlus } from "react-icons/fa";
import { IoIosLogOut, IoIosNotifications } from "react-icons/io";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { IoIosNotificationsOutline } from "react-icons/io";


const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()

    const [anonAadhaar] = useAnonAadhaar();
    const router = useRouter();

    useEffect(() => {
        console.log("Anon Aadhaar status: ", anonAadhaar.status);
        (anonAadhaar?.status == "logged-out" && router.push("/"))
    }, [anonAadhaar]);
    return (
        <>
            <div className="hamIcon" id="hamIcon">
                <i className="fas fa-bars"></i>
            </div>
            <div className="logout" style={{display:"flex", flexDirection:"row"}}>
                <>
                    <IoIosNotifications onClick={onOpen} style={{ cursor:"pointer", fontSize: "33px", color:"white", marginRight:"10px", marginTop:"3px" }} />
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        initialFocusRef={firstField}
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader borderBottomWidth='1px'>
                                Notifications
                            </DrawerHeader>

                            <DrawerBody>
                            </DrawerBody>

                            <DrawerFooter borderTopWidth='1px'>
                                <Button colorScheme='blue'>Opt-in for Notifications</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </>

                <Menu style={{ outline: "none" }}>
                    <MenuButton
                        as={IconButton}
                        icon={
                            <Stack direction='row'>
                                <Avatar style={{ height: "35px", width: "35px" }} src='https://bit.ly/broken-link' />
                            </Stack>
                        }
                        style={{background:"none"}}
                    />
                    <MenuList>
                        {anonAadhaar.status == "logged-in" &&
                            <MenuItem style={{ outline: "none" }}>
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