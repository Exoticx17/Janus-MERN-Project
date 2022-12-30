import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../stylesheets/navbarComp.css'
import { useCookies } from 'react-cookie';
import Icon from '../photos/exchange.jpg'

const Navbar = () => {

    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt
    const [data,setData] = useState([])
    const [pdata,setPData] = useState([])
    const userId = localStorage.getItem('userid')
    const [admin,setAdmin] = useState()
    const [submit,setSubmit] = useState()

    const onbSubmit = async () =>{
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
                setSubmit(pdata.submitted)
            }) 
          
        }
    })

    return ( 
        <div className='navcontainer'> 
            <div className="navlinks">
                    <Link to={jwt ? '/home' : '/'} ><img className='icon' src={Icon} /></Link>
                    <Link to={jwt ? '/home' : '/'} className='janus'>Janus</Link>
                    <Link to='/courses' className={!jwt ? 'l2courses' : 'lcourses'}>Courses</Link>
                    <Link to='/charts' className={!jwt ? 'l2charts' : 'lcharts'}>Charts</Link>
                    <Link to='/admin' className={admin ? 'ladmin' : 'hide'}>Admin</Link>
                    <Link to='/submission' className={jwt ?'lsubmission' : 'l2submission'}>Forms</Link>
                    <Link to='/login' className={jwt ? 'hide' : 'llogin'}>Login</Link>
                    <Link to='/signup' className={jwt ? 'hide' : 'lsignup'}>Signup</Link>
                    <h6 className={jwt ? 'llogout' : 'hide'} onClick={onbSubmit}>Logout</h6>
            </div>
        </div>
     );
}
 
export default Navbar;