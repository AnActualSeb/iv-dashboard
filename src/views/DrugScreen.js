import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/drugScreen.css';

//still needs to be made to respond to specific drug information
class DrugScreen extends Component {
    state = {}
    render() {
        return (
            <div className="drugScreen">
                <div className='drugList'>
                    <ListGroup>
                        <ListGroup.Item variant='success' action> Drug 1</ListGroup.Item>
                        <ListGroup.Item variant='success' action> Drug 2</ListGroup.Item>
                        <ListGroup.Item variant='warning' action> Drug 3</ListGroup.Item>
                        <ListGroup.Item variant='danger' action> Drug 4</ListGroup.Item>
                        <ListGroup.Item variant='warning' action> Drug 5</ListGroup.Item>
                        <ListGroup.Item variant='success' action> Drug 6</ListGroup.Item>
                        <ListGroup.Item variant='success' action> Drug 7</ListGroup.Item>
                    </ListGroup>
                </div>

                {/* <div className='drugInfo'> */}
                <div className='drugLocation'>
                    <b>1C</b>
                </div>

                <div className='drugInfo'>
                    <div className='drugLabel'>
                        <b>Milrinone</b>
                    </div>

                    <div className='drugCalcs'>
                        <div className="dosage">
                            <b>0.05</b>
                            <br />
                            mcg/kg/hr
                        </div>

                        <div className="rate">
                            <b>0.10</b>
                            <br />
                            mL/hr
                        </div>
                    </div>
                </div>

                <div className='drugBar'>

                    {/* </div> */}

                </div>
            </div>

        );
    }
}

export default DrugScreen;