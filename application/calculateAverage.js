export class CalculateAverage {
    
    constructor(dataRepository){
        this.dataRepository = dataRepository;
    }

    execute(fieldName) {
        const data = this.dataRepository.data.data;
        const sum = data.reduce((acc, element) => acc + element[fieldName], 0);

        return sum/data.length;
    }
}
