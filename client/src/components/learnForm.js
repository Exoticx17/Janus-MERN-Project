import React from 'react'
import '../stylesheets/learnForm.css'

const LearnForm = (props) => {
    return ( 
        <div className='formcontainer'>
            <form onSubmit={props.onSubmit}>
                <h2 className='form-h2'>{props.header}</h2>
                <input type="text" name="title" placeHolder="Title" autoComplete='off' className='learntitle'required/>
                <input type="text" name="about" placeHolder="About" autoComplete='off' className='learnabout' required/>
                <input type="text" name="body" placeHolder="Body" autoComplete='off' className='learnbody' required/>
                <input type="text" name="author" placeHolder="Author" autoComplete='off' className='learnauthor' required/>
                <select className='learnsubject' name="subject" required>
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
                <input type="submit" className='learnsubmit' />
            </form>
        </div>
     );
}
 
export default LearnForm;