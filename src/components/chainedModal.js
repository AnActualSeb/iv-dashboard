import React, { Component } from 'react';
import data from "../data/drugData.json";

import ModalBackdrop from '../components/ModalBackdrop';


class ChainedModals extends Component {
    state = {
        currIndex: 0,
        showModal: true
    };

    render() {
        const { modalList } = this.props;
        const { currIndex, showModal } = this.state;
        const ModalComponent = modalList[currIndex];

        return (
            <div>
                {showModal && <ModalBackdrop />}
                {/* {showModal} */}
                <ModalComponent
                    step={currIndex}
                    onClickNext={this._handleClickNext}
                    backdrop={false}
                    show={showModal}
                    onHide={this._handleModalHide}
                    data={data}
                />
            </div>
        );
    }

    _handleClickNext = () => {
        const { modalList } = this.props;
        const { currIndex } = this.state;

        if (currIndex < modalList.length - 1) {
            this.setState({ currIndex: currIndex + 1 });
        } else {
            this.setState({ showModal: false });
        }
    };

    _handleModalHide = () => {
        this.setState({ showModal: false });
    };
}

export default ChainedModals;