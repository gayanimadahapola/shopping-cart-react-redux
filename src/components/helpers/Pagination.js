import React, { Component } from 'react';

export default class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    //currentPage, perPage, totalProductCount
  }

  generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.totalProductCount / this.props.perPage); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  generatePageMarkUp = () => {
    const pageMarkUp1 = (
      <li className={(this.props.currentPage <= 1) ? 'page-item disabled' : 'page-item'}>
        <a className="page-link" href="javascript:void(0);" onClick={this.props.handlePreviousPage}>Previous</a>
      </li>
    );
    const pageMarkUp2 = this.generatePageNumbers().map(number => {
      return (
        <li key={number} className={(number == this.props.currentPage) ? 'page-item active' : 'page-item'}>
          <a className="page-link" href="javascript:void(0);" onClick={() => this.props.handleThisPage(number)}>{number}</a>
        </li>
      );
    });
    const pageMarkUp3 = (
      <li className={((this.props.currentPage * this.props.perPage) >= this.props.totalProductCount) ? 'page-item disabled' : 'page-item'}>
        <a className="page-link" href="javascript:void(0);" onClick={this.props.handleNextPage}>Next</a>
      </li>
    );

    return (
      <React.Fragment>
        {pageMarkUp1}
        {pageMarkUp2}
        {pageMarkUp3}
      </React.Fragment>
    );
  }

  render() {
    if (this.props.totalProductCount > this.props.perPage) {
      return(
        <ul className="pagination product-pagination">
          {this.generatePageMarkUp()}
        </ul>
      );
    }
    else {
      return(
        <ul className="pagination product-pagination">
          <li className="page-item disabled"><a className="page-link" href="#">1</a></li>
        </ul>
      );
    }
  }
}
