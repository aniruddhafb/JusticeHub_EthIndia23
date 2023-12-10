import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from 'react';
import Link from 'next/link';

const BtnModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [anonAadhaar] = useAnonAadhaar();
    const [login, rediretLogin] = useState(false);

    useEffect(() => {
        console.log("Anon Aadhaar status: ", anonAadhaar.status);
        (anonAadhaar?.status == "logged-in" && rediretLogin(true))
    }, [anonAadhaar]);
    return (
        <>
            {anonAadhaar.status == "logged-in" ?
                <Link href="/dashboard"><Button>Get Started</Button></Link>
                :
                <Button onClick={onOpen}>Get Started</Button>
            }

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                {login == false ?
                    <ModalContent>
                        <ModalHeader>
                            {anonAadhaar?.status == "logging-in" ?
                           "Please wait it might take upto 30 second"
                           :
                            "Get Started On JusticeHub"
                        }
                        </ModalHeader>
                        {anonAadhaar?.status != "logging-in" &&
                        <ModalCloseButton />
                    }
                        <ModalBody pb={2}>
                            <FormControl>
                                <FormLabel>Full Name (optional)</FormLabel>
                                <Input ref={initialRef} placeholder='Your Good Name' />
                            </FormControl>
                            <Text pt={6}>Note - When you continue to login make sure to <a href='https://anon-aadhaar-documentation.vercel.app/assets/files/signed-34028a7a5557dbba054b805b6ee6ba79.pdf' target='_blank' style={{ color: "blue" }}>download</a> dummy masked adhaar card and use password test123 for successful download and login.</Text>
                            <Text>PS the adhaar verification can take upto 30 seconds, patience is appretiated :)</Text>
                        </ModalBody>

                        <ModalFooter>
                            {/* <Button colorScheme='blue' mr={3}>
                            Next
                        </Button> */}
                            <LogInWithAnonAadhaar />
                        </ModalFooter>
                    </ModalContent>
                    :
                    <ModalContent>
                        <ModalHeader>Verified Successfully!</ModalHeader>
                        <ModalHeader>Continue to our dashboard to explore JusticeHub!</ModalHeader>
                        <ModalCloseButton />
                        <ModalFooter>
                            <Link href="/dashboard">
                                <Button colorScheme='blue' mr={3}>
                                    Continue
                                </Button>
                            </Link>
                        </ModalFooter>
                    </ModalContent>
                }
            </Modal>
        </>
    )
}

export default BtnModal