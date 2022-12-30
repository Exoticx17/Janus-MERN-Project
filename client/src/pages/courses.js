import React, { useEffect, useState } from 'react'
import LearnForm from '../components/learnForm';
import '../stylesheets/courses.css'
import { useCookies } from 'react-cookie';
import Aipic from '../photos/aipic.jpg'
import Chempic from '../photos/chempic.jpg'
import Compscipic from '../photos/compscipic.jpg'
import Ecopic from '../photos/ecopic.jpg'
import Eelecpic from '../photos/eelec.jpg'
import Enginpic from '../photos/enginpic.jpg'
import Entrepic from '../photos/entrepic.jpg'
import Physpic from '../photos/physpic.jpg'
import Scihispic from '../photos/scihispic.jpg'
import Softpic from '../photos/softpic.jpg'
import Statspic from '../photos/statspic.jpg'
import Webpic from '../photos/webpic.jpg'
import Scipic from '../photos/scipic.jpg'
import { Link } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import Navbar from '../components/navbarComp';

const Courses = () => {

    const userId = localStorage.getItem('userid')
    const [cookie,setCookie] = useCookies() 
    const jwt = cookie.jwt;
    useEffect(() => {
        if(!jwt){
            window.location.assign('/login')
        } 
    })


    const fade = useSpring({
        from:{
            opacity: -1
        },
        to:{
            opacity: 1
        },
        config:{
            duration: 500
        }
    })



    return ( 
    <animated.div className="container" style={fade}>
        <Navbar />
        <div className='jhomepic-container'>
            <div className='jhomeheader-nav'>
                <h1 className='jmainh'>Courses</h1>
                <h2 className='jnavform'>Forms</h2>
                <p className='jformp'>Add Or Change Your Posts</p>
                <Link to="/addedit" className='jaddchange'>Start Now</Link>  
            </div>
        </div>
        <div className='button-comp' >
            <Link id="science" to="/course/Science"> <img src={Scipic} className='linkcourse'/> <p>Science</p> </Link>
            <Link id="entrepreneurship" to="/course/Entrepreneurship"> <img src={Entrepic} className='linkcourse'/> <p>Entrepreneurship</p></Link>
            <Link id="softskills" to="/course/Soft Skills"> <img src={Softpic} className='linkcourse'/> <p>Soft Skills</p></Link>
            <Link id="chemistry" to="/course/Chemistry"> <img src={Chempic} className='linkcourse'/> <p>Chemistry</p></Link>
            <Link id="ai" to="/course/Ai"> <img src={Aipic} className='linkcourse'/> <p>AI</p></Link>
            <Link id="statistics" to="/course/Statistics"> <img src={Statspic} className='linkcourse'/> <p>Statistics</p></Link>
            <Link id="engineering" to="/course/Engineering"> <img src={Enginpic} className='linkcourse'/> <p>Engineering</p></Link>
            <Link id="physics" to="/course/Physics"> <img src={Physpic} className='linkcourse'/> <p>Physics</p></Link>
            <Link id="economics" to="/course/Economics"> <img src={Ecopic} className='linkcourse'/> <p> Economics</p></Link>
            <Link id="sciencehistory" to="/course/Science History"> <img src={Scihispic} className='linkcourse'/> <p>Science History</p></Link>
            <Link id="computerscience" to="/course/Computer Science"> <img src={Compscipic} className='linkcourse'/> <p>Computer Science</p></Link>
            <Link id="electricalengineering" to="/course/Electrical Engineering"> <img src={Eelecpic} className='linkcourse'/> <p>Electrical Engineering</p></Link>
            <Link id="webdesign" to="/course/Web Design"> <img src={Webpic} className='linkcourse'/> <p>Web Design</p></Link>
        </div>
        <div className='final-div'>
            <p className='finalp'>Janus Courses are some of the best ways to learn. From courses like Computer Science to courses like Entrepreneurship, you wont even realize how much information you are retaining. It time for Janus.</p>
        </div>
    </animated.div> 
    );
}
 
export default Courses;