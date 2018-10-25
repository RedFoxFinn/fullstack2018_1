import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const ElementForRendering = ({element, forRendering}) => {

    if (element = 1) {
        return (
            <div>
                <Anecdote renderable={forRendering} />
            </div>
        )
    }
    if (element = 2) {
        return (
            <div>
                <VoteStatistics renderable={forRendering} />
            </div>
        )
    }
    if (element = 3) {
        return (
            <div>
                <Header renderable={forRendering} />
            </div>
        )
    }
}

const Header = ({renderable}) => {
    return (
        <div>
            <h1>renderable</h1>
        </div>
    )
}

const Anecdote = ({renderable}) => {
    return (
        <div>
            {renderable}
        </div>
    )
}

const VoteStatistics = ({renderable}) => {
    return (
        <div>
            {renderable}
        </div>
    )
}

let Anecdotes = [
    ['If it hurts, do it more often.', 0],
    ['Adding manpower to a late software project makes it later!', 0],
    ['The first 90 percent of the code accounts for the first 90 percent of the development time... The remaining 10 percent of the code accounts for the other 90 percent of the development time.', 0],
    ['Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 0],
    ['Premature optimization is the root of all evil.', 0],
    ['Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', 0]
];

const Vote = ({anecdote, newValue}) => (
    Anecdotes[anecdote][1] = newValue
);

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selection: 0,
            voteOfSelection: 0
        }
    }

    setSelection = (value, votes) => {
        return () => {
            this.setState({selection: value, voteOfSelection: votes})
        }
    }

    render () {
        console.log('rendering')

        const piece = {
            label: 'next anecdote',
            randomNumber: Math.floor(Math.random() * 6),
            vote: 'vote',
            statisticsLabel: 'anecdote with most votes:'
        }

        return (
            <div>
                <br/>
                <Button handleClick={this.setSelection(piece.randomNumber, Anecdotes[piece.randomNumber][1])} text={piece.label} />
                <Button text={piece.vote} />
                <br/>
                <br/>
                <ElementForRendering element='1' forRendering={Anecdotes[piece.randomNumber][0]} />
                <br/>
                <ElementForRendering element='2' forRendering={'has ' + Anecdotes[piece.randomNumber][1] + ' votes'} />
                <br/>
                <br/>
                <ElementForRendering element='3' forRendering={piece.statisticsLabel} />
                <br/>
                <ElementForRendering element='1' forRendering={Anecdotes[piece.randomNumber][0]} />
                <br/>
                <ElementForRendering element='2' forRendering={'with ' + Anecdotes[piece.randomNumber][1] + ' votes'} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);