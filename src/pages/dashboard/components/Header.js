import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormLabel, IconButton, Input, InputGroup, InputLeftAddon, Menu, MenuButton, MenuItem, MenuList, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { IoIosLogOut, IoIosNotifications } from "react-icons/io";
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { IoIosNotificationsOutline } from "react-icons/io";

import { PushAPI, CONSTANTS } from "@pushprotocol/restapi";
import { ethers } from "ethers";
import Image from 'next/image';


const Header = ({ signer }) => {

    const pushChannelAdress = "0xd0F431Fc2aC657cc8a64963aC108bea8cFB209B2";
    const [notifications, set_notifications] = useState([]);

    const pushFetch = async (signer) => {
        try {
            const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });
            const inboxNotifications = await userAlice.notification.list("INBOX");
            set_notifications(inboxNotifications)
            console.log({ inboxNotifications })
        } catch (error) {
            console.log("fetching error")
        }
    }

    const subcribeChannel = async () => {
        try {
            const userAlice = await PushAPI.initialize(signer, { env: CONSTANTS.ENV.STAGING });
            await userAlice.notification.subscribe(
                `eip155:11155111:${pushChannelAdress}`,
            );
        } catch (error) {
            console.log("subscribe error")
        }
    }

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
            <div className="logout" style={{ display: "flex", flexDirection: "row" }}>
                <>
                    <IoIosNotifications onClick={() => (pushFetch(signer), onOpen())} style={{ cursor: "pointer", fontSize: "33px", color: "white", marginRight: "10px", marginTop: "3px" }} />
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
                                {notifications?.map((noti) =>
                                <div style={{marginBottom:"5px", borderBottom:"0.2px solid gray"}}>
                                    <div style={{display:"flex"}}>
                                        <Image src={noti?.icon} height={100} width={100} style={{height:"50px", width:"50px"}} />
                                        <div>
                                        <Text style={{fontWeight:"bold"}}>{noti.notification.title}</Text>
                                        </div>
                                    </div>
                                        <Text>{noti.notification.body}</Text>
                                </div>
                                )}
                            </DrawerBody>

                            <DrawerFooter borderTopWidth='1px'>
                                <Button onClick={subcribeChannel} colorScheme='blue'>Opt-in for Notifications</Button>
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
                        style={{ background: "none" }}
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