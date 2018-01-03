import React from 'react';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Menu from './../components/Menu'

test('render a label', () => {
    const wrapper = shallow(
        <Menu />
    );
    expect(wrapper).toMatchSnapshot();
});
