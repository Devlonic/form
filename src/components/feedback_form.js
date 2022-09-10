import React from "react";
import "./feedback_form.css";

export class FeedbackFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleFormChange = this.handleFormChange.bind(this);
    this.mark_buttonclick = this.mark_buttonclick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = {
      mark: -1,
      suggestions: "",
      email: "",
    };
  }

  render() {
    return (
      <div className="outer-form-wrapper">
        <form onSubmit={this.handleFormSubmit}>
          <section>
            <div className="centred-elements flex-column">
              <h3>How likely are you to recommend our</h3>
              <h3>service to a friend or colleague</h3>
            </div>

            <div className="marks-wrapper">
              <div className="centred-elements">
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  0
                </button>
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  1
                </button>
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  2
                </button>
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  3
                </button>
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  4
                </button>
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  5
                </button>
              </div>
              <div className="centred-elements">
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  6
                </button>
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  7
                </button>
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton selected"
                >
                  8
                </button>
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  9
                </button>
                <button
                  onClick={this.mark_buttonclick}
                  type="button"
                  className="radiobutton"
                >
                  10
                </button>
              </div>
            </div>

            <div className="left-right-wrapper">
              <p>0 - Extremly Unlikely</p>
              <p>10 - Extremly Likely</p>
            </div>
          </section>

          <section>
            <label>
              What feature can we add to improve?
              <textarea
                onChange={this.handleFormChange}
                name="suggestions"
                cols="30"
                rows="10"
                value={this.state.suggestions}
                placeholder="We`d love to hear your suggestions"
              ></textarea>
            </label>
          </section>

          <section>
            <label>
              Email (optionnal)
              <input
                onChange={this.handleFormChange}
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Someone@something.com"
              />
            </label>
          </section>

          <section>
            <input type="submit" value="SEND FEEDBACK" />
          </section>
        </form>
      </div>
    );
  }

  handleFormChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });

    console.log(this.state);
  }

  mark_buttonclick(event) {
    this.setState({
      mark: parseInt(event.target.innerHTML),
    });

    console.log(this.state);

    let elems = document.getElementsByClassName("selected");
    elems[0].classList.remove("selected");
    event.target.classList.add("selected");
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.onSendFeedback(this.state);
    this.setState({
      mark: -1,
      suggestions: "",
      email: "",
    });
  }
}
