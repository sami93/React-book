import React, { Component } from 'react';

class Helper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    };
    this.widthDeviceMobile = 767;
    this.setModalRef = this.setModalRef.bind(this);
    this.handleClickOutsideModal = this.handleClickOutsideModal.bind(this);
  }

  showHelperDesktop = () => {
    if (window.innerWidth > this.widthDeviceMobile)
      this.setState({ isShow: true });
  };

  closeHelperDeskop = () => {
    if (window.innerWidth > this.widthDeviceMobile)
      this.setState({ isShow: false });
  };

  showPopupMobile = () => {
    if (window.innerWidth < this.widthDeviceMobile)
      this.setState({ isShow: true }, () => {
        document.body.classList.add('th-overflow');
      });
  };

  closePopupMobile = () => {
    if (window.innerWidth < this.widthDeviceMobile)
      this.setState({ isShow: false }, () => {
        document.body.classList.remove('th-overflow');
      });
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutsideModal);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutsideModal);
  }

  /**
   * Set the Modal ref
   */
  setModalRef(node) {
    this.modalRef = node;
  }

  /**
   * Mobile : Close Modal if clicked on outside of element
   */
  handleClickOutsideModal(event) {
    if (
      this.modalRef &&
      !this.modalRef.contains(event.target) &&
      window.innerWidth < this.widthDeviceMobile
    ) {
      this.closePopupMobile();
    }
  }

  render() {
    return (
      <div
        className={
          'text-helper on-top siv-v2-doc-fournir ' +
          (this.state.isShow ? 'is-show' : '')
        }>
        <span
          onMouseEnter={this.showHelperDesktop}
          onMouseLeave={this.closeHelperDeskop}
          onClick={this.showPopupMobile}>
          {this.props.text}
        </span>

        <div className="th-wrap" ref={this.setModalRef}>
          <div className="icn-x" onClick={this.closePopupMobile} />
          <div className="th-content">{this.props.helper}</div>
        </div>
      </div>
    );
  }
}
export default Helper;
