import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewBoarding = () => {

    const [boardingData, changeBoardingData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view_boarding", {})
            .then((response) => {
                changeBoardingData(response.data)
            })
            .catch((error) => {
                console.log(error)
                alert("Failed to Fetch Boarding Details")
            })

    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "linear-gradient(180deg,#FDE68A,#FCD34D)",
                padding: "40px"
            }}
        >

            <div className="container">

                <div
                    className="card border-0"
                    style={{
                        borderRadius: "20px",
                        boxShadow: "0px 10px 25px rgba(0,0,0,0.25)"
                    }}
                >

                    <div
                        className="card-header text-center"
                        style={{
                            backgroundColor: "#92400E",
                            color: "white",
                            borderTopLeftRadius: "20px",
                            borderTopRightRadius: "20px"
                        }}
                    >
                        <h2 className="mb-0">
                            🐾 Pet Boarding Details
                        </h2>
                    </div>

                    <div className="card-body bg-white">

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover">

                                <thead
                                    style={{
                                        backgroundColor: "#FCD34D",
                                        color: "#5B3710"
                                    }}
                                >

                                    <tr className="text-center">

                                        <th>Booking ID</th>
                                        <th>Pet Name</th>
                                        <th>Pet Type</th>
                                        <th>Breed</th>
                                        <th>Age</th>
                                        <th>Weight</th>
                                        <th>Vaccination</th>
                                        <th>Owner Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Check-In</th>
                                        <th>Check-Out</th>
                                        <th>Kennel No.</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {
                                        boardingData.map((value, index) => (

                                            <tr key={index} className="text-center">

                                                <td>{value.booking_id}</td>
                                                <td>{value.pet_name}</td>
                                                <td>{value.pet_type}</td>
                                                <td>{value.breed}</td>
                                                <td>{value.age}</td>
                                                <td>{value.weight} kg</td>
                                                <td>{value.vaccination_status}</td>
                                                <td>{value.owner_name}</td>
                                                <td>{value.owner_phone}</td>
                                                <td>{value.owner_email}</td>
                                                <td>{value.checkin_date}</td>
                                                <td>{value.checkout_date}</td>

                                                <td>
                                                    <span
                                                        className="badge"
                                                        style={{
                                                            backgroundColor: "#92400E",
                                                            color: "white",
                                                            fontSize: "14px"
                                                        }}
                                                    >
                                                        {value.kennel_number}
                                                    </span>
                                                </td>

                                            </tr>

                                        ))
                                    }

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default ViewBoarding