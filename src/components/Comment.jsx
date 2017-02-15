import React from 'react';
import AddComment from './AddComment';
import CommentsList from './CommentsList';

export default class Comment extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            editComment : false,
            addChildComment : false,
            comment : this.props.comment
        };
    }

    render(){
      return (
        <div>
            <div className="row">
                <span className="pull-left"><strong>{this.state.comment.userName}</strong></span>
                <span className="pull-right"><strong>{this.state.comment.timeStamp}</strong></span>
            </div>
            <div  className="row">
                <div className="pull-left">
                    {this.state.comment.commentText}
                </div>
            </div>
            {this.displayAddCommentLink()}

            {this.displayChildComments()}          
        </div>
        );
    }

    displayAddCommentLink(){
        if( !this.state.addChildComment ){
            return (<div  className="row">
                <span className="glyphicon glyphicon-plus  pull-right add-comment-link"
                onClick={this.showAddCommentForm.bind(this)} aria-hidden="true"></span>
            </div>);
        }else{
             return (<div  className="row">
                <AddComment isTopLevelComment={false} parent={this} />
            </div>);
        }
    }

    showAddCommentForm(){
        this.setState({
            addChildComment : true
        });
    }

    addComment(newComment){
        let thisComment = this.state.comment;
        thisComment.childComments.push(newComment);
        this.setState({
            comment : thisComment,
            addChildComment : false
        });
    }

    displayChildComments(){
        if(this.state.comment && this.state.comment.childComments && this.state.comment.childComments.length > 0){
            return (
                 <CommentsList comments={this.state.comment.childComments} />
            );
        }

        return null;
    }
}
