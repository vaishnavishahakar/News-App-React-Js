import React, { Component } from "react"

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "17rem", height: "22rem", boxShadow: "0 2px 10px 0 rgba(0,0,0,0.2)" }}>
                    <img src={!imageUrl ? "https://www.team-bhp.com/sites/default/files/styles/large/public/toyota-innova-hycross-sunroof-moonroof0.jpg" : imageUrl} className="card-img-top" alt="..." style={{ width: "16.9rem", height: "10rem" }} />
                    <div className="card-body" >
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-dark my-3">Read More &rarr;</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;