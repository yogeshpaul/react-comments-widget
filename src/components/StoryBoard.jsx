import React from 'react';
import ReactDOM from 'react-dom';
import {Messages, SampleComments} from '../utils/messages';

import Story from './Story';
import AddComment from './AddComment';
import CommentsList from './CommentsList';

export default class StoryBoard extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            comments : SampleComments
        };
    }

    render(){
        return (
            <div>
                <div>
                    <Story />
                    <br /> <br /><br />
                    <AddComment parent={this} isTopLevelComment={true} />
                    <br /> <br /><br />
                    <CommentsList comments={this.state.comments} />
               </div>
            </div>
        );
    }

    addComment(newComment){
        let currentComments = this.state.comments;
        currentComments.push(newComment);
        this.setState({
            comments : currentComments
        });
    }
}
