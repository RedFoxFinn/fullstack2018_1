import React from 'react';
import ReactDOM from 'react-dom';

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssinNimi}</h1>
        </div>
    )
}

const Osa = (props) => {
    return (
        <div>
            <p>{props.nimike} {props.tehtavia}</p>
        </div>
    )
}

const Sisalto = (props) => {

    const osa1 = props.osat[0]
    const osa2 = props.osat[1]
    const osa3 = props.osat[2]

    return (
        <div>
            <Osa nimike={osa1.nimi} tehtavia={osa1.tehtavia} />
            <Osa nimike={osa2.nimi} tehtavia={osa2.tehtavia} />
            <Osa nimike={osa3.nimi} tehtavia={osa3.tehtavia} />
        </div>
    )
}

const Yhteensa = (props) => {

    const yhteensa = props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia

    return (
        <div>
            <p>yhteensä {yhteensa} tehtävää</p>
        </div>
    )
}

const App = () => {

    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }
        ]
    }

    return (
        <div>
            <Otsikko kurssinNimi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);