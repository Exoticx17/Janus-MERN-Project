import React, { useState } from 'react'
import '../stylesheets/signup.css'
import {useSpring, animated} from 'react-spring'
import Navbar from '../components/navbarComp'

const Signup = () => {

    const [eerror,setEerror] = useState('')
    const [perror,setPerror] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [data,setData] = useState([])


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

    const sformHandler = (e) => {
        e.preventDefault()

        //Reset Errors
        setEerror('');
        setPerror('');

        //Set States
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);
        Signup(email,password)
    }

    const Signup = async (email,password) => {
        try {
            fetch('http://localhost:3002/user/signup',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow',
                credentials: 'include',
                body: JSON.stringify({
                    email: email,
                    password: password,
                    admin: false
                })
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data)
            })
            .catch(err => {
                console.log(err)
            })
            if(data.errors) {
                setEerror(data.errors.email)
                setPerror(data.errors.password)
            }
            if(data.user) {
                window.setTimeout(() => {
                    window.location.assign('/')
                    localStorage.setItem('userid', data.user)
                    localStorage.setItem('admin', data.admin)
                },500)}
        }
        catch(err){
            console.log(err)
        }
    } 
    const emailStyle={ height: '30px'}
    const passStyle={ height: '30px'}

    return ( 
    <animated.div className="container" style={fade}>
        <Navbar/>
        <div className='login-form'>
            <form onSubmit={sformHandler} className="sform">
            <h3 className='signer'> Sign Up</h3>
                <div>
                    <div className='email'>
                        <label htmlFor="email" className='sefl' >Email</label>
                        <input type="text" name="email" className='semail' required autoComplete='off' style={emailStyle}/>
                        <div className='email-error'>{eerror}</div>
                    </div>
                    <div className='passowrd' >
                        <label htmlFor="password" className='pfl'>Password</label>
                        <input type="password" name="password" className='password' required autoComplete='off' style={passStyle}/>
                        <div className='password-error'>{perror}</div>
                    </div>
                    <input type="submit" className='lsubmit' value='Sign Up' />
                </div>
            </form>
        </div>
    </animated.div> 
    );
}
 
export default Signup;