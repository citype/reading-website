import React, { Component } from 'react';
import './index.css';
import ReadTop from '../readTop'
import ReadModule from '../readModule'
import ReadFounction from '../readFounction'
import ReadSystem from '../readSystem'
import ReadTarget from '../readTarget'
import ReadTest from '../readTest'

class ReadInfo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <ReadTop/>
                <ReadModule/>
                <ReadFounction/>
                <ReadSystem/>
                <ReadTest/>
                <ReadTarget/>
            </div>
        )
    }
}
export default ReadInfo;