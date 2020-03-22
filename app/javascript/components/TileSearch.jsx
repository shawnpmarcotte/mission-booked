import React from 'react'

class TitleSearch extends React.Component {
    constructor(props) {
        super(props);
        localStorage.setItem("userId", props.userId);

        this.state = {
            category: ""
        };
    }


    setCategory = category => {
        this.setState({ category: category });
    };
    render() {
        console.log(localStorage.getItem("userId"));



        handleSearch = () => {
            const queryParams = [
                ["category", this.state.category && this.state.category.value]
            ].reduce((acc, [paramName, paramValue]) => {
                if (!paramValue) return acc;
                const param = `${paramName}=${paramValue}`;
                return acc ? `${acc}&${param}` : `?${param}`;
            }, "");

            Turbolinks.visit(`/events${queryParams}`);
            console.log()
        };



        return (

            <div class="vol_text_container">
                <div class="vol_text">

                    <div class="vol"
                        onClick={this.handleSearch}
                        type="submit">
                        Youth
                    </div>
                    <div class="vol">Environment</div>
                    <div class="vol">Rebuilding</div>
                    <div class="vol">Animals</div>
                    <div class="vol">Homelessness</div>
                </div>
            </div>

        )
    }

}

export default TitleSearch