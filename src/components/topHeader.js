import React, { Component } from 'react';
import '../styles/topHeader.css';

class TopHeader extends Component {
    state = {}
    render() {
        return (
            <div className='topHeader'>
                <div className='patientName'>
                    <strong>Patient:</strong>
                    <p> Scott, Michael</p>
                </div>

                <div className='mrn'>
                    <strong>MRN:</strong>
                    <p> 176398</p>
                </div>

                <div className='weight'>
                    <strong>Weight:</strong>
                    <p> 13.5kg</p>
                </div>

                <div className='mode'>
                    <strong>Mode:</strong>
                    <p>AN</p>
                </div>
            </div>
        );
    }
}

export default TopHeader;