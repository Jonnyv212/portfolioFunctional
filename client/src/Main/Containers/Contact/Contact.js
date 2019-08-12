import React, { Component } from "react";
import axios from "axios";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div id="contact">
      <form className="contactContainer">
        <h1>CONTACT ME</h1>
        <div className="upperContact">
          <input
            type="text"
            className="name"
            name="name"
            placeholder="Full Name"
            value={this.state.name}
            // onChange={e => this.change(e)}
          />
          <input
            type="email"
            className="email"
            name="email"
            placeholder="Email Address"
            value={this.state.email}
            // onChange={e => this.change(e)}
          />
        </div>
        <textarea
          type="submit"
          className="message"
          name="message"
          placeholder="Message"
          value={this.state.message}
          // onChange={e => this.change(e)}
        />
        <br />
        <button className="submit" onClick={e => this.onSubmit(e)}>
          Submit
        </button>
      </form>
      </div>
    );
  }
}

export default Contact;
