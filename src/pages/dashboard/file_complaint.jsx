import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Input, Select, Stack, Text, Textarea } from '@chakra-ui/react'

const file_complaint = () => {
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
                        <h2>File Complaint</h2>
                    </div>
                </div>
                <div className="contentContainerBody contentContainerBodyFlex">
                    <Stack spacing={[3, 3]} direction={['column']} style={{ background: "white", padding: "40px", borderRadius: "6px" }}>
                        <Text mb='8px'>Fill the form to complete your complaint filing proccess</Text>

                        <Text mb='-8px'>your full name *</Text>
                        <Input placeholder='Basic usage' />

                        <Text mb='-8px'>complaint against *</Text>
                        <Input placeholder='Enter person name' />

                        <Text mb='-8px'>your are an </Text>
                        <Select placeholder='Select option'>
                            <option value='Citizen' defaultValue={true}>Citizen</option>
                            <option value='Police'>Police</option>
                        </Select>

                        <Text mb='-8px'>your complaint in detail *</Text>
                        <Textarea
                            // value={value}
                            // onChange={handleInputChange}
                            placeholder='Here is a sample placeholder'
                            size='sm'
                        />

                        <Text mb='-8px'>upload your evidences (optional)</Text>
                        <Input
                        type='file'
                            // onChange={handleInputChange}
                        />
                    </Stack>
                </div>
            </div>
        </div>
    )
}

export default file_complaint