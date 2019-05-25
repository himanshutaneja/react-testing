import React from 'react'

class CommentBox extends React.Component {
    state = {
        comment: ''
    }

    handleOnChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        this.setState({ comment: '' })
    }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <h4>Add a comment</h4>
                <textarea value={this.state.comment} onChange={this.handleOnChange} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default CommentBox;