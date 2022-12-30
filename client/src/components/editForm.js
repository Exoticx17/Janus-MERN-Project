import React from 'react'
import '../stylesheets/editForm.css'

const EditForm = (props) => {
    return ( 
        <div className='editcontainer'>
            <form onSubmit={props.onSubmit}>
                <h2>Edit Any Post</h2>
                <input type="text" className='editid' placeholder='Id' autoComplete='off' name="id" required/>
                <input type="text" className='title' placeholder='Title' autoComplete='off' name="title" required/>
                <input type="text" className='about' placeholder='About' autoComplete='off' name="about" required/>
                <input type="text" className='body' placeholder='Body' autoComplete='off' name="body" required/>
                <input type="text" className='author' placeholder='Author' autoComplete='off' name="author" required/>
                <input type="text" className='editmessage' placeholder='Message' autoComplete='off' name="message"require/>
                <select className='editaccepted' name="accepted">
                    <option className='o-value' value="" defaultValue>Acceptance</option>
                    <option  className="o-value" value="true">Accept</option>
                    <option className="o-value" value="false">Decline</option>
                    <option className="o-value" value="na">NA</option>
                </select>
                <select className='editsubject' name="subject">
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
                <input type="submit" className='editsubmit'/>
            </form>
        </div>
     );
}
 
export default EditForm;