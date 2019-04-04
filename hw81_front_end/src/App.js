import React, {Component} from 'react';
import './App.css'
import {goToUrl, shortLink} from "./store/actions/productsActions";
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

    goToUrl = (e) => {
        e.preventDefault();
        this.props.goToUrl(this.state.shortUrl);
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
                    <button onClick={this.goToUrl}>http://localhost:8003/{this.props.shortUrl.shortUrl}</button>
                </div> : null}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    shortUrl: state.response.shortUrl
});

const mapDispatchToProps = dispatch => ({
    shortLink: (originalLink) => dispatch(shortLink(originalLink)),
    goToUrl: (shortLink) => dispatch(goToUrl(shortLink)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);