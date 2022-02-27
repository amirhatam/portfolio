import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MDBCol, MDBRow, MDBIcon, MDBCard } from 'mdbreact'
import "../assets/styles/Footer.css"

function CodeWars() {
    const [rank, setRank] = useState("")
    const [honor, setHonor] = useState("")
    const [total, setTotal] = useState("")


    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get("https://www.codewars.com/api/v1/users/AmirHatam")
                const data = response.data
                if (response.status === 200) {
                    setRank(data.ranks.overall.name)
                    setHonor(data.honor)
                    setTotal(data.codeChallenges.totalCompleted)
                }
            } catch (error) {
                console.log(error)
            }
        })();
    }, [])


    return (
        <MDBCard className='bg-dark px-3'>
            <MDBRow>
                <MDBCol>
                    <img
                        src="https://www.codewars.com/users/AmirHatam/badges/large"
                        alt=""
                        className="img-fluid rounded"
                    />
                    <span className='text-light h6-fs'>
                        codwars
                    </span>
                </MDBCol>
            </MDBRow>
            <MDBRow className='justify-content-end container pt-2'>
                <p className='text-light justify-content-end p-fs'>Member Since: <strong>Feb 2022</strong> </p>
            </MDBRow>
            <MDBRow>
                <MDBCol className='col-6'>
                    <div className='container py-3'>
                        <MDBIcon className='codewars-color xlTitre-fs' icon="chart-line" />
                        <p className='text-light h6-fs'> <strong>Progress</strong> </p>
                        <p className='text-light mb-1'>Rank: <strong>{rank}</strong> </p>
                        <p className='text-light mb-1'>Honor: <strong>{honor}</strong></p>
                        <p className='text-light mb-1'>Total Completed Kata: <strong>{total}</strong></p>
                    </div>
                </MDBCol>
                <MDBCol className='col-6'>
                    <div className='container py-3'>
                        <MDBIcon className='codewars-color xlTitre-fs' icon="laptop-code" />
                        <p className='text-light h6-fs pt-lg-1'> <strong>Languages</strong> </p>
                        <p className='text-light mb-1'>JavaScript</p>
                    </div>
                </MDBCol>
            </MDBRow>
            <MDBRow className='justify-content-center'>
                <a href="https://dev.codewars.com/#get-user" target="_blank" className='txtGray aHover h6-fs mb-1 mt-4'>Codewars API Reference</a>
            </MDBRow>
        </MDBCard>
    )
}

export default CodeWars