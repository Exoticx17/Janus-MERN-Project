import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import '../stylesheets/cSubject.css'
import {useSpring, animated} from 'react-spring'
import Navbar from '../components/navbarComp';

const CSubject = () => {

    const {category} = useParams()
    const userId = localStorage.getItem('userid')
    const [data,setData] = useState([]) 
    const [page,setPage] = useState(0)
    useEffect(() => {
        fetch(`http://localhost:3002/learning/double?p=${page}&accepted=true&category=${category}`,{
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
            console.log(page)
    })
    const enrollHandler = () => {
        fetch(`http://localhost:3002/user/enroll?userId=${userId}&subject=${category}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include'
            })
    }
    const derollHandler = () => {
        fetch(`http://localhost:3002/user/deroll?userId=${userId}&subject=${category}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include'
            })
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
    const prevHandler = ()=> {
        window.setTimeout(() => {
            setPage(page - 1)
        },250)
    }
    const nextHandler = ()=> {
        window.setTimeout(() => {
            setPage(page + 1)
        },250)
    }
    
    return ( 
        <animated.div className='subjectcontainer' style={fade}>
            <Navbar />
            <div className='piccontain'>
                <h1 className='h2pic'>Course Posts</h1>
            </div>
            <div className='whiteout'>
                <h1 className='header' >{category} Posts</h1>
                <button className='enroll' onClick={enrollHandler}>Enroll</button>
                <button className='deroll' onClick={derollHandler}>Deroll</button>
                {data.map(data => (
                    <div key={data._id} className='subdiv'>
                        <Link className='subtitle' to={'/post/' + data._id}>{data.title}</Link>
                        <Link className='subauthor' to={'/post/' + data._id}>{data.author}</Link>
                        <Link className='subabout' to={'/post/' + data._id}>{data.about}</Link>
                        <Link className='subcategory' to={'/post/' + data._id}>{data.category}</Link>
                    </div>
                ))}
                <input type="button" className='previous' value="Previous Page" onClick={prevHandler} />
                <input type="button" className='next' value="Next Page" onClick={nextHandler} />
            </div>
        </animated.div>
     );
}
 
export default CSubject;