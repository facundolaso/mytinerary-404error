import React from 'react'
import '../styles/Comments.css'
import { useState } from 'react'
import { useGetCommentsItineraryQuery } from '../features/dataAPI';
import { useNewCommentMutation, useDeleteCommentMutation, useEditCommentMutation } from '../features/commentsSlice';


export default function Comments({ itinerary }) {
    let loggedUser
    if (localStorage.getItem("loggedUser")) {
        loggedUser = JSON.parse(localStorage.getItem("loggedUser"))
    }

    let { data: comments, refetch } = useGetCommentsItineraryQuery(itinerary)

    const [isOpened, setIsOpened] = useState(false);
    function toggle() {
        setIsOpened(wasOpened => !wasOpened);
    }

    const [newCommentOpen, setNewCommentOpen] = useState(false);
    function toggleNewComment() {
        setNewCommentOpen(wasOpened => !wasOpened);
    }

    const [editCommentOpen, setEditCommentOpen] = useState(false);
    function toggleEditComment() {
        setEditCommentOpen(wasOpened => !wasOpened);
    }

    let [comment] = useNewCommentMutation()
    let id = itinerary
    const handleAddComment = async (form) => {
        form.preventDefault()
        const newComment =
        {
            comment: form.target.commentText.value,
            id
        };
        await comment(newComment);
        form.target.reset()
        setNewCommentOpen(false)
        refetch()
    }

    let [editComment] = useEditCommentMutation()
    const handleEditComment = async (form) => {
        form.preventDefault()
        const newEditComment =
        {
            comment: form.target.newCommentText.value,
            id: form.target.id
        };
        await editComment(newEditComment);
        form.target.reset()
        setEditCommentOpen(false)
        refetch()
    }

    const [deleteComment] = useDeleteCommentMutation()
    async function handleDeleteComment(commentId) {
        await deleteComment(commentId);
        refetch()
    }


    const commentView = (comment) => (
        <>
            {isOpened && (
                <div className='comments-info'>
                    <div className='comment-user'>
                        <img src={comment.user.photo} alt="user-photo" />
                        <div>
                            <h5>{comment.user.name} {comment.user.lastName}</h5>
                        </div>
                    </div>
                    <div className='comment-p'>
                        <p>{comment.comment}</p>
                    </div>
                    {localStorage.getItem("loggedUser") ?
                        <div key={comment._id}>
                            {loggedUser.user.id == comment.user._id ?
                                <div>
                                    <button className='itineraryUser-button' onClick={toggleEditComment} type="">Modificar</button>
                                    <>{editCommentOpen && (
                                        <form id={comment._id} className='comment-form' onSubmit={handleEditComment}>
                                            <textarea name='newCommentText' className='text-area-form' rows="5"></textarea>
                                            <input className='itineraryUser-button' type="submit" name="" value="Submit" />
                                        </form>
                                    )}
                                    </>
                                    <button className='itineraryUser-button' onClick={(fn) => handleDeleteComment(comment._id)}>Eliminar</button>
                                </div>
                                :
                                <>
                                    {loggedUser.user.role == "admin" ? <div>
                                        <button className='itineraryUser-button' onClick={(fn) => handleDeleteComment(comment._id)}>Eliminar</button>
                                    </div> : ''}
                                </>
                            }
                        </div>

                        :
                        ''
                    }
                </div>
            )}
        </>
    )


    return (

        <div className='comments-container'>
            <div>
                <button type="" className='comments-button' onClick={toggle}>COMMENTS <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                </svg></button>
            </div>
            {comments?.response.filter(comment => comment.itinerary._id == itinerary).map(commentView)}

            {loggedUser ? <div className='new-comment-container'>

                <button className='new-comment-toggle' onClick={toggleNewComment}>New comment</button>
                {newCommentOpen && (
                    <form className='comment-form' onSubmit={handleAddComment}>
                        <textarea name='commentText' className='text-area-form' rows="5"></textarea>
                        <input className='itineraryUser-button' type="submit" name="" value="Submit" />
                    </form>
                )}
            </div> : ''}


        </div>
    )
}

