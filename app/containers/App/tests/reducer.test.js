import expect from 'expect';
import loginReducer from '../reducer';
import { fromJS } from 'immutable';

describe('appReducer', () => {
  it('returns the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(fromJS({}));
  });
});
