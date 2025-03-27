import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize:9,
        category: 'general;'

      }

      static defaultProps = {
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,
     
      }
    articles = [
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Alberta premier says she's prepared to take Ottawa to court over housing deals | CBC News",
            "description": "Alberta Premier Danielle Smith says she's willing to go to court to block the federal government from going straight to municipalities to make deals on housing. The federal government says that approach will only slow down construction.",
            "url": "http://www.cbc.ca/news/politics/alberta-ottawa-housing-conflict-1.7172119",
            "urlToImage": "https://i.cbc.ca/1.7157595.1711570816!/cpImage/httpImage/image.jpg_gen/derivatives/16x9_620/alta-immigration-20240327.jpg",
            "publishedAt": "2024-04-13T16:52:25.0513203Z",
            "content": "Federal officials and Alberta Premier Danielle Smith clashed again on Friday over steps Ottawa is taking to boost housing construction across the country, as Smith raised the spectre of a legal battl… [+4600 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Fear of China gnaws at summit in Washington | CBC News",
            "description": "A subcurrent of worry pulsed through a summit involving distant Asian nations this week in Washington, but the event also offered a window into angst of global concern: Fears of a military standoff with China.",
            "url": "http://www.cbc.ca/news/world/japan-philippines-summit-dc-1.7172889",
            "urlToImage": "https://i.cbc.ca/1.7172945.1712965692!/fileImage/httpImage/image.JPG_gen/derivatives/16x9_620/usa-japan-kishida-marcos.JPG",
            "publishedAt": "2024-04-13T16:52:23.5496195Z",
            "content": "A subcurrent of worry pulsed through a summit this week in Washington between the leaders of the U.S., Japan and the Philippines.\r\nThe concern in question holds global dimensions. It involved a gnawi… [+5717 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "ANALYSIS | Shooting blanks: Why so many Canadian defence policies fail to launch | CBC News",
            "description": "With absolutely no exceptions, every defence policy presented by the Canadian government over the past five decades has presented a vision of the world beyond our borders going to hell in a handbasket. The wars may be different, the adversaries might change, …",
            "url": "http://www.cbc.ca/news/politics/defence-policy-canadian-forces-trudeau-nato-1.7172835",
            "urlToImage": "https://i.cbc.ca/1.7133677.1709598502!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/raven-indigenous-youth-initiative-20180821.jpg",
            "publishedAt": "2024-04-13T16:52:22.2062034Z",
            "content": "With absolutely no exceptions, every defence policy presented by the Canadian government over the past five decades has presented a vision of the world beyond our borders going to hell in a handbaske… [+7306 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "6 people and suspect killed in shopping centre stabbing attack in Sydney, Australia | CBC News",
            "description": "An attacker who fatally knifed six people in a Sydney mall was shot dead by police in Sydney's beachside suburb of Bondi on Saturday, police said, as hundreds fled the scene.",
            "url": "http://www.cbc.ca/news/world/australia-mall-stabbing-1.7173094",
            "urlToImage": "https://i.cbc.ca/1.7173095.1712999529!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/2147763692.jpg",
            "publishedAt": "2024-04-13T16:52:17.1918267Z",
            "content": "An attacker who fatally knifed six people in a Sydney mall was shot dead by police in the beachside suburb of Bondi on Saturday, police said, as hundreds fled the scene.\r\nThe assailant was shot by a … [+2796 chars]"
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "ANALYSIS | Red Deer at 1 million? Danielle Smith dreams of a new Alberta metropolis | CBC News",
            "description": "Growing a mid-sized city's population 10 times over isn't easy. It's the premier's ambition, but local leaders aren't so sure.",
            "url": "http://www.cbc.ca/news/canada/calgary/red-deer-one-million-danielle-smith-1.7172208",
            "urlToImage": "https://i.cbc.ca/1.7172209.1712953671!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/red-deer-times-one-million.jpg",
            "publishedAt": "2024-04-13T16:37:16.7531517Z",
            "content": "There's thinking big. There's thinking really big or even really, really big.\r\nBut I'm not sure how many reallies I'd need to fairly capture what Premier Danielle Smith is saying about Red Deer.\r\nShe… [+7930 chars]"
        },
        {
            "source": {
                "id": "blasting-news-br",
                "name": "Blasting News (BR)"
            },
            "author": "Blasting News",
            "title": "Libertadores | Blasting News",
            "description": "A Libertadores é, junto com a Liga dos Campeões da Europa, o campeonato de futebol mais importante do mundo. Todas as notícias da Taça Libertadores da América você acompanha aqui",
            "url": "https://br.blastingnews.com/news/tag/copa-bridgestone-libertadores/",
            "urlToImage": "https://staticr1.blastingcdn.com/media/tag/7/7161/1280x330/b_1280x330/5625016015629665f75e9564be8a_c.jpg",
            "publishedAt": "2024-04-13T14:52:26.5498177Z",
            "content": null
        },
        {
            "source": {
                "id": "blasting-news-br",
                "name": "Blasting News (BR)"
            },
            "author": "Blasting News",
            "title": "Flamengo | Blasting News",
            "description": "O Flamengo foi fundado em 17 de novembro de 1895, inicialmente para disputas de remo, tanto que seu nome oficial é Clube de Regatas do Flamengo. A sua sede é no Rio de Janeiro, no bairro que tem o",
            "url": "https://br.blastingnews.com/news/tag/flamengo/",
            "urlToImage": "https://staticr1.blastingcdn.com/media/tag/2/2799/1280x330/b_1280x330/5245716015726385f760f1e26c42_c.jpg",
            "publishedAt": "2024-04-13T14:52:25.378234Z",
            "content": null
        },
        {
            "source": {
                "id": "blasting-news-br",
                "name": "Blasting News (BR)"
            },
            "author": "Blasting News",
            "title": "Futebol | Blasting News",
            "description": "O futebol é o esporte mais assistido e praticado no mundo. Acompanhado de paixões inexplicáveis por clubes e atletas, a modalidade causa os mais diversos sentimentos na população mundial. Aqui",
            "url": "https://br.blastingnews.com/news/tag/futebol/",
            "urlToImage": "https://staticr1.blastingcdn.com/media/tag/1/1817/1280x330/b_1280x330/7090616013019555f71edc3bbbea_c.jpg",
            "publishedAt": "2024-04-13T14:52:17.5969179Z",
            "content": null
        },
        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Iran seizes Israel-linked container ship in Strait of Hormuz | CBC News",
            "description": "Iran's Revolutionary Guards seized an Israeli-linked cargo ship in the Strait of Hormuz on Saturday, days after Tehran said it could close the crucial shipping route and warned it would retaliate for an Israeli strike on its Syria consulate.",
            "url": "http://www.cbc.ca/news/world/iran-cargo-ship-seized-1.7173115",
            "urlToImage": "https://i.cbc.ca/1.7173116.1713013453!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/mideast-tensions.jpg",
            "publishedAt": "2024-04-13T14:22:28.4564108Z",
            "content": "Iran's Revolutionary Guards seized an Israeli-linked cargo ship in the Strait of Hormuz on Saturday, days after Tehran said it could close the crucial shipping route and warned it would retaliate for… [+3302 chars]"
        },

    ]

    constructor() {
        super();
        console.log('Hello i am constructor')
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=d08b035914594930b5c32e2fe169efb5&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parseDate = await data.json()
        this.setState({ articles: parseDate.articles, 
            totalResults: parseDate.totalResults,
            loading:false
         })

        // console.log(parsedate)

    }
    clickPrePage = async () => {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=d08b035914594930b5c32e2fe169efb5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseDate = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parseDate.articles,
            loading:false


        })
    }
    clickNexPage = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&category=${this.props.category}&apiKey=d08b035914594930b5c32e2fe169efb5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parseDate = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parseDate.articles,
                loading:false
            })
        }
    }

    render() {
        return (

            <div className='container my-5'>
                <h2 className='text-center'>NewsApp -Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row my-4">

                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description
                            } imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} />
                        </div>

                    })}


                </div>


                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.clickPrePage} className="btn btn-dark ">&larr; Previous </button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} onClick={this.clickNexPage} className="btn btn-dark ">Next &rarr;</button>

                </div>
            </div>
        )
    }
}

export default News
