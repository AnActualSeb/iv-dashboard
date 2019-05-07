import React, { Component } from 'react';
import DrugCard from '../components/drugCard';

class Dashboard extends Component {
    state = {}
    render() {
        return (
            <div>
                <DrugCard />
            </div>
        );
    }
}

export default Dashboard;