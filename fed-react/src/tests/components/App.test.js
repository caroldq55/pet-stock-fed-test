import React from "react";
import App from "../../App";
import { shallow } from "enzyme";

it("should render App component", () => {
    const wrapper = shallow( <App />);
    expect(wrapper).toMatchSnapshot();
});