import React from 'react' ;
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';

function Feed() {
  return (
    <div className='Feed'>
        
            <div className='Feed__input'>
                <CreateIcon />
                <form> 
                    <input type='text' placeholder='Create a post'/>
                    <button type='submit'> Send</button>
                </form>
            </div>
     </div>
  );
}

export default Feed