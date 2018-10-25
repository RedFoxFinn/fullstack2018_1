import React, { component } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text, counter}) => {
    return (
        <tr>
            <th>{text}</th>
            <td>{counter}</td>
        </tr>
    )
}

const Statistics = ({huono, neutraali, hyvä, summa, yhteensä}) => {
    return (
        <div>
            <link href="unicafe.css" rel="stylesheet" type="text/css" />
            <table>
                <tbody>
                    <Statistic text="huono" counter={huono} />
                    <Statistic text="neutraali" counter={neutraali} />
                    <Statistic text="hyvä" counter={hyvä} />
                    <Statistic text="keskiarvo" counter={summa / yhteensä} />
                    <Statistic text="positiivisia" counter={hyvä / yhteensä * 100 + ' %'} />
                </tbody>
            </table>
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const Otsikko = ({otsake}) => (
    <h2>{otsake}</h2>
)

const PalautettavaElementti = ({huono, neutraali, hyvä, summa}) => {
    const yhteensä = huono + neutraali + hyvä
    return (
        <div className="tilastot">
            {yhteensä > 0 ? <Statistics huono={huono} neutraali={neutraali} hyvä={hyvä} summa={summa} yhteensä={yhteensä} /> : <p>ei yhtään palautetta annettu</p>}
        </div>
    )
}

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            huono: 0,
            neutraali: 0,
            hyvä: 0,
            yhteensä: 0,
            summa: 0
        }
    }

    asetaHuono = (arvo, toinenArvo, kolmasArvo) => {
        return () => {
            this.setState({huono: arvo, yhteensä: toinenArvo, summa: kolmasArvo})
        }
    }
    asetaNeutraali = (arvo, toinenArvo, kolmasArvo) => {
        return () => {
            this.setState({neutraali: arvo, yhteensä: toinenArvo, summa: kolmasArvo})
        }
    }
    asetaHyva = (arvo, toinenArvo, kolmasArvo) => {
        return () => {
            this.setState({hyvä: arvo, yhteensä: toinenArvo, summa: kolmasArvo})
        }
    }

    render() {
        console.log('renderöidään', this.state.kaikki)

        const palikat = {
            ylempi: 'anna palautetta',
            alempi: 'statistiikka',
            hyvät: this.state.hyvä,
            neutraalit: this.state.neutraali,
            huonot: this.state.huono,
            yhteensä: this.state.yhteensä,
            summa: this.state.summa
        }

        return (
            <div>
                <Otsikko otsake={palikat.ylempi} />
                <div>
                    <Button
                        handleClick={this.asetaHuono(this.state.huono +1, this.state.yhteensä +1, this.state.summa -1)}
                        text="huono"
                    />
                    <Button
                        handleClick={this.asetaNeutraali(this.state.neutraali +1, this.state.yhteensä +1, this.state.summa +0)}
                        text="neutraali"
                    />
                    <Button
                        handleClick={this.asetaHyva(this.state.hyvä +1, this.state.yhteensä +1, this.state.summa +1)}
                        text="hyvä"
                    />
                </div>
                <Otsikko otsake={palikat.alempi} />
                <PalautettavaElementti huono={this.state.huono} neutraali={this.state.neutraali} hyvä={this.state.hyvä} summa={this.state.summa} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);