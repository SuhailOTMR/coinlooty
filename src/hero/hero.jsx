import React from 'react'
import Scroller from '../scroller/scroller'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import Carousel from '../controll/ControlableSlide';
const Hero = () => {
    const starStyle = {
        color: "#FFA900",
        fontSize: "25px",
        marginTop: "3px",
        marginLeft: "5px"
    };


    const cards = [
        'zoo100.png',
        'zoo101.png',
        'zoo102.png',
        'zoo103.png',
        'zoo104.png',
        'zoo105.png',
        'zoo106.png',
        'zoo107.png',
        'zoo108.png',
        'soo101.png',
        'soo2003.png',
        'soo2002.png',




    ]
    const card1 = [
        'zoo109.png',
        'zoo110.png',
        'zoo111.png',
        'zoo112.png',
        'zoo113.png',
        'zoo114.png',
        'zoo115.png',
        'zoo116.png',
        'zoo117.png',


    ]

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
            <div className="container" style={{ marginTop: "50px" }}>
                <h3
                    style={{
                        color: "white",
                        fontFamily: "Montserrat, sans-serif",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    INTEGRATED <span style={{ color: "#FFA900" }}>PARTNER</span>
                </h3>

                <div className="container py-4">
                    <div className="row justify-content-center g-3">
                        {cards.map((imageName, i) => (
                            <div
                                key={i}
                                className="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 customway"

                            >
                                <img src={`/${imageName}`} alt="" style={{ width: "90%", margin: "auto" }} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container" style={{ margin: "20px auto" }}>

                <h3
                    style={{
                        color: "white",
                        fontFamily: "Montserrat, sans-serif",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    CASHOUT <span style={{ color: "#FFA900" }}>VIA</span>
                </h3>

                <div className="row youCard" style={{ marginTop: "20px" }}>
                    {card1.map((img, index) => {
                        return (
                            <div key={index} className="col col-4 col-lg-1 mx-auto customLogocards" style={{ height: "60px" }}>
                                <img src={`/${img}`} alt="" style={{ width: "100px", height: "auto", margin: "auto" }} />
                            </div>
                        );
                    })}
                </div>
                <div className="col col-12 col-lg-11" style={{ margin: "90px auto" }}>
                    <img src="/zoo700.png" class="img-fluid" alt="..." style={{ width: "100%" }}></img>
                </div>
            </div>
            {/*  */}

            <Carousel />

            {/*  */}



            <div className="container-fluid" style={{ padding: "30px 20px", backgroundImage: `url('zoo2000.png')`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="row">
                    <div className="col col-12 col-lg-5 mx-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src="/zoo2001.png" class="img-fluid" alt="..."></img>
                    </div>
                    <div className="col col-12 col-lg-7 mx-auto" style={{ display: "flex", justifyContent: "center", flexDirection: "column", gap: "10px" }}>
                        <h3 style={{ fontFamily: "Montserrat, sans-serif", color: "white", fontWeight: "bold" }} className='footPara'>Join the community</h3>
                        <p style={{ color: "white", width: "80%" }} className='footPara1'>When you sign up for Freecash, you join a community of millions of people who choose to make money online. This amazing community can help you to complete the offers fast and earn more money.
                            In this video, one of our community members shares how to get started on Freecash now.</p>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="container-fluid text-white py-5" style={{ backgroundColor: "transparent", minHeight: "300px", position: "relative" }}>
                <div className="row">
                    {/* Logo and Description */}
                    <div className="col-12 col-lg-4 mb-4 d-flex flex-column gap-3" style={{ paddingLeft: "30px" }}>
                        <img src="/logo.png" alt="Coin Looty Logo" className="img-fluid" style={{ maxWidth: "300px" }} />

                        <p style={{ maxWidth: "90%" }}>
                            Coin Looty is an online reward website for <span style={{ color: "#FFA900" }}>new generation</span> where you can start earning online today <span style={{ color: "#FFA900" }}>and turn your opinions</span> into cash.
                        </p>

                        {/* Icons Row */}
                        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>

                            <div className="d-flex flex-wrap align-items-center gap-2" style={{ marginTop: "-20px" }}>
                                <a href="">
                                    <img
                                        src='/zoo1000.png'
                                        className="img-fluid"
                                        style={{ width: "50px" }}
                                    />
                                </a>
                            </div>
                            <div className="d-flex flex-wrap align-items-center gap-2" style={{ marginTop: "-20px" }}>
                                <a href="">
                                    <img
                                        src='/zoo1001.png'
                                        className="img-fluid"
                                        style={{ width: "50px" }}
                                    />
                                </a>
                            </div>
                            <div className="d-flex flex-wrap align-items-center gap-2" style={{ marginTop: "-20px" }}>
                                <a href="">
                                    <img
                                        src='/zoo1002.png'
                                        className="img-fluid"
                                        style={{ width: "50px" }}
                                    />
                                </a>
                            </div>
                            <div className="d-flex flex-wrap align-items-center gap-2" style={{ marginTop: "-20px" }}>
                                <a href="">
                                    <img
                                        src='/zoo1003.png'
                                        className="img-fluid"
                                        style={{ width: "50px" }}
                                    />
                                </a>
                            </div>
                            <div className="d-flex flex-wrap align-items-center gap-2" style={{ marginTop: "-20px" }}>
                                <a href="">
                                    <img
                                        src='/zoo1004.png'
                                        className="img-fluid"
                                        style={{ width: "50px" }}
                                    />
                                </a>
                            </div>

                        </div>
                        <p style={{ color: "white", width: "70%", fontWeight: "bold", textAlign: "center" }}>Copyright © 2025 CoinLooty. All Rights Reserved.</p>
                    </div>
                    <div className="col-12 col-lg-8 d-flex flex-wrap justify-content-between align-items-start">
                        <div
                            className="mb-3"
                            style={{
                                flex: "0 0 18%",
                                minWidth: "150px",

                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "left"
                            }}
                        >
                            <div style={{ color: "white" }}>
                                <div style={{ width: "auto" }}>
                                    <h3 style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>Coinlooty
                                    </h3>
                                    <hr style={{ height: "4px", width: "50%", backgroundColor: "white", marginTop: "-3px" }} />

                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", }}>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Daily Bonus</a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Wallet / My Rewards
                                    </a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>How it Works
                                    </a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Refer & Earn
                                    </a>
                                </div>


                            </div>





                        </div>

                        {/* <div
                            className="mb-3"
                            style={{
                                flex: "0 0 18%",
                                minWidth: "150px",

                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "center"
                            }}
                        >
                            <div style={{ color: "white" }}>
                                <div style={{ color: "white" }}>
                                    <div style={{ width: "auto" }}>
                                        <h3 style={{ color: "white", fontFamily: "Montserrat, sans-serif", textAlign: "center", fontWeight: "bold" }}>Services</h3>
                                        <hr style={{ height: "4px", width: "50%", backgroundColor: "white", marginTop: "-3px", marginLeft: "10px" }} />

                                    </div>
                                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", }}>
                                        <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none", marginLeft: "-30px" }}>Monetize</a>

                                        <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none", marginLeft: "-30px" }}>Advertise</a>
                                    </div>

                                </div>

                            </div>
                        </div> */}

                        <div
                            className="mb-3"
                            style={{
                                flex: "0 0 18%",
                                minWidth: "150px",

                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "left"
                            }}
                        >
                            <div style={{ color: "white" }}>
                                <div style={{ width: "auto" }}>
                                    <h3 style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>Support
                                    </h3>
                                    <hr style={{ height: "4px", width: "50%", backgroundColor: "white", marginTop: "-3px" }} />

                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", }}>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Help Center/FAQ
                                    </a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Live chat</a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Submit a Ticket
                                    </a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Email Support
                                    </a>
                                </div>


                            </div>
                        </div>

                        <div
                            className="mb-3"
                            style={{
                                flex: "0 0 18%",
                                minWidth: "150px",

                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "left"
                            }}
                        >
                            <div style={{ color: "white" }}>
                                <div style={{ width: "auto" }}>
                                    <h3 style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>Legal</h3>
                                    <hr style={{ height: "4px", width: "50%", backgroundColor: "white", marginTop: "-3px" }} />

                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", }}>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Privacy Policy
                                    </a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Terms & Conditions
                                    </a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Disclaimer
                                    </a>
                                </div>


                            </div>
                        </div>
                        <div
                            className="mb-3"
                            style={{
                                flex: "0 0 18%",
                                minWidth: "150px",

                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "left"
                            }}
                        >
                            <div style={{ color: "white" }}>
                                <div style={{ width: "auto" }}>
                                    <h3 style={{ color: "white", fontFamily: "Montserrat, sans-serif", fontWeight: "bold" }}>Company</h3>
                                    <hr style={{ height: "4px", width: "50%", backgroundColor: "white", marginTop: "-3px" }} />

                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: "10px", }}>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>About Us</a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Team</a>
                                    <a href="#" style={{ fontWeight: "bold", color: "white", textDecoration: "none" }}>Career</a>
                                </div>


                            </div>
                        </div>

                        {/* <div
                            className="mb-3"
                            style={{
                                flex: "0 0 18%",
                                minWidth: "150px",

                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "left"
                            }}
                        >
                            <div style={{ color: "white" }}>
                                


                                <img src="/googleplay.png" alt="" style={{width:"100%",margin:"10px auto"}}/>
                                <img src="/appstore.png" alt="" style={{width:"100%",margin:"10px auto"}}/>


                            </div>
                        </div> */}


                        <div
                            className="mb-3"
                            style={{
                                flex: "0 0 18%",
                                minWidth: "150px",
                                padding: "10px",
                                borderRadius: "8px",
                                textAlign: "left"
                            }}
                        >
                            <div style={{ color: "white", display: "flex", flexDirection: "column", gap: "10px" }}>
                                <img
                                    src="/newgoogleplay.webp"
                                    alt="Google Play"
                                    style={{ maxWidth: "160px", width: "100%", height: "auto" }}
                                />
                                <img
                                    src="/appstore.png"
                                    alt="App Store"
                                    style={{ maxWidth: "160px", width: "100%", height: "auto" }}
                                />
                            </div>
                        </div>


                    </div>

                    <hr style={{ height: "3px", width: "90vw", backgroundColor: "white", margin: "auto" }} />
                    <p style={{ color: "white", width: "90%", margin: "10px auto" }}>When you access our sites, services, or tools, we and our authorized partners may use cookies to store information, enhancing your experience with greater speed, security, and personalized marketing.</p>
                </div>


            </div>































        </>
    )
}

export default Hero
