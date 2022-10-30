import { DataRepository } from "./domain/dataRepository.js";
import { GetAllDataAvailable } from "./application/getAllDataAvailable.js";
import { CalculateAverage } from "./application/calculateAverage.js";

const dataRepository = new DataRepository(window.fetch);
const getAllDataAvailable = new GetAllDataAvailable(dataRepository);
const calculateAverage = new CalculateAverage(dataRepository);

let field = '';
let chartType = '';
// TBD: chart types -> min, max, average, distinct, sum, mode
// TBD: getChartTypesForField.execute(field), getVisualization.execute(field, chartType), 

try  {
    
    const data = await getAllDataAvailable.execute();
    console.log(data);
    //document.getElementById('success').innerHTML=JSON.stringify(data);
    history.pushState({}, null, '');
    /*
    TO BE REMOVED

    chartType = 'average';
    if (chartType === 'average') {
        const average = calculateAverage.execute('passenger_count');
        document.getElementById('result').innerHTML = average;
    }
    */

} catch {
    document.getElementById('error').innerHTML='error';
    history.pushState({}, null, '');
}


