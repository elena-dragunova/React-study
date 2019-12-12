import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail from './CommentDetail'
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam"
                     text="Nice blog post!"
                     image={faker.image.avatar()}
                     timeAgo="Today at 4:45 PM" />
      <CommentDetail author="Tom"
                     text="Awesome!"
                     image={faker.image.avatar()}
                     timeAgo="Today at 2:00 PM"/>
      <CommentDetail author="Jane"
                     text="Boring..."
                     image={faker.image.avatar()}
                     timeAgo="Yesterday at 12:03 PM"/>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
