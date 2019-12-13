import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'


const App = () => {
  return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="Sam"
                           text="Nice blog post!"
                           image={faker.image.avatar()}
                           timeAgo="Today at 4:45 PM" />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail author="Tom"
                           text="Awesome!"
                           image={faker.image.avatar()}
                           timeAgo="Today at 2:00 PM"/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail author="Jane"
                           text="Boring..."
                           image={faker.image.avatar()}
                           timeAgo="Yesterday at 12:03 PM"/>
        </ApprovalCard>

    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
