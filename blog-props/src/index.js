import React from 'react';
import ReactDOM from 'react-dom';

import CommentDetails from './CommentDetails';

import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetails time={"8:20PM"} name={"Sam"} comment={"Amazing content!"}/>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetails time={"7:45PM"} name={"John"} comment={"Lol "}/>
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetails time={"11:21PM"} name={"Sigma"} comment={"WOW"}/>
            </ApprovalCard>
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));