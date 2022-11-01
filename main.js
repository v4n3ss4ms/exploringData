import { DataRepository } from './domain/dataRepository.js';
import { GetAllDataAvailable } from './application/getAllDataAvailable.js';
import { GetFieldNames } from './application/getFieldNames.js';
import { GetAvaliableChartsForField } from './application/getAvaliableChartsForField.js';
import { CalculateAverage } from './application/calculateAverage.js';
import { GetChartResult } from './application/getChartResult.js';

const dataRepository = new DataRepository(window.fetch);
const getAllDataAvailable = new GetAllDataAvailable(dataRepository);
const getFieldNames = new GetFieldNames(dataRepository);
const getAvaliableChartsForField = new GetAvaliableChartsForField(dataRepository);
const calculateAverage = new CalculateAverage(dataRepository);
const getChartResult = new GetChartResult(dataRepository, calculateAverage);

const CHARTS_SELECT = 'chartTypesSelect';

let fieldName = '';
let chartType = '';

// TBD: read URL

// TBD: chart types -> min, max, average, distinct, sum, mode
// TBD: getChartData.execute(fieldName, chartType),

const clearSelect = (elementId) => {
  const htmlElement = document.getElementById(elementId);
  const elementLength = htmlElement.options.length - 1;
  for (let i = elementLength; i > 0; i--) {
    htmlElement.remove(i);
  }
};

const fillSelect = (elementId, data) => {
  const htmlElement = document.getElementById(elementId);
  data.forEach((option) => {
    const element = document.createElement('option');
    element.textContent = option;
    element.value = option;
    htmlElement.appendChild(element);
  });
};

const setDefaultOptionSelected = (elementId) => document.querySelector(`#${elementId} .default`).selected = true;

const getAvailableCharts = async (fieldName) => {
  const availableCharts = await getAvaliableChartsForField.execute(fieldName);
  setDefaultOptionSelected(CHARTS_SELECT);
  clearSelect(CHARTS_SELECT);
  fillSelect(CHARTS_SELECT, availableCharts);
};

const init = async () => {
  const data = await getAllDataAvailable.execute();
  console.log(data); // TBD: remove

  // populate fields select
  const fieldNames = await getFieldNames.execute();
  fillSelect('fieldNamesSelect', fieldNames);
  
  fieldNamesSelect.addEventListener('change', function () {
    getAvailableCharts(this.value);
    // TBD: WRITE url
  });

  // TBD: chart listener
  // TBD: WRITE url

  //document.getElementsByClassName("results-box")[0].innerHTML = JSON.stringify(data.meta);
};

try {
  await init();

  // history.pushState({}, null, '');
  /*
    TO BE REMOVED

    chartType = 'average';
    if (chartType === 'average') {
        const average = calculateAverage.execute('passenger_count');
        document.getElementsByClassName('results-box')[0].innerHTML = average;
    }
    */
} catch {
  const errorElement = document.getElementsByClassName('error-msg')[0];
  errorElement.classList.remove('error-msg--hidden');
  errorElement.innerHTML = 'error';
}
