import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/navbarComp'
import '../stylesheets/sPost.css'
import img from '../photos/rainforest.jpg'
import { useCookies } from 'react-cookie'
import {useSpring, animated} from 'react-spring'

const SPost = () => {

    const {id} = useParams()
    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt
    const userId = localStorage.getItem('userid')
    const [data,setData] = useState([])
    const [pdata,setPData] = useState([])
    const [admin,setAdmin] = useState() 

    useEffect(() => {
        fetch(`http://localhost:3002/learning/one?id=${id}`,{
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
            })
            if(jwt){
                fetch(`http://localhost:3002/user/one/${userId}`,{
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    redirect: 'follow',
                    credentials: 'include'
                })
                .then(res => {
                    return res.json()
                })
                .then(data => {
                    setPData(data)
                    setAdmin(pdata.admin)
                }) 
              
            }
        })

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

    return ( 
        <animated.div className='container' style={fade}>
            <Navbar />
            <div className='imgcontainer'>
               <img src={img} className='specificimg'></img>
               <div className='img-comp'>
                    <h2 className='img-category'>{data.category}</h2>
                    <h2 className='img-title'>{data.title}</h2>
                    <h2 className='img-author'>{data.author}</h2>
                    <h2 className={admin ? 'img-id' : 'hide'}>{data._id}</h2>
                    <h2 className={admin ? 'img-about' : 'centera'}>{data.about}</h2>
                    <div className='body-area'>
                        <p className='img-body'>{data.body}</p>
                    </div>
               </div>
            </div>
        </animated.div>
     );
}
 
export default SPost;