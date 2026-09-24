// import { useState } from "react";
import logo from "../../assets/logo.png";
import dashboard from "../../assets/dashboard.png"
import add_expence from "../../assets/add_expence.png"
import transactions from "../../assets/transactions.png"
import categories from "../../assets/categories.png"
import settings from "../../assets/settings.png"
import "./Sidebar.css";

function Sidebar({ setCurrentPage }) {

    const sidebarItems = [
        {
            icon: dashboard,
            name: "Dashboard"
        },
        {
            icon: add_expence,
            name: "Add Expense"
        },
        {
            icon: transactions,
            name: "Transactions"
        },
        {
            icon: categories,
            name: "Categories"
        },
        {
            icon: settings,
            name: "Settings"
        }
    ];
    return (
        <>
            <div className="mainSidebar">
                <div className="sidebarHead">
                    <img src={logo} alt="logo" />
                    <h3>Expense Manager</h3>
                </div>

                <div>
                    {
                        sidebarItems.map((item) => (
                            <div className="sidebarItems" key={item.name} onClick={() => setCurrentPage(item.name)}>

                                <img src={item.icon} alt={item.name} />
                                <h3>{item.name}</h3>

                            </div>
                        ))
                    }
                </div>


            </div>


        </>
    )

}

export default Sidebar;