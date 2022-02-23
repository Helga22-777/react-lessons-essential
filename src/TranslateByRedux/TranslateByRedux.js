import React from "react";
import { connect } from "react-redux";


const actionEng = {
    type: 'ENG',
};

const actionRus = {
    type: 'RUS',
};

class TranslateByRedux extends React.Component {
    constructor() {
        super();
        this.toEnglish = this.toEnglish.bind(this);
        this.toRussian = this.toRussian.bind(this);
    }

    toEnglish() {
        console.log(this.props);
        this.props.dispatch(actionEng);
        
    }

    toRussian() {
        this.props.dispatch(actionRus);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h2>{this.props.message}</h2>
                <button onClick={this.toEnglish}>Eng</button>
                <button onClick={this.toRussian}>Rus</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        message: state,
    }
}

export default connect(mapStateToProps)(TranslateByRedux);