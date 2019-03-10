import react from 'react'
import "./title.scss"

export default class Title extends react.Component {
  render() {
    const {color, text} = this.props
    return (
    	<h1 style={{color: color}}>{text}</h1>
    )
  }
}
