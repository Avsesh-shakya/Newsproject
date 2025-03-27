import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl ,newsUrl ,author}=this.props;
        return (
            <div className='my-4' >
                

                {/* create to card */}
                <div className="card" >
                    

                        <p className="text-center">{author}</p>
                    <img src={!imageUrl ?'https://static.vecteezy.com/system/resources/thumbnails/006/299/370/original/world-breaking-news-digital-earth-hud-rotating-globe-rotating-free-video.jpg':imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsUrl} target='blank' className="btn btn-primary">Read more</a>
                    </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
