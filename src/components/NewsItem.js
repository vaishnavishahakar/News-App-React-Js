import React from "react"
import './card.css';


const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card newsCard news-Slide-up" style={{ boxShadow: "0 2px 10px 0 rgba(0,0,0,0.2)" }}>
                
                <div style={{display:'flex', justifyContent: 'flex-start', position: 'absolute', left: '0'}}>
                <span className="badge bg-danger"> {source} </span>
                </div> 
                    
                    <img src={!imageUrl ? "https://www.team-bhp.com/sites/default/files/styles/large/public/toyota-innova-hycross-sunroof-moonroof0.jpg" : imageUrl} className="card-img-top" alt="..."  />
                    <div className="card-body newsCaption px-2 py-1" >
                        <h5 className="card-title newsCaption-title ">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm readmore my-3">Read More</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem;