import React, { Component } from 'react';
import data from "../data/VTBIData.json";

import ModalBackdrop from '../components/ModalBackdrop';


class ChainedModals extends Component {
    state = {
        currIndex: 0,
        showModal: true,
        verified: false
    };

    render() {
        const { modalList } = this.props;
        const { currIndex, showModal, verified } = this.state;
        const ModalComponent = modalList[currIndex];

        return (
            <div>
                {showModal && <ModalBackdrop />}
                {/* {showModal} */}
                <ModalComponent
                    step={currIndex}
                    onClickNext={this._handleClickNext}
                    onClickBack={this._handleClickBack}
                    backdrop={false}
                    show={showModal}
                    onHide={this._handleModalHide}
                    data={data}
                    verified={verified}
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

    _handleClickBack = () => {
        const { currIndex } = this.state;

        if (currIndex < 1) {
            this.setState({ showModal: false });
        } else {
            this.setState({ currIndex: currIndex - 1 });
        }
    };

    _handleModalHide = () => {
        this.setState({ showModal: false });
    };
}

export default ChainedModals;