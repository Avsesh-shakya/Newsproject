import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title,description,imageUrl ,newsUrl ,author}=this.props;
        return (
            <div className='my-4' >
                

                {/* create to card */}
                <div className="card" style={{width: "18rem"}}>
                    

                        <p className="text-center">{author}</p>
                    <img src={imageUrl} className="card-img-top" alt="..." />
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
