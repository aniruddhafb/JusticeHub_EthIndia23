import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className="fixedNavigation" id="fixedNavigation">
            <div className="fixedNavigationHead">
                <Link href="/"><h2>JusticeHub</h2></Link>
            </div>
            <div className="fixedNavigationBody">
                <div className="dashboardComponents">
                    <Link href="/dashboard"><i className="fas fa-tachometer-alt"></i> Dashboard</Link>
                </div>
                <div className="dashboardComponents">
                    <Link href="/dashboard/file_complaint"><i className="fas fa-level-up-alt"></i> File Complaint</Link>
                </div>
                <div className="dashboardComponents">
                    <Link href="/dashboard/view_complaints"><i className="far fa-file"></i> View Complaints</Link>
                </div>
                <div className="dashboardComponents">
                    <Link href="/dashboard/search_firs"><i className="fas fa-level-up-alt"></i> Find Fir's</Link>
                </div>
                <div className="dashboardComponents">
                    <Link href="/dashboard/hire_advocates"><i className="fas fa-users"></i> Find Advocates</Link>
                </div>
                <div className="dashboardComponents">
                    <Link href="/dashboard/view_challans"><i className="far fa-file"></i> Your Challans</Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar