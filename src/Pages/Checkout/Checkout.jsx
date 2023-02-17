import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import style from './Checkout.module.css'

export default function Checkout() {
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear()
    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`
    let eventStart = `${currentYear}-${currentMonth < 10 ? `0${currentMonth}` : currentMonth}-${currentDay + 1}`
    let eventEnd = `${currentYear}-${currentMonth < 10 ? `0${currentMonth}` : currentMonth}-${currentDay + 1}`
    let eventStartTime = `${currentYear}-${currentMonth < 10 ? `0${currentMonth}` : currentMonth}-${currentDay}T00:00`
    let eventEndTime = `${currentYear}-${currentMonth < 10 ? `0${currentMonth}` : currentMonth}-${currentDay + 1}T10:59`

    let [details, setDetails] = useState([]);
    const toast = useToast();
    const [distance, setDistance] = useState(0);
    const [location, setLocation] = useState('');
    const [charge, setCharge] = useState(0);
    const [setupDate, SetSetupDate] = useState('');
    const navigate = useNavigate();

    const locationsArray = [
        {
            id: 1,
            name: 'Baghajatin, Kolkata, WB',
            distance: 10
        },
        {
            id: 2,
            name: 'Garia, Kolkata, WB',
            distance: 20
        },
        {
            id: 3,
            name: 'Sealdaha, Kolkata, WB',
            distance: 15
        },
        {
            id: 4,
            name: 'Jadavpur, Kolkata, WB',
            distance: 25
        }
    ]

    const HandleLocation = (value) => {
        setLocation(value)
        let filtered = locationsArray.filter((el) => {
            return el.name === value ? el.name : null
        })
        if (value === '') {
            setDistance(0)
            setCharge(0)
        } else {
            setDistance(filtered[0].distance)
            let upDown = filtered[0].distance * 2;
            setCharge(upDown * 50)
        }
    }


    const Payment = () => {
        if (location !== '' && setupDate !== '') {
            toast({
                duration: 2000,
                status: "success",
                title: "Successfull",
                description: 'Payment Successfully Done',
                position: 'top'
            })
            setTimeout(() => {
                axios.delete(`https://play-game-api.onrender.com/cart/${details[0]?.id}`)
                    .then((res) => {
                        axios.get('https://play-game-api.onrender.com/cart')
                            .then((res) => {
                                setDetails(res.data)
                            })
                            .catch((e) => {
                                console.log(e)
                            })
                    })
                    .catch((e) => {
                        console.log(e)
                    })
                navigate('/')

            }, 1000);
        } else {
            toast({
                duration: 3000,
                status: "error",
                title: "Error",
                description: 'Please select all the fields',
                position: 'top'
            })
        }

    }

    useEffect(() => {
        axios.get('https://play-game-api.onrender.com/cart')
            .then((res) => {
                setDetails(res.data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])
    console.log(details)
    return (
        <div id={style.checkout_main}>
            <div id={style.checkout}>
                {details && details.length > 0 && details.map((el) => (
                    <div id={style.single_div} key={el.id} >
                        <div id={style.img_div}><img src={el.image} alt="" /></div>
                    </div>
                ))}
                {
                    details && details.length > 0 ?
                        <div id={style.form_div}>
                            {details && details.length > 0 && details.map((ele) => (
                                <div id={style.details_div} key={ele.id}>
                                    <p>Name: {ele.name}</p>
                                    <p>Event Start: {eventStart} 11:00am</p>
                                    <p>Event End: {eventEnd} 3:00pm</p>
                                    <p>Event Location: Eden Gardens, Kolkata, WB</p>
                                    <p>Distance: {distance}km</p>
                                    <div id={style.select_div}>
                                        <p>User Location</p>
                                        <select value={location} onChange={(e) => HandleLocation(e.target.value)} id={style.select_tag}>
                                            <option value='' >Select Location</option>
                                            <option >Baghajatin, Kolkata, WB</option>
                                            <option >Garia, Kolkata, WB</option>
                                            <option >Sealdaha, Kolkata, WB</option>
                                            <option >Jadavpur, Kolkata, WB</option>
                                        </select>
                                    </div>
                                    <div id={style.set_time}>
                                        <p>Setup Date</p>
                                        <input value={setupDate} onChange={(e) => SetSetupDate(e.target.value)} type="datetime-local" min={`${eventStartTime}`} max={`${eventEndTime}`} placeholder='Setup Date & Time' />
                                    </div>
                                    <p>Total Charge: Rs. {charge}/-</p>
                                </div>
                            ))}
                            <div id={style.btns}>
                                <button id={style.btn1} onClick={Payment}>Payment</button>
                                <button id={style.btn2}>Make Enquiry</button>
                            </div>
                        </div>
                        : <div>Please Add to Cart to do Checkout</div>
                }
            </div>
        </div>
    )
}
