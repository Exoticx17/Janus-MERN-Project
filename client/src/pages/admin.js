import React, { useEffect, useState } from 'react'
import AcceptForm from '../components/acceptForm';
import { useCookies } from 'react-cookie';
import EditForm from '../components/editForm';
import {useSpring, animated} from 'react-spring'
import Navbar from '../components/navbarComp';
import '../stylesheets/admin.css'
import { Link } from 'react-router-dom';

const Admin = () => {
    const userId = localStorage.getItem('userid')
    const [data,setData] = useState([])
    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt

    const fade = useSpring({
        from:{
            opacity: 0.1
        },
        to:{
            opacity: 1
        },
        config:{
            duration: 750
        }
    })

    useEffect( () => {
        if(jwt){
            fetch(`http://localhost:3002/learning/accepted?accepted=na&userId=${userId}`,{
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
        }
    })




    return ( 
    <animated.div className="container" style={fade}>
        <Navbar /> 
        <div className='nadpic-container'>
            <h2 className='aadd'>Add</h2>
            <p className='aaddp'>Add Or Change Posts</p>
            <Link to="/addedit" className='aaddedit'>Start Now</Link>
            <h2 className='achange'>Change</h2>
            <p className='achangep'>Edit Or Delete Posts</p>
            <Link to="/editdelete" className='aeditdelete'>Start Now</Link>
        </div>
        <h2 className='approvable' >Approvable</h2>
        {data.map(data => (
            <div key={data._id}>
                <AcceptForm title={data.title} about={data.about} category={data.category} id={data._id}/>
            </div>
        ))}
    </animated.div> 
    );
}
 
export default Admin;