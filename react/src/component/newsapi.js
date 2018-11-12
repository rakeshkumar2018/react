import React, { Component } from 'react'
import axios from 'axios';

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: {},
      isLoad: false

    }
  }
  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=f4ac85cd1baa43e5b9bc675036d1f5cf')
      .then(res => {
        console.log(res)
        this.setState({
          news: res.data,
          isLoad: true
        })
      })

  }
  render() {
    // console.log("Articles=", this.state.news.articles[0] && this.state.news.status.articles[0].url)
    return (
      <div>
        <h2> Api called...!!! </h2>
        {this.state.isLoad &&
          <div>
            {this.state.news.articles.map(list => (
              <li> {list.title} </li>
            ))}
          </div>
        }
      </div>
    )
  }
}

export default News;
