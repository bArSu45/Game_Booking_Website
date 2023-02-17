import { Heading } from '@chakra-ui/react'
import React from 'react'
import style from "./Home.module.css"
export default function Home() {
    return (
        <div id={style.main_div}>
            <div>
                <div id={style.game1}>
                    <img src="./game2.png" alt="" />
                </div>
                <Heading id={style.playingGames}>PLAYING GAMES</Heading>
            </div>

            <div id={style.video}>
                <div>
                    <img src="https://www.animatedimages.org/data/media/157/animated-fishing-image-0057.gif" alt="" />
                </div>
                <div>
                    <img src="https://www.gifcen.com/wp-content/uploads/2022/02/punching-gif-7.gif" alt="" />
                </div>
                <div>
                    <img src="https://i.pinimg.com/originals/e3/1a/8d/e31a8d86b3b636462f2942b4ebd2279d.gif" alt="" />
                </div>
                <div>
                    <img src="https://i.gifer.com/JH27.gif" alt="" />
                </div>
            </div>

            <div id={style.location}>
                <h1>Cities in West Bengal</h1>
                <div id={style.loco_grid}>
                    <div className={style.location_desc}>
                        <div className={style.loco_img}>
                            <img src="https://www.freeiconspng.com/uploads/green-location-icons-17.png" alt="" />
                        </div>
                        <p>Baghajatin, Kolkata</p>
                    </div>
                    <div className={style.location_desc}>
                        <div className={style.loco_img}>
                            <img src="https://www.freeiconspng.com/uploads/green-location-icons-17.png" alt="" />
                        </div>
                        <p>Garia, Kolkata</p>
                    </div>
                    <div className={style.location_desc}>
                        <div className={style.loco_img}>
                            <img src="https://www.freeiconspng.com/uploads/green-location-icons-17.png" alt="" />
                        </div>
                        <p>Sealdaha, Kolkata</p>
                    </div>
                    <div className={style.location_desc}>
                        <div className={style.loco_img}>
                            <img src="https://www.freeiconspng.com/uploads/green-location-icons-17.png" alt="" />
                        </div>
                        <p>Jadavpur, Kolkata</p>
                    </div>
                </div>
            </div>

            <div id={style.white}>
                <div id={style.pay_desc}>
                    <h1>Let'z Pay...</h1>
                    <p>When you book your ground online with us, you get to pay with credit card, debit card, net banking or with digital wallets too...</p>
                    <h5>Looking for discounts & offers on your ground bookings?</h5>
                    <div id={style.process}>
                        <div className={style.process_div}>
                            <div id={style.pay2}>
                                <img src="./pay2.png" alt="" />
                            </div>
                            <p id={style.pay2_p}>Booking Confirmed</p>
                        </div>

                        <div className={style.process_div}>
                            <div id={style.pay1}><img src="./pay1.png" alt="" /></div>
                            <p id={style.pay1_p}>Payment Processing</p>
                        </div>

                        <div className={style.process_div}>
                            <div id={style.pay}><img src="./pay.png" alt="" /></div>
                            <p id={style.pay_p}>Cashless Payment</p>
                        </div>

                    </div>
                </div>
                <div>
                    <div id={style.payment_logo}>
                        <img src="https://cdn-icons-png.flaticon.com/512/1019/1019607.png" alt="" />
                    </div>
                </div>
            </div>

            <div id={style.game_img}>
                <div>
                    <img src="./kids.png" alt="" />
                </div>
            </div>

            <div id={style.yellow}>
                <div className={style.match_div}>
                    <h1>Total Views</h1>
                    <p>500+</p>
                </div>
                <div className={style.match_div}>
                    <h1>Total Bookings</h1>
                    <p>1k+</p>
                </div>
                <div className={style.match_div}>
                    <h1>Total Matchs</h1>
                    <p>2k+</p>
                </div>
            </div>
        </div>
    )
}
