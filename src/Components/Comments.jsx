import React from 'react';
import man1 from '../Images/man1.jpg';
import man2 from '../Images/man2.jpg';
import woman from '../Images/woman.jpg';
import './Comments.css';

const Comments = () => {
    const commentsData = [
        {
            id: 1,
            name: "John Doe",
            image: man1,
            comment: "Great project! I really like the design and the photography.",
            timestamp: "2025-02-01 10:23:45",
        },
        {
            id: 2,
            name: "Jane Smith",
            image: man2,
            comment: "Amazing work, I love the concept behind it!",
            timestamp: "2025-02-01 14:05:10",
        },
        {
            id: 3,
            name: "Alice Johnson",
            image: woman,
            comment: "This looks fantastic. The colors and layout are very appealing.",
            timestamp: "2025-02-01 15:33:00",
        },
        {
            id: 4,
            name: "Bob Martin",
            image: man1,
            comment: "Nice job! The branding is spot on.",
            timestamp: "2025-02-01 16:21:25",
        },
        {
            id: 5,
            name: "Emily Brown",
            image: woman,
            comment: "Incredible work, I am definitely going to follow your future projects.",
            timestamp: "2025-02-01 14:05:10",
        },
    ];
    return (
        <div className="comments">
            <div className="commentsHeader">
                <span className="material-icons-outlined">
                    forum
                </span>
                <h3> {commentsData.length} Comments </h3>
            </div>
            {commentsData.map((comment) => {
                return (
                    <div className="comment" key={comment.id}>
                        <div className="commentHeader">
                            <div className="left">
                                <img src={comment.image} alt={comment.name} />
                                <h5>{comment.name} </h5> <p>says :</p>
                            </div>
                            <p>{comment.timestamp}</p>
                        </div>
                        <p>{comment.comment}</p>
                    </div>
                )
            })}
            <div className="reply">
                <h3>Leave a Reply</h3>
                <p>Your email address will not be published. Required fields are marked *</p>
                <div className="form">
                    <label htmlFor="comment">Comment *</label>
                    <textarea name="comment" id="comment"></textarea>
                    <div className="inputs">
                        <div className="input">
                            <label htmlFor="name">Name *</label>
                            <input type="text" name="name" id="name" />
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email *</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div className="input">
                            <label htmlFor="sum">1 + 7 = ?</label>
                            <input type="text" name="sum" id="sum" />
                        </div>
                    </div>
                    <div className="check">
                        <input type="checkbox" name="save" id="save" />
                        <label htmlFor="save">Save my name, email, and website in this browser for the next time I comment.</label>
                    </div>
                    <div className="btn">
                        <button>Post Comment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments