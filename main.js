import { DataRepository } from './domain/dataRepository.js';
import { GetAllDataAvailable } from './application/getAllDataAvailable.js';
import { GetFieldNames } from './application/getFieldNames.js';
import { GetAvaliableChartsForField } from './application/getAvaliableChartsForField.js';
import { CalculateMin } from './application/calculateMin.js';
import { CalculateMax } from './application/calculateMax.js';
import { CalculateAverage } from './application/calculateAverage.js';
import { CalculateSum } from './application/calculateSum.js';
import { CalculateDistinct } from './application/calculateDistinct.js';
import { CalculateMode } from './application/calculateMode.js';
import { GetChartResult } from './application/getChartResult.js';


const dataRepository = new DataRepository(window.fetch);
const getAllDataAvailable = new GetAllDataAvailable(dataRepository);
const getFieldNames = new GetFieldNames(dataRepository);
const getAvaliableChartsForField = new GetAvaliableChartsForField(dataRepository);
const calculateMin  = new CalculateMin(dataRepository);
const calculateMax  = new CalculateMax(dataRepository);
const calculateAverage = new CalculateAverage(dataRepository);
const calculateSum = new CalculateSum(dataRepository);
const calculateDistinct = new CalculateDistinct(dataRepository);
const calculateMode = new CalculateMode(dataRepository);
const getChartResult = new GetChartResult(calculateMin, calculateMax, calculateAverage, calculateSum, calculateDistinct, calculateMode);

const RESULT_ELEMENT = 'results-box';
const ERROR_ELEMENT = 'error-msg';
const ERROR_HIDDEN_CLASS = 'error-msg--hidden';

const CHARTS_SELECT = 'chartTypesSelect';
const FIELD_NAMES_SELECT = 'fieldNamesSelect';
const FIELD_NAME_PARAM = 'field';
const CHART_PARAM = 'chart';
const PARAMS_BY_ELEMENT_ID = {
  [FIELD_NAMES_SELECT]: FIELD_NAME_PARAM,
  [CHARTS_SELECT]: CHART_PARAM,
};

const showResult = () => {
  const chart = getUrlParam(CHART_PARAM);
  const fieldName = getUrlParam(FIELD_NAME_PARAM);
  const htmlElement = document.getElementsByClassName(RESULT_ELEMENT)[0];
  
  const result = getChartResult.execute(fieldName, chart);
  
  htmlElement.innerHTML = result;
}

const clearSelect = (elementId) => {
  const htmlElement = document.getElementById(elementId);
  const elementLength = htmlElement.options.length - 1;
  for (let i = elementLength; i > 0; i--) {
    htmlElement.remove(i);
  }
  setDefaultOptionSelected(elementId);
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

const initializeFiltersByDefault = () => {
  setDefaultOptionSelected(FIELD_NAMES_SELECT);
  setDefaultOptionSelected(CHARTS_SELECT);
};

const setDefaultOptionSelected = (elementId) =>
  (document.querySelector(`#${elementId} .default`).selected = true);

const setOptionSelected = (elementId, option) => {
  const optionElement = document.querySelector(`#${elementId} option[value='${option}']`);
  
  if (optionElement) {
    optionElement.selected = true;
  } else {
    removeUrlParam(PARAMS_BY_ELEMENT_ID[elementId]);
  }
};

const getAvailableCharts = (fieldName) => {
  const availableCharts = getAvaliableChartsForField.execute(fieldName);
  clearSelect(CHARTS_SELECT);
  fillSelect(CHARTS_SELECT, availableCharts);
  updateChartSelected();
};

const updateChartSelected = () => {
  const chartParam = getUrlParam(CHART_PARAM);
  setOptionSelected(CHARTS_SELECT, chartParam);
  showResult();
};

const chartFilterOnChange = (chart) => {
  const fieldName = getUrlParam(FIELD_NAME_PARAM);
  setUrlParam(CHART_PARAM, chart);
  showResult();
};

const fieldNamesFilterOnChange = (fieldName) => {
  removeUrlParam(CHART_PARAM);
  setUrlParam(FIELD_NAME_PARAM, fieldName);
  getAvailableCharts(fieldName);
};

const updateFiltersAccordingUrl = () => {
  const fieldNameParam = getUrlParam(FIELD_NAME_PARAM);
  const select = document.getElementById(FIELD_NAMES_SELECT);

  setOptionSelected(FIELD_NAMES_SELECT, fieldNameParam);

  if (select.selectedIndex > 0) {
    const value = select.options[select.selectedIndex].value;
    getAvailableCharts(value);
  } else {
    removeUrlParam(CHART_PARAM);
  }
};

const prepareFieldNamesFilter = async () => {
  const fieldNames = getFieldNames.execute();

  fillSelect(FIELD_NAMES_SELECT, fieldNames);
  updateFiltersAccordingUrl();

  document.getElementById(FIELD_NAMES_SELECT).addEventListener('change', function () {
    fieldNamesFilterOnChange(this.value);
  });
};

const getUrlParams = () => {
  const urlQuerystring = window.location.search;

  return new URLSearchParams(urlQuerystring);
};

const getUrlParam = (param) => {
  const params = getUrlParams();

  return params.get(param);
};

const setUrlParam = (param, value) => {
  const params = getUrlParams();
  params.set(param, value);
  window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
};

const removeUrlParam = (param) => {
  const params = getUrlParams();
  params.delete(param);
  window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
};

const init = async () => {
  const data = await getAllDataAvailable.execute();
  console.log(data); // TBD: remove
  initializeFiltersByDefault();

  await prepareFieldNamesFilter();

  document.getElementById(CHARTS_SELECT).addEventListener('change', function () {
    chartFilterOnChange(this.value);
  });
};

try {
  await init();
} catch (e) {
  const errorElement = document.getElementsByClassName(ERROR_ELEMENT)[0];
  errorElement.classList.remove(ERROR_HIDDEN_CLASS);
  errorElement.innerHTML = 'error';
  console.error(e);
}
