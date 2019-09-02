import React, { Component } from 'react'

export default class ProductDetailText extends Component {
    render() {
        return (
            <div>
                 <span className="title">Model:</span>
                <span className="modeltitle">
                  <i> {this.props.item.name}</i>
                </span>{" "}
                <br />
                <span className="title">Price: </span>
                <span className="modeltitle">
                  <i> {this.props.item.wage} ₺</i>
                </span>{" "}
                <div className="title">
                  <br />
                  <b>Some Info About Product:</b>
                </div>
                <br />
                <p>{this.props.item.description}</p>
                <br />
                <hr />
            </div>
        )
    }
}
