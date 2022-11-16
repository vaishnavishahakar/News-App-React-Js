import React from "react"

const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem", height: "25rem", boxShadow: "0 2px 10px 0 rgba(0,0,0,0.2)" }}>
                
                <div style={{display:'flex', justifyContent: 'flex-start', position: 'absolute', left: '0'}}>
                <span className="badge bg-danger"> {source} </span>
                </div> 
                    
                    <img src={!imageUrl ? "https://www.team-bhp.com/sites/default/files/styles/large/public/toyota-innova-hycross-sunroof-moonroof0.jpg" : imageUrl} className="card-img-top" alt="..." style={{ width: "17.5=9rem", height: "10rem" }} />
                    <div className="card-body" >
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="blank" className="btn btn-sm btn-dark my-3">Read More &rarr;</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem;