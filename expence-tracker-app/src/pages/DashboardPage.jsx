import { useState } from "react";

import food from "../assets/food.png";
import travel from "../assets/travel.png";
import tution from "../assets/tution.png";
import entertainment from "../assets/entertainment.png";

import TransactionsTable from "./components/TarnsactionsTable"

import "./DashboardPage.css"


function DashboardPage({ expenses }) {

    const [categories, setCategories] = useState([
        {
            id: 1,
            category: "Food & Dining",
            amount: "₹2,450.00",
            stat: "+4.5% from last month",
            icon: food
        },
        {
            id: 2,
            category: "Travel",
            amount: "₹3,200.00",
            stat: "₹150 pending",
            icon: travel

        },
        {
            id: 3,
            category: "Tuition & Fees",
            amount: "₹1,245.50",
            stat: "8% increase this week",
            icon: tution

        },
        {
            id: 4,
            category: "Entertainment",
            amount: "₹1,500.00",
            stat: "8% increase this week",
            icon: entertainment

        }
    ]);

    const monthlyTrends = [
        {
            id: 1,
            month: "JAN",
            height: "111px"
        },
        {
            id: 2,
            month: "FEB",
            height: "148px"
        },
        {
            id: 3,
            month: "MAR",
            height: "210px"
        },
        {
            id: 4,
            month: "APR",
            height: "128px"
        },
        {
            id: 5,
            month: "MAY",
            height: "193px"
        },
        {
            id: 6,
            month: "JUN",
            height: "161px"
        },
        {
            id: 7,
            month: "JUL",
            height: "135px"
        },
        {
            id: 8,
            month: "AUG",
            height: "180px"
        },
        {
            id: 9,
            month: "SEP",
            height: "92px"
        },
        {
            id: 10,
            month: "OCT",
            height: "143px"
        },
        {
            id: 11,
            month: "NOV",
            height: "170px"
        },
        {
            id: 12,
            month: "DEC",
            height: "127px"
        }


    ]


    return (
        <>
            <div className="categoryItems" >

                {
                    categories.map((category) => (
                        <div key={category.id} className="categoryCard">

                            <div>
                                <h3>{category.category}</h3>
                                <img
                                    src={category.icon}
                                    alt={category.category}
                                />
                            </div>

                            <h2>{category.amount}</h2>

                            <p>{category.stat}</p>

                        </div>
                    ))
                }
            </div>
            <div className="monthly-spend">

                <div className="heading">
                    <p>Monthly Spending Trends</p>
                    <div>Last Year</div>
                </div>

                <div className="mainDiv">
                    <div className="eachMonth">
                        <div className="monthName">
                            {
                                monthlyTrends.map((monthlyTrend) => (
                                    <div key={monthlyTrend.id} >
                                        <div style={{ height: monthlyTrend.height, width: "72px", backgroundColor: "rgb(230, 235, 242)" }}></div>
                                        {monthlyTrend.month}
                                    </div>


                                ))
                            }

                        </div>


                    </div>
                </div>

            </div>

            <div className="recent-transactions">

                <div className="heading">
                    <p>Recent Transactions</p>
                    <h4>View All</h4>
                </div>

                <TransactionsTable expenses={expenses} />

            </div>
        </>
    )
}

export default DashboardPage;





