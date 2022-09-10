import React from "react";
import { FeedbackFormComponent } from "./feedback_form";
export class FormContainerComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mark: -1,
      suggestions: "",
      email: "",
    };
  }

  render() {
    return (
      <div>
        <FeedbackFormComponent
          onSendFeedback={(data) => {
            this.onSendFeedback(data);
          }}
          value="123"
          mystr="dsfjkfdsjksdf"
        ></FeedbackFormComponent>
        <ul>
          <li>Mark: {this.state.mark}</li>
          <li>Suggestions: {this.state.suggestions}</li>
          <li>Email: {this.state.email}</li>
        </ul>
      </div>
    );
  }

  onSendFeedback(feedbackData) {
    console.log(feedbackData);
    this.setState({
      mark: feedbackData.mark,
      suggestions: feedbackData.suggestions,
      email: feedbackData.email,
    });
  }
}
