import React from 'react'
import { mount } from 'enzyme'
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;
beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
})

afterEach(() => {
    wrapped.unmount();
})

it('has a textarea and two buttons', () => {
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(2)
});

describe('the text area', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    })

    it('has a textarea in which user can enter text', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('clears the textarea on submitting input', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
})

