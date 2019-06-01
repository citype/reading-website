import React, { Component } from 'react';
import './index.css';
import SchoolTop from '../schoolTop'
import SchoolActivity from '../schoolActivity'
import SchoolAbout from '../schoolAbout'
import SchoolContact from '../schoolContact'
import SchoolPay from '../schoolPay'
class School extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <SchoolTop/>
                <SchoolActivity/>
                <SchoolAbout/>
                <SchoolContact/>
                <SchoolPay/>
            </div>
        )
    }
}
export default School;