import renderer from 'react-test-renderer';
import * as React from 'react';
import { Button } from './Button';
import { noOp } from '../../utilities/test/testUtilities';

describe('button', () => {
  it('renders correctly', () => {
    const element = renderer.create(
            <Button text="Test Button" onPress={noOp} />,
    ).toJSON();

    expect(element).toMatchSnapshot();
  });
});
