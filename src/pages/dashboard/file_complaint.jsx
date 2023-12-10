import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Input, Select, Stack, Text, Textarea } from "@chakra-ui/react";
import { upload_fir } from "../../utils/contract_funcs";
import { useStorage } from "@thirdweb-dev/react";

const file_complaint = ({ provider, signer, walletAddress }) => {
  const [data, set_data] = useState({
    name: "",
    contact_num: "",
    complaint_against: "",
    address: "",
    email: "",
    complaint: "",
    evidence: "",
  });

  const handle_change = (e) => {
    set_data({ ...data, [e.target.name]: e.target.value });
  };

  const storage = useStorage();

  const handle_submit = async () => {
    console.log(data);
    const res = await storage?.upload(data.evidence);
    const new_data = { ...data, evidence: res };
    upload_fir(signer, new_data, walletAddress);
  };

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
            <h2>File Complaint</h2>
          </div>
        </div>
        <div className="contentContainerBody contentContainerBodyFlex">
          <Stack
            spacing={[3, 3]}
            direction={["column"]}
            style={{
              background: "white",
              padding: "40px",
              borderRadius: "6px",
            }}
          >
            <Text mb="8px">
              Fill the form to complete your complaint filing proccess
            </Text>

            <Text mb="-8px">your full name *</Text>
            <Input
              name="name"
              onChange={handle_change}
              placeholder="Your Name"
            />
            <Text mb="-8px">Your Contact No. *</Text>
            <Input
              name="contact_num"
              type="number"
              onChange={handle_change}
              placeholder="Your Contact"
            />
            <Text mb="-8px">Your Address *</Text>
            <Input
              name="address"
              onChange={handle_change}
              placeholder="Your Address"
            />
            <Text mb="-8px">Your Email *</Text>
            <Input
              name="email"
              type="email"
              onChange={handle_change}
              placeholder="Your Address"
            />
            <Text mb="-8px">Complaint Against</Text>
            <Input
              name="complaint_against"
              type="text"
              onChange={handle_change}
              placeholder="Name of that person"
            />

            <Text mb="-8px">your complaint in detail *</Text>
            <Textarea
              name="complaint"
              // value={value}
              onChange={handle_change}
              placeholder="Describe your complaint"
              size="sm"
            />

            <Text mb="-8px">upload your evidences (optional)</Text>
            <Input
              type="file"
              onChange={(e) =>
                set_data({ ...data, evidence: e.target.files[0] })
              }
            />
            <button onClick={handle_submit}>Submit</button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default file_complaint;
