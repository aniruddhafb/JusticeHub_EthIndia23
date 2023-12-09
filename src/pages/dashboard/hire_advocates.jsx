import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
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
                    
                    <Card maxW='md' style={{margin:"14px"}}>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar src='https://bit.ly/sage-adebayo' />

                                    <Box>
                                        <Heading size='sm'>Dr. Malik Sharma</Heading>
                                        <Text>senior Advocate, Karnataka</Text>
                                    </Box>
                                </Flex>
                                <Menu>
                                    <MenuButton
                                        as={IconButton}
                                        aria-label='Options'
                                        icon={<BsThreeDotsVertical />}
                                    />
                                    <MenuList>
                                        <MenuItem><a href='https://cache.careers360.mobi/media/presets/1016X880/articles/uploads/froala_editor/images/2022/4/8/1649401441388.png' target='_blank'>View Certification</a></MenuItem>
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </CardHeader>
                        <CardBody>
                            <Text>
                                Dr. Malik Sharma is a seasoned environmental lawyer known for his groundbreaking work in the field. Holding a Ph.D. in Environmental Law, he has been at the forefront of legal battles to protect our planet. Driven by a deep love for nature, he has successfully litigated against corporations violating environmental regulations and has played a crucial role in shaping policies for sustainable development.
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
                                <Link href="/dashboard/advocates/234">Visit Profile</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default hire_advocates