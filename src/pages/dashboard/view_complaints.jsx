import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { get_user_complaints } from "../../utils/user";
import { view_complaint } from "../../utils/contract_funcs";

const view_complaints = ({ walletAddress, signer, provider }) => {
  const [complaints, set_complaints] = useState([]);

  const fetch_complaints = async () => {
    const res = await get_user_complaints(walletAddress);
    const _complaints = [];
    if (!res) return;
    await Promise.all(
      res.message.map(async (e) => {
        const res = await view_complaint(signer, e.complaint);
        _complaints.push(res);
      })
    );
    console.log(_complaints);
    set_complaints(complaints);
  };

  useEffect(() => {
    fetch_complaints();
  }, []);

  return (
    <div className="dashboardContainer">
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />
      </Head>

      {/* side bar  */}
      <Sidebar />

      {/* main area  */}
      <div className="contentContainer" id="contentContainer">
        <div className="contentContainerHead">
          <Header signer={signer} />
          <div className="contentTitle">
            <h2>Your Complaints</h2>
          </div>
        </div>
        <div className="contentContainerBody contentContainerBodyFlex">
          {complaints?.map((e) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
            >
              <Stack>
                <CardBody>
                  <Heading size="md">{e?.name}</Heading>

                  <Text py="2">{e?.complaint}</Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Buy Latte
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default view_complaints;
