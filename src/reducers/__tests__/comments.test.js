import commentsReducer from '../comments';
import {SAVE_COMMENT} from '../../actions/types';

it('handles SAVE_COMMENT action', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }

    const state = commentsReducer([], action);

    expect(state).toEqual(['New Comment']);
})

it('handles unknown action types', () => {
    const state = commentsReducer([], {});

    expect(state).toEqual([]);
})