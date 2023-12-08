import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const hire_advocates = () => {
    return (
        <div className="dashboardContainer">
            <Head>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
            </Head>

            {/* side bar  */}
            <Sidebar />

            {/* main area  */}
            <div className="contentContainer" id="contentContainer">
            <div className="contentContainerHead">
                    <Header />
                    <div className="contentTitle">
                        <h2>Consult Advocates</h2>
                    </div>
                </div>
                <div className="contentContainerBody contentContainerBodyFlex">
                    <Card maxW='md'>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />

                                    <Box>
                                        <Heading size='sm'>Segun Adebayo</Heading>
                                        <Text>Creator, Chakra UI</Text>
                                    </Box>
                                </Flex>
                                <IconButton
                                    variant='ghost'
                                    colorScheme='gray'
                                    aria-label='See menu'
                                    icon={<BsThreeDotsVertical />}
                                />
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                With Chakra UI, I wanted to sync the speed of development with the speed
                                of design. I wanted the developer to be just as excited as the designer to
                                create a screen.
                            </Text>
                        </CardBody>
                        <CardFooter
                            justify='space-between'
                            flexWrap='wrap'
                            sx={{
                                '& > button': {
                                    minW: '136px',
                                },
                            }}
                        >
                            <Button flex='1' variant='ghost'>
                                Like
                            </Button>
                            <Button flex='1' variant='ghost'>
                                Comment
                            </Button>
                            <Button flex='1' variant='ghost'>
                                Share
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default hire_advocates