import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const index = () => {
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
                        <h2>Dashboard</h2>
                    </div>
                </div>
                <div className="contentContainerBody contentContainerBodyFlex">
                    <div className="usersCountLive">
                        <div className="userCountIcon">
                            <i className="far fa-file"></i>
                        </div>
                        <div className="userCountStats">
                            <p>Fir's against you</p>
                            <h3>0</h3>
                        </div>
                    </div>
                    <div className="usersCountLive">
                        <div className="userCountIcon">
                            <i className="fas fa-money-bill"></i>
                        </div>
                        <div className="userCountStats">
                            <p>Pending Challans</p>
                            <h3>0</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index