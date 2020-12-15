import renderer from 'react-test-renderer';
import * as React from 'react';
import { Card } from './Card';
import { noOp } from '../../utilities/test/testUtilities';

describe('card', () => {
  it('renders correctly', () => {
    const element = renderer.create(
            <Card
                date={new Date('12/23/2020')}
                gameName={'Test Game Name'}
                onExitPress={noOp}
                onGamePress={noOp}
            />,
    ).toJSON();

    expect(element).toMatchSnapshot();
  });
});
