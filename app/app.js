import {makeChart} from './utils/chart.js';
import {request} from './utils/requests.js';
import {dataStates, ranges, options, chartOptions} from './utils/usa-states.js';

const btnObtener = document.getElementById("btnObtener");
const selectType = document.getElementById("selectType");
const selectRange = document.getElementById("selectRange");
const selectState = document.getElementById("selectState");
const selectChart = document.getElementById("selectChart");

const imprimirOpcion = () => {
    const rangeOption = selectRange.options[selectRange.selectedIndex];
    const optonOption = selectType.options[selectType.selectedIndex];
    const stateOption = selectState.options[selectState.selectedIndex];
    const chartOption = selectChart.options[selectChart.selectedIndex];

    if(stateOption.value === "nooption" || rangeOption.value === "nooption" || optonOption.value === "nooption" || chartOption.value === "nooption") {
        // msjAdvertencia();
        // limpiar();

        return false;
    }

    getInfo(stateOption.value.toLowerCase(), optonOption.value.toLowerCase(), rangeOption.value, chartOption.value);
}

const getInfo = async (stateCode, optionCode, rangeCode, chartCode) => {

    const respuesta = await request(stateCode);

    const last30 = respuesta.slice(0, rangeCode);

    const arraySorted = last30.sort(function (a, b) {
        let dateA = new Date(a.date), dateB = new Date(b.date)
        return dateA - dateB
    });
    
    const dates = arraySorted.map(({date}) => date);
    const positives = arraySorted.map((data) => data[optionCode]);
    
    makeChart(dates, positives, chartCode);

    return {
        dates,
        positives
    };

}

const prepInfo = () => {

    for(let i = 0; i < options.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = options[i].name;
        opt.value = options[i].abbreviation;
        selectType.appendChild(opt);
    }
                                            
    for(let i = 0; i < ranges.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = ranges[i].name;
        opt.value = ranges[i].abbreviation;
        selectRange.appendChild(opt);
    }

    for(let i = 0; i < dataStates.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = dataStates[i].name;
        opt.value = dataStates[i].abbreviation;
        selectState.appendChild(opt);
    }

    for(let i = 0; i < chartOptions.length; i++) {
        let opt = document.createElement('option');
        opt.innerHTML = chartOptions[i].name;
        opt.value = chartOptions[i].abbreviation;
        selectChart.appendChild(opt);
    }
}

window.onload = function() {
    prepInfo();
}

selectType.addEventListener("change", imprimirOpcion);
selectRange.addEventListener("change", imprimirOpcion);
selectState.addEventListener("change", imprimirOpcion);
selectChart.addEventListener("change", imprimirOpcion);

btnObtener.addEventListener("click", getInfo);