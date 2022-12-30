import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie';
import '../stylesheets/acceptForm.css'
import { Link } from 'react-router-dom';

const AcceptForm = (props) => {

    const [cookie,setCookie] = useCookies()
    const jwt = cookie.jwt

    const submitHandler = async (e) => {
        e.preventDefault()
        let message = e.target.message.value
        let accepted = e.target.accept.value
        let learningId = props.id
        console.log(e.target.message.value)
        console.log(e.target.accept.value)
        console.log(accepted)
        console.log(message)
        fetch(`http://localhost:3002/learning/change/${learningId}?changeTo=${accepted}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'}, 
            redirect: 'follow',
            credentials: 'include'
        })
        .then(
            console.log('worked')
        )
        fetch(`http://localhost:3002/learning/message/${learningId}?newmessage=${message}`,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            redirect: 'follow',
            credentials: 'include'
        })
        if(accepted === 'delete'){
            fetch(`http://localhost:3002/learning/${learningId}`,{
                method: 'DELETE',
                headers: {'Content-Type': 'application/json'},
                redirect: 'follow',
                credentials: 'include'
            })
        }
         
    }
    let link = `/post/${props.id}`

    return ( 
        <div className='acceptcontainer'>
           <div className='linky'>
                <Link className='titley' to={link}><h2>{props.title}</h2></Link>
                <Link className='abouty' to={link}><h2>{props.about}</h2></Link>
                <form onSubmit={submitHandler}>
                    <input type="text" name='message' placeholder='Message' className='message' autoComplete='off' required/>
                    <select className='accepted' name="accept" required>
                        <option className='o-value' value="" defaultValue>Choose</option>
                        <option  className="o-value" value="true">Accept</option>
                        <option className="o-value" value="false">Decline</option>
                        <option className="o-value" value="delete">Delete</option>
                    </select>
                    <input type="submit" className='acceptsubmit'/>
                </form>
            </div> 
        </div>
        
     );
}
 
export default AcceptForm;