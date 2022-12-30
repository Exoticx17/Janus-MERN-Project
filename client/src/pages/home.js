import React, { useEffect, useState } from 'react'
import '../stylesheets/home.css'
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
import Icon from '../photos/exchange.jpg';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Home = () => {

    const userId = localStorage.getItem('userid')
    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt;
    const [admin,setAdmin] = useState()
    const [pdata,setPData] = useState([])
    const [data,setData] = useState([])
    const [rolls,setRolls] = useState([])
    let rolist = []
    const [science,setScience] = useState(false)
    const [entre,setEntre] = useState(false)
    const [ss,setSS] = useState(false)
    const [chemistry,setChemistry] = useState(false)
    const [ai,setAI] = useState(false)
    const [statistics,setStatistics] = useState(false)
    const [engin,setEngin] = useState(false)
    const [physics,setPhysics] = useState(false)
    const [eco,setEco] = useState(false)
    const [sh,setSH] = useState(false)
    const [cs,setCS] = useState(false)
    const [ee,setEE] = useState(false)
    const [web,setWeb] = useState(false)
    let science1 =  'shide'
    let entrepreneurship1 = 'shide'
    let softskills1 = 'shide'
    let chemistry1 = 'shide'
    let ai1 = 'shide'
    let statistics1 = 'shide'
    let engineering1 = 'shide'
    let physics1 = 'shide'
    let economics1 = 'shide'
    let sciencehistory1 = 'shide'
    let computerscience1 = 'shide'
    let elecengineering1 = 'shide'
    let webdesign1 = 'shide'
    
    useEffect(() => {
        if(!jwt){
            window.location.assign('/login') 
        } 
        if(jwt){
            fetch(`http://localhost:3002/learning/accepted?accepted=false&userId=${userId}`,{
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
        }
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
                setRolls(data)
                console.log(rolls.enrolled)
                rolist = rolls.enrolled
                setScience( rolist.find(elem => elem === 'Science'))
                setEntre( rolist.find(elem => elem === 'Entrepreneurship'))
                setSS( rolist.find(elem => elem === 'Soft Skills'))
                setChemistry( rolist.find(elem => elem === 'Chemistry'))
                setAI( rolist.find(elem => elem === 'Ai'))
                setStatistics( rolist.find(elem => elem === 'Statistics'))
                setEngin( rolist.find(elem => elem === 'Engineering'))
                setPhysics( rolist.find(elem => elem === 'Physics'))
                setEco( rolist.find(elem => elem === 'Economics'))
                setSH( rolist.find(elem => elem === 'Science History'))
                setCS( rolist.find(elem => elem === 'Computer Science'))
                setEE( rolist.find(elem => elem === 'Electrical Engineering'))
                setWeb( rolist.find(elem => elem === 'Web Design'))
            })}
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

    const linkFunction = () => {
        if(science == 'Science'){
            science1 = 'lfunc'
        } 
        if(chemistry == 'Chemistry'){
            chemistry1 = 'lfunc'
        } 
        if(entre == 'Entrepreneurship'){
            entrepreneurship1 = 'lfunc'
        } 
        if(ss == 'Soft Skills'){
            softskills1 = 'lfunc'
        } 
        if(ai == 'Ai'){
            ai1 = 'lfunc'
        } 
        if(statistics == 'Statistics'){
            statistics1 = 'lfunc'
        } 
        if(engin == 'Engineering'){
            engineering1 = 'lfunc'
        } 
        if(physics == 'Physics'){
            physics1 = 'lfunc'
        } 
        if(eco == 'Economics'){
            economics1 = 'lfunc'
        }
        if(sh == 'Science History'){
            sciencehistory1 = 'lfunc'
        }
        if(cs == 'Computer Science'){
            computerscience1 = 'lfunc'
        }
        if(ee == 'Electrical Engineering'){
            elecengineering1 = 'lfunc'
        }
        if(web == 'Web Design'){
            webdesign1 = 'lfunc'
        }
        if(!rolist){
            return <h1>No Courses Enrolled In</h1>
        }
        console.log(science1,webdesign1)
    }
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
    <animated.div className="homecontainer" style={fade}>
        <div className='homepic-container'>
            <div className='home-nav'>
                <Link to={jwt ? '/home' : '/'} ><img className='icon' src={Icon} /></Link>
                <Link to={jwt ? '/home' : '/'} className='janus'>Janus</Link>
                <Link to='/courses' className={!jwt ? 'l2courses' : 'lcourses'}>Courses</Link>
                <Link to='/charts' className={!jwt ? 'l2charts' : 'lcharts'}>Charts</Link>
                <Link to='/admin' className={admin ? 'kadmin' : 'hide'}>Admin</Link>
                <Link to='/submission' className={jwt ? 'lsubmission' : 'l2submission'}>Forms</Link>
                <Link to='/login' className={jwt ? 'hide' : 'llogin'}>Login</Link>
                <Link to='/signup' className={jwt ? 'hide' : 'lsignup'}>Signup</Link>
                <h6 className={jwt ? 'llogout' : 'hide'} onClick={onSubmit}>Logout</h6>
            </div>
            <div className='homeheader-nav'>
                <h2 className='navform'>Form</h2>
                <p className='formp'>Add Or Change Your Posts</p>
                <Link to="/addedit" className='addchange'>Start Now</Link>  
                <h2 className='posts'>Posts</h2>
                <p className='postsp'>Read Or Check Your Posts</p>
                <Link to="/viewing" className='readcheck'>Start Now</Link>
            </div>
        </div>

        <div className='enroll-div'>
            {linkFunction()}
            <h2 className='ycourses'>Your Courses</h2>
            <div className='linkcourses'>
                <Link className={science1} to="/course/Science"> <img src={Scipic} className="link-lpic"/> <p className='link-lp'>Science</p> </Link>
                <Link className={entrepreneurship1} to="/course/Entrepreneurship"> <img src={Entrepic} className="link-lpic"/> <p className='link-lp'>Entrepreneurship</p></Link>
                <Link className={softskills1} to="/course/Soft Skills"> <img src={Softpic} className="link-lpic"/> <p> className='link-lp'Soft Skills</p></Link>
                <Link className={chemistry1} to="/course/Chemistry"> <img src={Chempic} className="link-lpic"/> <p className='link-lp'>Chemistry</p></Link>
                <Link className={ai1} to="/course/Ai"> <img src={Aipic} className="link-lpic"/> <p className='link-lp'>AI</p></Link>
                <Link className={statistics1} to="/course/Statistics"> <img src={Statspic} className="link-lpic"/> <p className='link-lp'>Statistics</p></Link>
                <Link className={engineering1} to="/course/Engineering"> <img src={Enginpic} className="link-lpic"/> <p className='link-lp'>Engineering</p></Link>
                <Link className={physics1} to="/course/Physics"> <img src={Physpic} className="link-lpic"/> <p className='link-lp'>Physics</p></Link>
                <Link className={economics1} to="/course/Economics"> <img src={Ecopic} className="link-lpic"/> <p className='link-lp'> Economics</p></Link>
                <Link className={sciencehistory1} to="/course/Science History"> <img src={Scihispic} className="link-lpic"/> <p className='link-lp'>Science History</p></Link>
                <Link className={computerscience1} to="/course/Computer Science"> <img src={Compscipic} className="link-lpic"/> <p className='link-lp'>Computer Science</p></Link>
                <Link className={elecengineering1} to="/course/Electrical Engineering"> <img src={Eelecpic} className="link-lpic"/> <p className='link-lp'>Electrical Engineering</p></Link>
                <Link className={webdesign1} to="/course/Web Design"> <img src={Webpic} className="link-lpic"/> <p className='link-lp'>Web Design</p></Link> 
            </div>
        </div>
    </animated.div> 
    );
}
 
export default Home;