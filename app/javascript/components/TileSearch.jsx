import React from 'react'

class TitleSearch extends React.Component {
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
            <a href="/events?category=Animals">
              <div className="vol">Animals</div>
            </a>
          </button>
          <button className="vol_home_button">
            <a href="/events?category=Environment">
              <div className="vol">Environment</div>
            </a>
          </button>
          <button className="vol_home_button">
            <a href="/events?category=Youth">
              <div className="vol">Youth</div>
            </a>
          </button>
        </div>
      </div>
    )
  }
}

export default TitleSearch
