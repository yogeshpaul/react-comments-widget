import React from 'react';
import ReactDOM from 'react-dom';
import {Messages} from '../utils/messages';

export default class Story extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
      return (
        <div>
            <h1><a href={Messages.storyUrl1}>{Messages.storyTitle1}</a></h1>
            <div  className="col-xs-12">
                {Messages.storyDesc1}
            </div>
        </div>
        );
    }
}
