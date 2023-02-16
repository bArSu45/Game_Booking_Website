import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import style from './Checkout.module.css'

export default function Checkout() {
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear()
    let currentDate = `${currentDay}/${currentMonth}/${currentYear}`
    let eventStart = `${currentDay + 1}/${currentMonth}/${currentYear}`
    let eventEnd = `${currentDay + 2}/${currentMonth}/${currentYear}`
    console.log(currentDate)

    let [details, setDetails] = useState([]);
    const toast = useToast();
    axios.get('http://localhost:8080/cart')
        .then((res) => {
            setDetails(res.data)
        })
        .catch((e) => {
            console.log(e)
        })

    useEffect(() => {
        axios.get('http://localhost:8080/cart')
            .then((res) => {
                setDetails(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const Payment = () => {
        toast({
            duration: 3000,
            status: "success",
            title: "Successfull",
            description: 'Payment Successfully Done',
            position: 'top'
          })
    }
    return (
        <div id={style.checkout_main}>
            <div id={style.checkout}>
                {details && details.length > 0 && details.map((el) => (
                    <div id={style.single_div} key={el.id} >
                        <div id={style.img_div}><img src={el.image} alt="" /></div>
                    </div>
                ))}
                <div id={style.form_div}>
                    {details && details.length > 0 && details.map((ele) => (
                        <div id={style.details_div}>
                            <p>Name: {ele.name}</p>
                            <p>Event Start: {eventStart}</p>
                            <p>Event End: {eventEnd}</p>
                            <p>Event Location: {ele.location}</p>
                            <p>Distance: {ele.distance}km</p>
                            <div id={style.select_div}>
                                <p>User Location</p>
                            <select name="Select Location" id={style.select_tag}>
                                <option value="">Select Location</option>
                                <option value="">Baghajatin, Kolkata, WB</option>
                                <option value="">Garia, Kolkata, WB</option>
                                <option value="">Sealdaha, Kolkata, WB</option>
                                <option value="">Jadavpur, Kolkata, WB</option>
                            </select>
                            </div>
                            <div id={style.set_time}>
                                <p>Setup Date</p>
                                <input type="datetime-local" placeholder='Setup Date & Time' />
                            </div>
                            <p>Total Charge:{ele.distance*50 + ele.distance*50}</p>
                        </div>
                    ))}
                    <div id={style.btns}>
                        <button id={style.btn1} onClick={Payment}>Payment</button>
                        <button id={style.btn2}>Make Enquiry</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
