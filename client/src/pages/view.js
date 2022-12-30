import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/navbarComp';
import '../stylesheets/view.css'
import {useSpring, animated} from 'react-spring'

const View = () => {

    const userId = localStorage.getItem('userid')
    const [data,setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3002/learning/accepted?accepted=true&userId=${userId}`,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include'
            })
            .then(res => {
                return res.json()
            }) 
            .then(data => {
                setData(data)
                console.log(data)
            })
    })

    const fade = useSpring({
        from:{
            opacity: 0.1
        },
        to:{
            opacity: 1
        },
        config:{
            duration: 1250
        }
    })

    return ( 
        <animated.div className='container' style={fade}>
            <Navbar />
            <div className='boxer'>
            <h2 className='mainer'>View Your Posts</h2>
            <div className='presentdiv'>
                {data.map(data => (
                <div key={data._id} className="singlep">
                    <Link className='view-title' to={'/post/' + data._id}>{data.title}</Link>
                    <Link className='view-author' to={'/post/' + data._id}>{data.author}</Link> 
                    <Link className='view-category' to={'/post/' + data._id}>{data.category}</Link>
                    <Link className='view-message' to={'/post/' + data._id}>{data.message}</Link>
                </div>
                ))}
            </div>
            </div>
        </animated.div>
     );
}
 
export default View;


             