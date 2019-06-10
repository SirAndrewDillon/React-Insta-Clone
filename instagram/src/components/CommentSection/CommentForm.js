import React from 'react';
import { InputWrapper, CommentInput } from './CommentsStyles';
const FontAwesome = require('react-fontawesome');

const CommentForm = props => {
  return (
    <form onSubmit={props.addNewComment}>
      <InputWrapper>
        <CommentInput
          type="text"
          placeholder="Add a comment..."
          name="newComment"
          value={props.newComment}
          onChange={props.commentHandler}
        ></CommentInput>

        <FontAwesome name='rocket' />
        <FontAwesome name='rocket' />
      </InputWrapper>
    </form>
  );
};

export default CommentForm;