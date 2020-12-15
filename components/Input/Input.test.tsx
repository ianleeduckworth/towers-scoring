import renderer from 'react-test-renderer';
import * as React from 'react';
import { Input } from './Input';

describe('card', () => {
  it('base renders correctly', () => {
    const element = renderer.create(
            <Input label="Test Input" />,
    ).toJSON();

    expect(element).toMatchSnapshot();
  });

  it('renders correctly with placeholder', () => {
    const element = renderer.create(
            <Input
                label="Test Input"
                placeholder="Test placeholder"
            />,
    );

    expect(element).toMatchSnapshot();
  });

  it('renders correctly with error text', () => {
    const element = renderer.create(
            <Input
                label="Test Input"
                placeholder="Test placeholder"
                errorText="Test error text"
            />,
    );

    expect(element).toMatchSnapshot();
  });

  it('renders correctly with value', () => {
    const element = renderer.create(
            <Input
                label="Test Input"
                placeholder="Test placeholder"
                errorText="Test error text"
                value="Value"
            />,
    );

    expect(element).toMatchSnapshot();
  });
});
