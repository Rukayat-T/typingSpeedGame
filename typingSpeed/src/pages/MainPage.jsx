import React, { useState } from 'react'
import "./mainPage.css"
import tests from "../assets/texts.json"

function MainPage() {
    const [isStarted, setIsStarted] = useState(false)
    const [test, setTest] = useState({});

    const chooseTest = () => {
        const length = tests.length
        const rand = randomNumberInRange(1, length)
        const found = tests.find((element) => element.id == rand);
        setTest(found);
    }

    const randomNumberInRange = (min, max) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    const GameBox = () => {
        if (isStarted === true) {
            return (
                <>
                    <div className="box">
                        <div className="">started</div>
                        {test.name},
                        {test.body}
                        <button onClick={() => { setIsStarted(false) }}>end Game</button>

                    </div>

                </>
            )
        }
        else {
            return (
                <>
                    <div className="">not started</div>
                    <div className="not-box">
                        <div className="box-head">
                            Test 1
                        </div>
                        <button onClick={() => { setIsStarted(true); chooseTest() }}>Start Game</button>
                    </div>

                </>
            )

        }

    }

    return (
        <>
            <div className="header">
                <div className="name">TYPIST</div>
                <div className="slo">Ready, Set, Type!</div>
            </div>
            <div className="body">
                <GameBox />
            </div>

        </>

    )
}

export default MainPage