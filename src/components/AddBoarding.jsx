import React, { useState } from 'react'
import axios from 'axios'

const AddBoarding = () => {

    const [input, changeInput] = useState({
        booking_id: "",
        pet_name: "",
        pet_type: "",
        breed: "",
        age: "",
        weight: "",
        vaccination_status: "",
        owner_name: "",
        owner_phone: "",
        owner_email: "",
        checkin_date: "",
        checkout_date: "",
        kennel_number: ""
    })

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {

        console.log(input)

        axios.post("http://localhost:3000/add_boarding", input)
            .then((response) => {

                alert(response.data.status)

                changeInput({
                    booking_id: "",
                    pet_name: "",
                    pet_type: "",
                    breed: "",
                    age: "",
                    weight: "",
                    vaccination_status: "",
                    owner_name: "",
                    owner_phone: "",
                    owner_email: "",
                    checkin_date: "",
                    checkout_date: "",
                    kennel_number: ""
                })

            })
            .catch((error) => {
                console.log(error)
                alert("Failed to Register Boarding")
            })

    }

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
                    className="row"
                    style={{
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0px 10px 25px rgba(0,0,0,0.2)"
                    }}
                >

                    {/* Left Panel */}

                    <div
                        className="col-md-4 text-white d-flex flex-column justify-content-center"
                        style={{
                            background: "#92400E",
                            padding: "35px"
                        }}
                    >

                        <h2 className="fw-bold">
                            🐾 Pet Boarding
                        </h2>

                        <h4>Check-In Portal</h4>

                        <hr />

                        <p>🐶 Safe & Comfortable Stay</p>
                        <p>🐱 Professional Pet Care</p>
                        <p>🩺 Vaccination Verification</p>
                        <p>🏠 Secure Kennel Allocation</p>

                    </div>

                    {/* Right Panel */}

                    <div className="col-md-8 bg-white p-4">

                        <h3 className="text-center text-dark mb-4">
                            Register Pet Boarding
                        </h3>

                        <div className="row g-3">

                            <div className="col-md-6">
                                <label>Booking ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="booking_id"
                                    value={input.booking_id}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Pet Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="pet_name"
                                    value={input.pet_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Pet Type</label>
                                <select
                                    className="form-select"
                                    name="pet_type"
                                    value={input.pet_type}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option>Dog</option>
                                    <option>Cat</option>
                                    <option>Bird</option>
                                    <option>Rabbit</option>
                                    <option>Hamster</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label>Breed</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="breed"
                                    value={input.breed}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="age"
                                    value={input.age}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Weight (kg)</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name="weight"
                                    value={input.weight}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Vaccination Status</label>
                                <select
                                    className="form-select"
                                    name="vaccination_status"
                                    value={input.vaccination_status}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option>Vaccinated</option>
                                    <option>Pending</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label>Owner Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="owner_name"
                                    value={input.owner_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Owner Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="owner_phone"
                                    value={input.owner_phone}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Owner Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="owner_email"
                                    value={input.owner_email}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Check-in Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="checkin_date"
                                    value={input.checkin_date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label>Check-out Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="checkout_date"
                                    value={input.checkout_date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-12">
                                <label>Kennel Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="kennel_number"
                                    value={input.kennel_number}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 text-center mt-4">

                                <button
                                    className="btn btn-warning btn-lg px-5 fw-bold"
                                    style={{
                                        borderRadius: "30px"
                                    }}
                                    onClick={readValue}
                                >
                                    Register Boarding
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default AddBoarding