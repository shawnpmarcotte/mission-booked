import React from 'react'

class TitleSearch2 extends React.Component {
  constructor(props) {
    super(props)
    localStorage.setItem('userId', props.userId)

    this.state = {
      category: ''
    }
  }

  setCategory = category => {
    this.setState({ category: category })
  }
  handleSearch = () => {
    const queryParams = [
      ['category', this.state.category && this.state.category.value]
    ].reduce((acc, [paramName, paramValue]) => {
      if (!paramValue) return acc
      const param = `${paramName}=${paramValue}`
      return acc ? `${acc}&${param}` : `?${param}`
    }, '')

    Turbolinks.visit(`/events${queryParams}`)
    console.log()
  }
  render() {
    console.log(localStorage.getItem('userId'))

    return (
      <div className="vol_text_container">
        <div className="vol_text">
          <button className="vol_home_button">
            <a href="/events?category=People">
              <div className="vol">People</div>
            </a>
          </button>
          <button className="vol_home_button">
            <a href="/events?category=Rebuild">
              <div className="vol">Rebuild</div>
            </a>
          </button>
          <button className="vol_home_button">
            <a href="/events?category=">
              <div className="vol">View All</div>
            </a>
          </button>
        </div>
      </div>
    )
  }
}

export default TitleSearch2
