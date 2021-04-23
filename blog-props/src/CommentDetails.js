import React from 'react';

const CommentDetails = (props) => {
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"></img>
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.name}
                    </a>
                    <div className="metadata">
                        <span className="date">Today at {props.time}</span>
                    </div>
                    <div className="text">{props.comment}</div>
                </div>
            </div>
        </div>
    );
}

export default CommentDetails;