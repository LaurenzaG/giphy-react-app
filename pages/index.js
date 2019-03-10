import react from 'react'
import Title from '../components/Title'
import "./index.scss"

export default class index extends react.Component {
  render() {
    return (
    	<div className="myApp">
        <Title text="content 1" color="yellow"/>
        <Title text="content 2" color="blue"></Title>
        <input type="text"/>
    	</div>
    )
  }
}
