import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BookService from "../Services/BookService";



const UserBookingList = () => {
    const [UserBooking, setUserBooking] = useState([])
    
    useEffect(() => {
        getAllUserList();
    }, [])

    const getAllUserList = () => {
        BookService.getAllUserList().then((response) => {
            setUserBooking(response.data)
            console.log(response.date);
        }).catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="container">
            <br></br><br></br>
            <h2 className="text-center">All Passengers Booking List</h2>
            
            <br></br><br></br>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Name </th>
                    <th>PNR No </th>
                    <th>Age </th>
                    <th>Gender </th>
                    <th>Flight No </th>
                    <th>Departure </th>
                    <th>Destination </th>
                    <th>Class </th>
                    <th>No of Adults </th>
                    <th>No of Children </th>
                    <th>Email </th>
                    
                </thead>
                <tbody>
                    {
                        UserBooking.map(
                            UserDetails =>
                                <tr key={UserDetails.Id}>
                                    <td>{UserDetails.name} </td>
                                    <td>{UserDetails.pnrNo} </td>
                                    <td>{UserDetails.age}</td>
                                    <td>{UserDetails.gender}</td>
                                    <td>{UserDetails.flightNo}</td>
                                    <td>{UserDetails.startPoint}</td>
                                    <td>{UserDetails.endPoint}</td>
                                    <td>{UserDetails.classType}</td>
                                    <td>{UserDetails.adults}</td>
                                    <td>{UserDetails.children}</td>
                                    <td>{UserDetails.email}</td>
                                    \


                                </tr>
                        )
                    }
                </tbody>

            </table>

        </div>
    )    
    
}

export default UserBookingList;