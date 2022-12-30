import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import {useSpring, animated} from 'react-spring'
import Navbar from '../components/navbarComp';
import '../stylesheets/addedit.css'

const AddEdit = () => {

    const userId = localStorage.getItem('userid')
    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt;

    useEffect(() => {
        if(!jwt){
            window.location.assign('/login') 
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

    const postHandler = (e) => {
        e.preventDefault()
        let title = e.target.ptitle.value;
        let about = e.target.pabout.value;
        let body = e.target.body.pvalue;
        let author = e.target.author.pvalue;
        let category = e.target.subject.pvalue;
        let userID = userId
        fetch(`http://localhost:3002/learning`,{
            method: 'POST',
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
            <div className='maincon'>
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
            <div className='formadd'>
                <h2 className='adderh2'>Add Posts</h2>
                <form onSubmit={postHandler}>
                <input type="text" className='ptitle' placeholder='Title:' autoComplete='off' name="ptitle" required/>
                <input type="text" className='pabout' placeholder='About:' autoComplete='off' name="pabout" required/>
                <input type="text" className='pauthor' placeholder='Author:' autoComplete='off' name="pauthor" required/>
                <select className='psubject' name="psubject" required>
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
                <input type="text" className='pbody' placeholder='Body:' autoComplete='off' name="pbody" required/>
                <input type="submit" className='psubmit'/>
            </form>
            </div>
            </div>
        </animated.div>
     );
}
 
export default AddEdit;
