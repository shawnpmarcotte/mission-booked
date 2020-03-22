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
    render() {
        console.log(localStorage.getItem("userId"));

        return (

            <div className="vol_text_container">
                <div className="vol_text">
                    <a href="/events?category=Animals" ><div className="vol">Animals</div></a>
                    <a href="/events?category=Environment" ><div className="vol">Environment</div></a>
                    <a href="/events?category=Youth" ><div className="vol">Youth</div></a>
                    <a href="/events?category=People" ><div className="vol">People</div></a>
                    <a href="/events?category=Rebuild" ><div className="vol">Rebuild</div></a>
                </div>
            </div >

        )
    }

}

export default TitleSearch