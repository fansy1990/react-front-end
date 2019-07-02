import React from 'react';

import DemoPopup from './DemoPopup.js';
import DemoPopup2 from './DemoPopup2.js';
import './PopupParent.css';

const components = {
    demo: DemoPopup,
    demo2: DemoPopup2
};
export default class PopupParent extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            child_name : props.child_name
        };
    }

    render(){
        const SpecificStory = components[this.state.child_name];

        return (<SpecificStory />);
    }
}