"use client"
import React,{useState} from 'react'
import "./Header.css"
import Link from 'next/link'


function Header(props) {
    let [user,setUsers]=useState("User")
    return (
        <>
            <nav>
                <div className="left__nav">
                    <div className="leftSide__nav">
                        LOGO
                    </div>

                </div>
                <div>
                    <div>
                        <ul >
                            <Link href="/Home">
                            <li>
                                Home
                            </li>
                            </Link>
                            <Link href="/About">
                            <li>
                                About
                            </li>
                            </Link>
                            <Link href="/Blog">
                           
                            <li>
                                Blog
                            </li>
                            </Link>
                            <li onClick={()=>{
                                setUsers(props.user)


                            }}>
                                {user}
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </>
    )
}

export default Header
