import React, {Component} from 'react';
import './App.css'
import {shortLink} from "./store/actions/productsActions";
import connect from "react-redux/es/connect/connect";
import nanoid from 'nanoid';


class App extends Component {

    state = {
        originalUrl: '',
        shortUrl: nanoid(6),
    };

    inputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    submitURL = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.shortLink(this.state);
    };

    render() {

        return (
            <div className="App">
                <h2>Shorten Your link</h2>
                <form onSubmit={this.submitURL} className="form">
                    <input name="originalUrl" value={this.state.originalUrl} placeholder="Enter your URL"
                           onChange={this.inputChange}/>
                    <button type="submit" className="btn">Shorten</button>
                </form>
                {this.props.shortUrl ? <div className="result">
                    <p>Your Link Now looks like this: </p>
                    <div className="url_div"><h3>http://localhost:8003/{this.props.shortUrl.shortUrl}</h3></div>
                </div> : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shortUrl: state.response.shortUrl
});

const mapDispatchToProps = dispatch => ({
    shortLink: (originalLink) => dispatch(shortLink(originalLink))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);