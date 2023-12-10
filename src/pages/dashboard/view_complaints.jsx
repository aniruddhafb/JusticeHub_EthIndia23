import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  IconButton,
  Input,
  Spinner,
  Stack,
  Text,
  useDisclosure,
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
  const [loading, set_loading] = useState(false);
  const [complaint, selected_complaint] = useState("");
  const [complaint_infor, set_complaint_info] = useState("");

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetch_complaints = async () => {
    set_loading(true);
    const res = await get_user_complaints(walletAddress);
    const _complaints = [];
    if (!res) return;
    await Promise.all(
      res.message.map(async (e) => {
        const res = await view_complaint(signer, e.complaint);
        console.log(res);
        _complaints.push(res);
      })
    );
    set_complaints(_complaints);
    set_loading(false);
  };

  const complaint_info = async (complaint_addr) => {
    console.log({ complaint_addr });
    const res = await view_complaint(signer, complaint_addr);
    console.log(res);
    set_complaint_info(res);
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
            <h2>View Complaints</h2>
          </div>
        </div>
        <div
          className="contentContainerBody contentContainerBodyFlex"
          style={{ flexDirection: "column" }}
        >
          <Stack
            spacing={[3, 3]}
            direction={["column"]}
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "6px",
              marginBottom: "30px",
            }}
          >
            <Text mb="8px">
              Search for fir's with registered fir number or person name
            </Text>
            <Input placeholder="search for fir" />
          </Stack>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              marginTop: "15px",
            }}
          >
            {complaints?.map((e) => {
              return (
                <Card
                  onClick={() => {
                    complaint_info(e.complaint_addr);
                  }}
                  BtnModal
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  style={{margin:"10px"}}
                >
                  <Stack>
                    <CardBody>
                      <Heading size="md">{e?.name}</Heading>

                      <Text py="2">{e?.complaint}</Text>
                    </CardBody>

                    <CardFooter>
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => handleClick(size)}
                        key={size}
                        m={4}
                      >
                        View
                      </Button>

                      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                        <DrawerOverlay />
                        <DrawerContent>
                          <DrawerCloseButton />
                          <DrawerHeader>{complaint_infor?.name}</DrawerHeader>
                          <DrawerBody>
                            <p>{complaint_infor?.complaint}</p>
                            <Text>
                              Evidences - 
                            </Text>
                          <Image
                            alt="nftPreview"
                            width={100}
                            height={100}
                            src={complaint_infor?.evidence?.replace(
                              "ipfs://",
                              "https://ipfs.io/ipfs/"
                            )}
                          ></Image>
                          <Button style={{margin:"8px"}}>
                            Cancel
                          </Button>
                          <Button style={{margin:"8px"}}>
                            Acknowledge
                          </Button>
                          </DrawerBody>
                        </DrawerContent>
                      </Drawer>
                    </CardFooter>
                  </Stack>
                </Card>
              );
            })}
            {complaints?.length <= 0 && !loading && (
              <Text>No complaints found!!</Text>
            )}
            {loading && <Spinner />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default view_complaints;
