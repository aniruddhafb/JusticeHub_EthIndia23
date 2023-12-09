import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from './components/Sidebar';
import Header from './components/Header';

const view_complaints = () => {
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
                    <Header signer={signer}/>
                    <div className="contentTitle">
                        <h2>Your Complaints</h2>
                    </div>
                </div>
                <div className="contentContainerBody contentContainerBodyFlex">
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >
                        {/* <Image
                            objectFit='cover'
                            maxW={{ base: '100%', sm: '200px' }}
                            width={100}
                            src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='Caffe Latte'
                        /> */}

                        <Stack>
                            <CardBody>
                                <Heading size='md'>The perfect latte</Heading>

                                <Text py='2'>
                                    Caffè latte is a coffee beverage of Italian origin made with espresso
                                    and steamed milk.
                                </Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant='solid' colorScheme='blue'>
                                    Buy Latte
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default view_complaints