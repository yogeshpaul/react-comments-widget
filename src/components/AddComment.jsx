import React from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import moment from 'moment';

import {Messages} from '../utils/messages';

export default class AddComment extends React.Component{

    constructor(props){
        super(props);
        let isTopLevelComment = this.props.isTopLevelComment ? true : false;
        this.state = {
            isTopLevelComment : isTopLevelComment
        }
    }

    render(){
      return (
        <div className="col-xs-12">
            <Form inline ref="commentsForm">
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Add Comment:</ControlLabel>
                    {' '}
                    <FormControl ref="commentInput" type="text" placeholder="Please add your comment here...." className="form-control" />
                </FormGroup>
                {'    '}
                <FormGroup controlId="formInlineName">
                    <ControlLabel>Name</ControlLabel>
                    {' '}
                    <FormControl ref="userNameInput" type="text" placeholder="Enter your name" />
                </FormGroup>
                
                {'  '}
                 <Button bsSize="small" bsStyle="primary" onClick={this.addComment.bind(this)}>
                        Submit
                 </Button>
                 {'  '}
                {this.displayCancelButton()}
                
            </Form>
        </div>
        );
    }

    displayCancelButton(){
        if( !this.state.isTopLevelComment){
            <Button bsSize="small" bsStyle="default" onClick={this.cancelAddComment.bind(this)}>
                    Cancel
            </Button>
        }

        return null;
    }

    addComment(event){
        console.log("Adding new top level comment: " + this.state.isTopLevelComment);
        var commentText = ReactDOM.findDOMNode(this.refs.commentInput).value;
        var userName = ReactDOM.findDOMNode(this.refs.userNameInput).value;
        let currentTime = moment(currentTime).format("MM/DD/YYYY HH:mm");

        let newComment = {
            commentId : 1,
            userName : userName,
            timeStamp : currentTime,
            commentText : commentText,
            parentCommentId : null,
            childComments : []
        };
        this.props.parent.addComment(newComment);
    }

    cancelAddComment(event){

    }
}
