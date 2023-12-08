import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { LogInWithAnonAadhaar, useAnonAadhaar } from "anon-aadhaar-react";
import { useEffect } from 'react';
import Link from 'next/link';

const BtnModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [anonAadhaar] = useAnonAadhaar();

    useEffect(() => {
        console.log("Anon Aadhaar status: ", anonAadhaar.status);
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
                <ModalContent>
                    <ModalHeader>Get Started On JusticeHub</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Full name</FormLabel>
                            <Input ref={initialRef} placeholder='Full name' />
                        </FormControl>
                        <FormControl pt={4}>
                            <FormLabel>State (optional)</FormLabel>
                            <Input ref={initialRef} placeholder='Maharashtra' />
                        </FormControl>
                        <FormControl pt={4}>
                            <FormLabel>Address (optional)</FormLabel>
                            <Input ref={initialRef} placeholder='Stree 5, lamhinton road' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        {/* <Button colorScheme='blue' mr={3}>
                            Next
                        </Button> */}
                        <LogInWithAnonAadhaar />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BtnModal