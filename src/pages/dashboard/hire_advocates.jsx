import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const hire_advocates = ({ signer }) => {
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
                    <Header signer={signer} />
                    <div className="contentTitle">
                        <h2>Consult Advocates</h2>
                    </div>
                </div>
                <div className="contentContainerBody contentContainerBodyFlex">

                    <Card maxW='md' style={{ margin: "14px" }}>
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
                                Live Chat
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card maxW='md' style={{ margin: "14px" }}>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar src='https://avatars0.githubusercontent.com/u/1500684?s=460&v=4' />

                                    <Box>
                                        <Heading size='sm'>Grace Thompson</Heading>
                                        <Text>Advocate, Dubai</Text>
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
                                Grace Thompson is a compassionate family law advocate who has devoted her career to helping families navigate the complexities of legal issues. With a background in social work and a law degree, Grace brings a unique perspective to her practice. She is known for her empathy and ability to guide clients through challenging times, ensuring that the best interests of children and families are at the forefront of every case.
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
                                Live Chat
                            </Button>
                        </CardFooter>
                    </Card>

                    <Card maxW='md' style={{ margin: "14px" }}>
                        <CardHeader>
                            <Flex spacing='4'>
                                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                    <Avatar src='https://miro.medium.com/v2/resize:fit:1000/1*tv9pIQPhwumDnYBfCoapYg.jpeg' />

                                    <Box>
                                        <Heading size='sm'>Elena Fernandez</Heading>
                                        <Text>senior Advocate, Mumbai</Text>
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
                            Elena Fernandez is a tireless advocate for immigrant rights, specializing in immigration law and policy. A first-generation immigrant herself, Elena understands the challenges faced by those seeking a better life. She has successfully lobbied for changes in immigration policies, and her pro bono work has earned her accolades for providing legal assistance to underserved immigrant communities.
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
                                Live Chat
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default hire_advocates