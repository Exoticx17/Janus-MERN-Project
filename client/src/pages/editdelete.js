import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import Navbar from '../components/navbarComp'
import '../stylesheets/editdelete.css'
import {useSpring, animated} from 'react-spring'

const EditDelete = () => {

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
            })
        } 
    })


    const editHandler = (e) => {
        e.preventDefault()
        let id = e.target.id.value;
        let title = e.target.title.value;
        let about = e.target.about.value;
        let body = e.target.body.value;
        let author = e.target.author.value;
        let category = e.target.subject.value;
        let userID = userId
        fetch(`http://localhost:3002/learning/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'}, 
            redirect: 'follow',
            credentials: 'include',
            body: JSON.stringify({
                title: title,
                about: about,
                body: body,
                author: author,
                category: category,
                message: 'null',
                accepted: 'na',
                user: userID
            })
        })
    }

    const delHandler = (e) => {
        e.preventDefault()
        let id = e.target.id.value;
        fetch(`http://localhost:3002/learning/${id}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}, 
            redirect: 'follow',
            credentials: 'include'
        })
    }

    return ( 
        <animated.div className='container' style={fade}>
            <Navbar />
            <div className='formcomp'>
            <div className='formedit'>
                <h2 className='editerh2'>Change Posts</h2>
            <form onSubmit={editHandler}>
                <input type="text" className='idedit' placeholder='ID:' autoComplete='off' name="id" required/>
                <input type="text" className='edittitle' placeholder='Title:' autoComplete='off' name="title" required/>
                <input type="text" className='editabout' placeholder='About:' autoComplete='off' name="about" required/>
                <input type="text" className='editauthor' placeholder='Author:' autoComplete='off' name="author" required/>
                <select className='esubject' name="subject" required>
                    <option value="" defaultValue className='h-value'>Subject</option>
                    <option value="Science" className='h-value'>Science</option>
                    <option value="Entrepreneurship" className='h-value'>Entrepreneurship</option>
                    <option value="Soft Skills" className='h-value'>Soft Skills</option>
                    <option value="Chemistry" className='h-value'>Chemistry</option>
                    <option value="AI" className='h-value'>AI</option>
                    <option value="Statistics" className='h-value'>Statistics</option>
                    <option value="Engineering" className='h-value'>Engineering</option>
                    <option value="Economics" className='h-value'>Economics</option>
                    <option value="Science History" className='h-value'>Science History</option>
                    <option value="Computer Science" className='h-value'>Computer Science</option>
                    <option value="Electrical Engineering" className='h-value'>Electrical Engineering</option>
                    <option value="Web Design" className='h-value'>Web Design</option>
                </select>
                <input type="text" className='editbody' placeholder='Body:' autoComplete='off' name="body" required/>
                <input type="submit" className='homesubmit'/>
            </form>
            </div>
            <div className='delcomp'>
                <h2 className='deleterh2'>Delete Posts</h2>
                <form onSubmit={delHandler} >
                    <input type="text" className='iddelete' placeholder='ID:' autoComplete='off' name="id" required/>
                    <input type="submit" className='homeidsubmit'/>
                </form>
            </div>
            </div>
        </animated.div>
     );
}
 
export default EditDelete
