import React from 'react';
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import List from './../components/List';
import { mapStateToProps, mapDispatchToProps } from './../components/List.js';
import { LIST_START } from './../actions/list.js';

describe('List component renders a list of tweets', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<List/>);

    // Test Initial State:
     const initialState = {
          loading: true,
          data: [],
      };

      expect(mapStateToProps(initialState).loading).toEqual(true);

      const dispatch = jest.fn();

      mapDispatchToProps(dispatch).getData();
      expect(dispatch.mock.calls[0][0]).toEqual({ type: 'LIST_START'});

    // Test state with data
    const loading = false;

    const data = [
      {text: "x", url: "url"},
      {text: "y", url: "url"},
      {text: "z", url: "url"}
    ];
    const error = '';

    wrapper.setState({
      loading,
      data,
      error
    });

    expect(toJson(wrapper)).toMatchSnapshot();

  });
});
