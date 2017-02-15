import React from 'react';
import ReactDOM from 'react-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';

import {Messages} from '../utils/messages';
import Comment from './Comment';


export default class CommentsList extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
      const commentsList = this.props.comments.map(function(comment){
           return (
                <ListGroupItem>
                    <Comment key={comment.commentId} comment={comment} />
                </ListGroupItem>
            );
     });

      return (
          <ListGroup>
              {commentsList}
         </ListGroup>
        );
    }
}
