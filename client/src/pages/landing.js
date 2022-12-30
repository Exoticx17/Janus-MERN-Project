import React, {useEffect, useState} from 'react'
import '../stylesheets/landing.css'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Teach from '../photos/teaching.jpg'
import Create from '../photos/create.jpg'
import Logo from '../photos/exchange.jpg'
import Inventing from '../photos/inventing.jpg'
import Learning from '../photos/learning.jpg'
import {useSpring, animated} from 'react-spring'
import Icon from '../photos/exchange.jpg'


const Landing = () => {

    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt
    let userId = localStorage.getItem('userid')
    const [data,setData] = useState([])
    const [admin,setAdmin] = useState()
    const [pdata,setPData] = useState([])
    useEffect( () => {
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

    const onSubmit = async () =>{
        try {
            
            fetch('http://localhost:3002/user/logout',{
                method: 'POST',
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
            .then(() => {
                window.setTimeout(() => {
                    window.location.assign('/login')
                },200)
            })
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }

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
            <div className='pic-container'>
                <div className='landing-nav'>
                    <Link to={jwt ? '/home' : '/'} ><img className='icon' src={Icon} /></Link>
                    <Link to={jwt ? '/home' : '/'} className='janus'>Janus</Link>
                    <Link to='/courses' className={!jwt ? 'l2courses' : 'lcourses'}>Courses</Link>
                    <Link to='/charts' className={!jwt ? 'l2charts' : 'lcharts'}>Charts</Link>
                    <Link to='/admin' className={admin ? 'ladmin' : 'hide'}>Admin</Link>
                    <Link to='/submission' className={jwt ?'lsubmission' : 'l2submission'}>Forms</Link>
                    <Link to='/login' className={jwt ? 'hide' : 'llogin'}>Login</Link>
                    <Link to='/signup' className={jwt ? 'hide' : 'lsignup'}>Signup</Link>
                    <h6 className={jwt ? 'llogout' : 'hide'} onClick={onSubmit}>Logout</h6>
                </div>
                <div className='header-nav'>
                    <h2>Learn Anytime Or Anywhere</h2>
                    <p>The New And Improved Way To Learn In A Modern World</p>
                    <Link to='/courses' className='coursebtn'>Courses</Link>
                    <Link to={jwt ? '/home' : '/signup'} className='startbtn'>Get Started Now</Link>
                </div>
            </div>
            <div className='info-container'>
                <img src={Teach} className='teach'/>
                <p className='text-teach'> Our goal is to help people learn and understand things better for one. We will teach you the basics of many core subjects and even go into debth in some of them. When we teach you eventually you should be able to start learning some yourself and even start to become an expert in that field or subject over time.</p>
                <hr className='line'/>
                <img src={Create} className='create'/>
                <p className='text-create'> After teaching and you learning a lot of the subjects our second goal is for you to start creating more knowledge for yourself and for you to create projects based off of them. The learning will first give you some basics and then you can take it to the next level with projects and in depth research. After all practice makes perfect.</p>
                <img src={Logo} className='one-logo'/>
                <img src={Logo} className='two-logo'/>
            </div>
            <div className='data-container'>
                <img src={Learning} className='think'/>
                <img src={Inventing} className='invent'/>
                <hr className='line'/>
                <p className='text-think'>Learning is another part of this program because with teaching and creating things you start to learn. That really is the main goal, for you to learn and understand more subjects and allow you to build things based off of those subjects. Lastly, its very important hat when le arning you either make sure you remember them or take the notes for the future.</p>
                <p className='text-invent'>Inventing, is making new things(ideas or machines) based off knowledge you might already have. After being taught doing projects and learning a ton you should be trying to make news things like new theories new machines etc. In order for all of the learning to be worth it you need to use it and make something out of it, why not things that help people.</p>
            </div>
            <div className='bottom-container'>
                <h2>We Will Help You Learn, Test, And Eventually Create.</h2>
            </div>
        </animated.div>
     );
}
 
export default Landing;
