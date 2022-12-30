import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import '../stylesheets/submission.css'
import {useSpring, animated} from 'react-spring'
import Navbar from '../components/navbarComp';

const Submission = () => {

    const [submit,setSubmit] = useState()
    const [pdata,setPData] = useState([])
    const userId = localStorage.getItem('userid')
    const [cookie,setCookie] = useCookies() 
    const jwt = cookie.jwt;

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
                setSubmit(pdata.submitted)
            }) 
        }
        /*if(submit){
            window.location.assign('/home')
        }*/
        if(!jwt){
            window.location.assign('/login') 
        }
    })



    const submitHandler = async (e) => {
        e.preventDefault()
        const userId = localStorage.getItem('userid')
        let favorite = e.target.favsubject.value;
        let learning = e.target.learningsubject.value;
        let applicable = e.target.appsubject.value;
        let project = e.target.projectsubject.value;
        console.log(favorite, learning, applicable, project)
        fetch('http://localhost:3002/graph',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include',
            body: JSON.stringify({
                title: "Favorite",
                subject: favorite        
            })
        })
        fetch('http://localhost:3002/graph',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include',
            body: JSON.stringify({
                title: "Learned",
                subject: learning        
            })
        })
        fetch('http://localhost:3002/graph',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include',
            body: JSON.stringify({
                title: "Applicable",
                subject: applicable        
            })
        })
        fetch('http://localhost:3002/graph',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include',
            body: JSON.stringify({
                title: "Projects",
                subject: project        
            })
        })
        fetch(`http://localhost:3002/user/submit/${userId}?changeTo=true`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include'
        })
        window.location.assign('/home')
    }

    return ( 
    <animated.div className="submitcontainer" style={fade}>
        <Navbar />
        <form onSubmit={submitHandler} className="main-form">
        <h3 className='warning' >Form Submission</h3>
            <div className='favorite' >
                <h4 className='favh4'>What is Your Favorite Subject:</h4>
                <select className='favsubject' name="favsubject">
                    <option value="" defaultValue className='s-value'>Subject</option>
                    <option value="Science" className='s-value'>Science</option>
                    <option value="Entrepreneurship" className='s-value'>Entrepreneurship</option>
                    <option value="Soft Skills" className='s-value'>Soft Skills</option>
                    <option value="Chemistry" className='s-value'>Chemistry</option>
                    <option value="AI" className='s-value'>AI</option>
                    <option value="Statistics" className='s-value'>Statistics</option>
                    <option value="Engineering" className='s-value'>Engineering</option>
                    <option value="Economics" className='s-value'>Economics</option>
                    <option value="Science History" className='s-value'>Science History</option>
                    <option value="Computer Science" className='s-value'>Computer Science</option>
                    <option value="Electrical Engineering" className='s-value'>Electrical Engineering</option>
                    <option value="Web Design" className='s-value'>Web Design</option>
                </select>
            </div>
            <div className='learning' >
                <h4 className='learnh4'>What Subject You Learned From Most:</h4>
                <select className='learningsubject' name="learningsubject">
                    <option value="" defaultValue className='s-value'>Subject</option>
                    <option value="Science" className='s-value'>Science</option>
                    <option value="Entrepreneurship" className='s-value'>Entrepreneurship</option>
                    <option value="Soft Skills" className='s-value'>Soft Skills</option>
                    <option value="Chemistry" className='s-value'>Chemistry</option>
                    <option value="AI" className='s-value'>AI</option>
                    <option value="Statistics" className='s-value'>Statistics</option>
                    <option value="Engineering" className='s-value'>Engineering</option>
                    <option value="Economics" className='s-value'>Economics</option>
                    <option value="Science History" className='s-value'>Science History</option>
                    <option value="Computer Science" className='s-value'>Computer Science</option>
                    <option value="Electrical Engineering" className='s-value'>Electrical Engineering</option>
                    <option value="Web Design" className='s-value'>Web Design</option>
                </select>
            </div>
            <div className='applicable'>
                <h4 className='apph4'>What Is The Most Applicable Subject:</h4>
                <select className='appsubject' name="appsubject">
                    <option value="" defaultValue className='s-value'>Subject</option>
                    <option value="Science" className='s-value'>Science</option>
                    <option value="Entrepreneurship" className='s-value'>Entrepreneurship</option>
                    <option value="Soft Skills" className='s-value'>Soft Skills</option>
                    <option value="Chemistry" className='s-value'>Chemistry</option>
                    <option value="AI" className='s-value'>AI</option>
                    <option value="Statistics" className='s-value'>Statistics</option>
                    <option value="Engineering" className='s-value'>Engineering</option>
                    <option value="Economics" className='s-value'>Economics</option>
                    <option value="Science History" className='s-value'>Science History</option>
                    <option value="Computer Science" className='s-value'>Computer Science</option>
                    <option value="Electrical Engineering" className='s-value'>Electrical Engineering</option>
                    <option value="Web Design" className='s-value'>Web Design</option>
                </select>
            </div>
            <div className='project'>
                <h4 className='projecth4'>What Subject Has The Best Projects:</h4>
                <select className='projectsubject' name="projectsubject">
                    <option value="" defaultValue className='s-value'>Subject</option>
                    <option value="Science" className='s-value'>Science</option>
                    <option value="Entrepreneurship" className='s-value'>Entrepreneurship</option>
                    <option value="Soft Skills" className='s-value'>Soft Skills</option>
                    <option value="Chemistry" className='s-value'>Chemistry</option>
                    <option value="AI" className='s-value'>AI</option>
                    <option value="Statistics" className='s-value'>Statistics</option>
                    <option value="Engineering" className='s-value'>Engineering</option>
                    <option value="Economics" className='s-value'>Economics</option>
                    <option value="Science History" className='s-value'>Science History</option>
                    <option value="Computer Science" className='s-value'>Computer Science</option>
                    <option value="Electrical Engineering" className='s-value'>Electrical Engineering</option>
                    <option value="Web Design" className='s-value'>Web Design</option>
                </select>
            </div>
            <div className='submitting'>
                <input type="submit" className='missubmit' value="Submit" />
            </div>
        </form>
    </animated.div> 
    );
}
 
export default Submission;