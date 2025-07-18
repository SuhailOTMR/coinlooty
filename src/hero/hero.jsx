import React from 'react'
import Scroller from '../scroller/scroller'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
const Hero = () => {
    const starStyle = {
        color: "#FFA900",
        fontSize: "25px",
        marginTop: "3px",
        marginLeft: "5px"
    };

    return (
        <>
            <div style={{ width: "100vw", backgroundImage: `url('/hero.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="row">
                        <div className="col col-11 col-lg-8 mx-auto">
                            <div style={{ color: "white", paddingTop: "140px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", }}>
                                <div style={{ display: "flex", flexDirection: 'column', gap: "5px", width: "100%" }}>
                                    <h1 style={{
                                        color: "white",
                                        textAlign: "center",
                                        fontFamily: 'Montserrat, sans-serif',
                                        fontWeight: "bold"
                                    }}>
                                        <span style={{ color: "#FFA900" }}>Earn Rewards</span> By Sharing Your Opinion & Exploring New Apps
                                    </h1>

                                </div>
                            </div>
                        </div>
                        <div className="col col-10 col-lg-6 mx-auto" style={{ marginTop: "-5px" }}>
                            <p style={{ color: "white", textAlign: "center" }}>
                                Earn money by testing apps, games and taking surveys. Earn up to <b style={{ color: "#FFA900" }}>$50.40</b> per offer 494 available offers now. Get started today!
                            </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                            <button
                                className="btn"
                                style={{
                                    width: "200px",
                                    backgroundColor: "#FFA900",
                                    borderRadius: "20px",
                                    boxShadow: "0 4px 6px rgba(255, 169, 0, 0.25)",
                                    padding: "8px 0px",
                                    fontWeight: "600",
                                    border: "none"
                                }}
                            >
                                Sign UP
                            </button>

                        </div>
                    </div>
                </div>
                <Scroller />
            </div>



            <div className="container-fluid">
                <div className="row">
                    <div className="col col-11 mx-auto yo">

                        <div>
                            <span style={{ fontSize: "24px", fontWeight: "bold" }}>$60,000,000+</span>
                            <span>Paid Out to Users</span>
                        </div>

                        <div>
                            <span style={{ fontSize: "24px", fontWeight: "bold" }}>1M+</span>
                            <span>Active Users Worldwide</span>
                        </div>

                        <div>
                            <span style={{ fontSize: "24px", fontWeight: "bold" }}>4.6 EXCELLENT</span>
                            <span>
                                <FaStar style={starStyle} />
                                <FaStar style={starStyle} />
                                <FaStar style={starStyle} />
                                <FaStar style={starStyle} />
                                <FaStarHalfAlt style={starStyle} />
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" style={{ marginTop: "50px" }}>
                    <div className="col col-12 col-lg-6 mx-auto " style={{ height: "auto", padding: "10px", color: "white" }}>
                        <span >
                            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>1. Choose an offer</h3>
                        </span>
                        <p style={{ width: "90%", marginLeft: "20px" }}>
                            Take your pick from the tasks on the earn page. We list the best offers from companies who want to advertise their apps, surveys, and products.

                        </p>

                        <img src="/pandafinal.png" className="img-fluid yopanda" alt="..."
                            style={{
                                // 
                                borderRadius: "20px"
                            }}
                        ></img>
                        <span >
                            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold", marginTop: "12px" }}>2. Complete the offer</h3>
                        </span>
                        <p style={{ width: "90%", marginLeft: "20px" }}>
                            Most offers are very simple and have already earned money for thousands of people. Most offers take around 5-10 minutes to complete.

                        </p>
                        <span >
                            <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: "bold", marginTop: "12px" }}>3. Get paid</h3>
                        </span>
                        <p style={{ width: "90%", marginLeft: "20px" }}>
                            For each task you complete, you’ll be rewarded with coins: 1000 coins = $1,00. Cashout the coins and get your hands on your free cash!

                        </p>

                    </div>
                    <div
                        className="col col-12 col-lg-6 mx-auto content-wrapper second"
                        style={{

                            height: "auto",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px"
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }} >
                            <h2
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: "bold",
                                    width: "80%",
                                    margin: "10px auto 0px auto",
                                }}
                            >
                                WANT TO POCKET SOME QUICK CASH? FIND OUT{" "}
                                <span style={{ color: "#FFA900" }}>HOW HERE</span>
                            </h2>
                            <button
                                className="btn"
                                style={{
                                    padding: "10px 15px",
                                    backgroundColor: "#FFA900",
                                    color: "black",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                    width: "280px",
                                    borderRadius: "20px",
                                    margin: "20px auto",
                                }}
                            >
                                Start earning now
                            </button>
                        </div>

                        <img
                            src="/yoyo.png"
                            className="img-fluid pandaimg"
                            alt="..."
                            style={{
                                borderRadius: "20px",
                                marginTop: "20px",
                            }}
                        />
                    </div>


                </div>
            </div>

            <div className="col col-11 col-lg-5 mx-auto">
                <h2 style={{ color: "white", fontFamily: "Montserrat, sans-serif", textAlign: "center", marginTop: "30px", fontWeight: "bold" }}>

                    WE'RE THE ROP SPOT TO BOOST YOUR EARNING. <span style={{ color: "#FFA900" }}>DISCOVER WHY</span>
                </h2>

            </div>




            <div className="container" style={{ paddingTop: "30px" }}>
                <div className="row justify-content-center">
                    <div className="col-10 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <img
                            src="/zoo2.png"
                            className="img-fluid yopanda"
                            alt="..."
                            style={{ borderRadius: "20px" }}
                        />
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <img
                            src="/zoo3.png"
                            className="img-fluid yopanda"
                            alt="..."
                            style={{ borderRadius: "20px" }}
                        />
                    </div>
                    <div className="col-10 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                        <img
                            src="/zoo1.png"
                            className="img-fluid yopanda"
                            alt="..."
                            style={{ borderRadius: "20px" }}
                        />
                    </div>
                </div>
            </div>

            <div className="col col-11 col-lg-8 mx-auto">
                <h2 style={{ color: "white", fontFamily: "Montserrat, sans-serif", textAlign: "center", marginTop: "30px", fontWeight: "bold" }}>

                    EXCITING WAYS TO  <span style={{ color: "#FFA900" }}>MAKE MONEY!</span>
                </h2>

            </div>

            <div className="container" style={{ marginTop: "50px" }}>
                <div className="row">
                    <div className="col col-11 col-lg-3 mx-auto" style={{ height: "auto", backgroundColor: "#1E1E2E", borderRadius: "20px", marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ height: "10rem", width: "10rem", borderRadius: "50%", margin: "30px auto", backgroundImage: `url('/zoo4.png')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <span style={{ fontSize: "28px", fontWeight: "bold", color: "white", textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>Play & Win</span>
                        <p style={{ color: "#FFFFFF", textAlign: "center", width: "90%", margin: "6px auto" }}>
                            Play Games. Earn Cash. It’s that simple—try out exciting new games and get rewarded.
                        </p>
                        <h3 style={{ color: "#27FD6A", textAlign: "center", fontWeight: "bold" }}>$1.00-$120.00</h3>

                        <button
                            className="btn"
                            style={{
                                padding: "10px 0px",
                                borderRadius: "20px",
                                backgroundColor: "#FFA900",
                                border: "none",
                                color: "#000",
                                width: "220px",
                                display: "block",
                                margin: "0 auto 25px auto",
                                fontWeight: "bold"
                            }}
                        >
                            Start Playing & Earning
                        </button>


                    </div>




                    <div className="col col-11 col-lg-3 mx-auto" style={{ height: "auto", backgroundColor: "#1E1E2E", borderRadius: "20px", marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ height: "10rem", width: "10rem", borderRadius: "50%", margin: "30px auto", backgroundImage: `url('/zoo5.png')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <span style={{ fontSize: "28px", fontWeight: "bold", color: "white", textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>Complete offers</span>
                        <p style={{ color: "#FFFFFF", textAlign: "center", width: "90%", margin: "6px auto" }}>
                            Try New Apps. Get Paid Instantly. Making money has never been this easy.
                        </p>
                        <h3 style={{ color: "#27FD6A", textAlign: "center", fontWeight: "bold" }}>$1.00 - $75.00</h3>

                        <button
                            className="btn"
                            style={{
                                padding: "10px 0px",
                                borderRadius: "20px",
                                backgroundColor: "#FFA900",
                                border: "none",
                                color: "#000",
                                width: "220px",
                                display: "block",
                                margin: "0 auto 25px auto",
                                fontWeight: "bold"
                            }}
                        >
                            Start Playing & Earning
                        </button>


                    </div>


                    <div className="col col-11 col-lg-3 mx-auto" style={{ height: "auto", backgroundColor: "#1E1E2E", borderRadius: "20px", marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                        <div style={{ height: "10rem", width: "10rem", borderRadius: "50%", margin: "30px auto", backgroundImage: `url('/zoo6.png')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <span style={{ fontSize: "28px", fontWeight: "bold", color: "white", textAlign: "center", fontFamily: "Montserrat, sans-serif" }}>Join surveys</span>
                        <p style={{ color: "#FFFFFF", textAlign: "center", width: "90%", margin: "6px auto" }}>
                            Your Opinion Matters! Companies pay you to improve their products and services.
                        </p>
                        <h3 style={{ color: "#27FD6A", textAlign: "center", fontWeight: "bold" }}>$1.00</h3>

                        <button
                            className="btn"
                            style={{
                                padding: "10px 0px",
                                borderRadius: "20px",
                                backgroundColor: "#FFA900",
                                border: "none",
                                color: "#000",
                                width: "220px",
                                display: "block",
                                margin: "0 auto 25px auto",
                                fontWeight: "bold"
                            }}
                        >
                            Start Playing & Earning
                        </button>


                    </div>
                </div>


            </div>


            {/* <div className="col col-11 col-lg-8 mx-auto">
                <h2 style={{ color: "white", fontFamily: "Montserrat, sans-serif", textAlign: "center", marginTop: "60px", fontWeight: "bold" }}>

                    EXCITING REWARDS  <span style={{ color: "#FFA900" }}>YOU'II LOVE!</span>
                </h2>
                <p style={{ color: "white", textAlign: "center", marginTop: "-10px" }}>Chose your favorite way to get rewarded - from
                    popular gift card to instant Cashouts!</p>

            </div>

            <div className="container">
                <div className="row">
                    <div
                        className="col col-11 col-lg-7"
                        style={{
                            backgroundImage: `url('/zoo7.png')`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            margin: "20px auto",
                            height:"100%",
                            width:"auto"
                            
                        }}
                    >
                    </div>
                </div>
            </div> */}



            <div className="container">
                <div className="row">
                    <div className="col col-11 col-lg-8 mx-auto text-center">
                        <h2
                            style={{
                                color: "white",
                                fontFamily: "Montserrat, sans-serif",
                                marginTop: "60px",
                                fontWeight: "bold",
                            }}
                        >
                            EXCITING REWARDS <span style={{ color: "#FFA900" }}>YOU'LL LOVE!</span>
                        </h2>
                        <p style={{ color: "white", marginTop: "-10px" }}>
                            Choose your favorite way to get rewarded – from popular gift cards to instant Cashouts!
                        </p>
                    </div>

                    <div className="col col-11 col-lg-11 mx-auto"
                        style={{
                            backgroundImage: `url('/zoo7.png')`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            marginTop: "-80px",
                            height: "700px",
                        }}
                    ></div>
                </div>
            </div>










        </>
    )
}

export default Hero