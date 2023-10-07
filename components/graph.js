"use client"

import { useState } from "react"



export default function Table(data) {
    const [dataArray, setDataArray] = useState(data.data.year)
    const [dataArrayHY, setDataArrayHY] = useState(data.data.half_year)
    const [dataArrayM, setDataArrayM] = useState(data.data.month)
    const [dataProcessing, setDataProcessing] = useState(Object.keys(data.data.year))
    const [dataProcessingHY, setDataProcessingHY] = useState(Object.keys(data.data.half_year))
    const [dataProcessingM, setDataProcessingM] = useState(Object.keys(data.data.month))
    const [toggleOption, setToggleOption] = useState(false)
    const [activeRules, setActiveRules] = useState(0)

    function yearData(data, daraArr, mont) {
        return data.map(index =>
            <div key={index} className="table__rightCol__monthData">
                <div className={daraArr[index] == null ? "hidden" : "title"}>{daraArr[index]}</div>
                <div className="animatedGrow" style={daraArr[index] !== null ? { height: graphY(daraArr[index]) } : { height: 5 }}></div>
                <div>{mont[data.findIndex(element => element === index)]}</div>
            </div>
        )
    }

    function halfYearData(data, daraArr, mont) {
        return data.map(index =>
            <div key={index} className="table__rightCol__monthData">
                <div className={daraArr[index] == null ? "hidden" : "title"}>{daraArr[index]}</div>
                <div className="animatedGrow" style={daraArr[index] !== null ? { height: graphY(daraArr[index]) } : { height: 5 }}></div>
                <div>{mont.slice(6, 12)[data.findIndex(element => element === index)]}</div>
            </div>
        )
    }

    function monthData(data, daraArr, mont) {
        return data.map(index =>
            <div key={index} className="table__rightCol__monthData">
                <div className={daraArr[index] == null ? "hidden" : "title"}>{daraArr[index]}</div>
                <div className="animatedGrow" style={daraArr[index] !== null ? { height: graphY(daraArr[index])} : { height: 5 }}></div>
                <div>{days(index)}</div>
            </div>
        )
    }

    function days(value) {
        let processedValue = value < 10 ? "0" + value : value;
        if (value == 1) {
            return processedValue
        } if (value == 5) {
            return processedValue
        } if (value == 10) {
            return value
        } if (value == 15) {
            return value
        } if (value == 20) {
            return value
        } if (value == 25) {
            return value
        } if (value == 30) {
            return value
        } else ("")
    }

    const months = [
        'Янв', 'Фев',
        'Мар', 'Апр',
        'Май', 'Июн',
        'Июл', 'Авг',
        'Сен', 'Окт',
        'Ноя', 'Дек'
    ]

    function graphY(value) {
        if (value <= 500) {
            return Math.ceil((value / 500) * 100)
        } if (value >= 500 & value <= 1000) {
            return Math.ceil((value / 1000) * 100)
        } if (value >= 1000 & value <= 2000) {
            return Math.ceil((value / 2000) * 100) + 50
        } if (value >= 2000 & value <= 5000) {
            return Math.ceil((value / 5000) * 100) + 120
        } if (value >= 5000 & value <= 10000) {
            return Math.ceil((value / 10000) * 100) + 170
        } else ("")
    }

    function toggleOptions() {
        setToggleOption(!toggleOption);
    }

    function activeRule(value) {
        setActiveRules(value)
    }

    return (
        <div className="graph">
            <div onClick={toggleOptions} className="selectTimeLine">
                <div className="selectTimeLine__chosen">
                    <p>{activeRules == 0 ? "За последний месяц" : activeRules == 1 ? "За последние 6 месяцев" : "За последнии год"}</p>
                    <div className={toggleOption === true ? "arrow up" : "arrow"}>
                        <div></div>
                    </div>
                </div>
                <div className={toggleOption === true ? "selectTimeLine__options" : "selectTimeLine__options hidden"}>
                    <p onClick={() => activeRule(0)}>За последний месяц</p>
                    <p onClick={() => activeRule(1)}>За последние 6 месяцев</p>
                    <p onClick={() => activeRule(2)}>За последнии год</p>
                </div>
            </div>
            <div className="table">
                <div className="table__leftCol">
                    <ul className="table__leftCol__list">
                        <li>10 000</li>
                        <li>5 000</li>
                        <li>2 000</li>
                        <li>1 000</li>
                        <li>500</li>
                        <li>0</li>
                    </ul>
                </div>
                <div className="table__rightCol">
                    {activeRules == 2 ? yearData(dataProcessing, dataArray, months) :
                        activeRules == 1 ? halfYearData(dataProcessingHY, dataArrayHY, months) :
                            activeRules == 0 ? monthData(dataProcessingM, dataArrayM, months) : ""}
                </div>
            </div>
        </div>


    )
}