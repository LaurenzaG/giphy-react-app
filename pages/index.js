import react from 'react'
import Title from '../components/Title'
import "./index.scss"
import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://api.giphy.com'
})


export default class index extends react.Component {
  state = {
      gifs: null
  }

  handleChange = (e)=> {
    const {value} = e.target

    api.get('/v1/gifs/search', {
      api_key: '6PEDpM6dvi8id8sV5EZvvpqjly3IR7Jx',
      q: value
    })
      .then(response => this.setState({gifs: response.data.data}))
  }

  renderGifs = ()=> {
    const {gifs} = this.state
    if(!gifs) return null

    return gifs.map((gif, i)=> {
       const {url, width, height} = gif.images.original
       return <img src={url}/>
    })
  }

  render() {

    return (
    	<div className="myApp">
        <Title text="content 1" color="yellow"/>
        <Title text="content 2" color="blue"></Title>
        <input onChange={this.handleChange} type="text"/>
        <div>
          {this.renderGifs()}
        </div>
        // mooi stylen
        //creeer je eigen react component
    	</div>
    )
  }
}
