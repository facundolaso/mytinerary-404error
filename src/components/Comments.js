import React from 'react'
import '../styles/Comments.css'
import { useState } from 'react'
import { useGetCommentsItineraryQuery } from '../features/dataAPI';


export default function Comments({itinerary}) {

    let {data : comments} = useGetCommentsItineraryQuery(itinerary)

    const [isOpened, setIsOpened] = useState(false);
    
    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }
        
    const commentView = (comment) => (
        <>
            {isOpened && (
            <div className='comments-info' >
                <div className='comment-user'>
                    <img src={comment.user.photo} alt="user-photo" />
                    <div>
                        <h5>{comment.user.name} {comment.user.lastName}</h5>
                    </div>
                </div>
                <div className='comment-p'>
                    <p>{comment.comment}</p>
                </div>
            </div>
            )}
            </>
    )
    

        return (
    
        <div className='comments-container'>
            <div>
                <button type="" className='comments-button' onClick={toggle}>COMMENTS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                </svg></button>
            </div>
            {comments?.response.filter(comment => comment.itinerary._id == itinerary).map(commentView) }
        </div>
    )
}

