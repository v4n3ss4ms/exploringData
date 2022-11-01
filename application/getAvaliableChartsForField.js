// could be extracted into a constants file
// could be interesting to have a default array which works with any unexpected data type

const NUMBERS = ['min', 'max', 'average', 'sum', 'distinct', 'mode'];
const TEXT = ['distinct', 'mode'];
const DATES = ['min', 'max'];

const CHARTS_BY_TYPE = {
  Int16: NUMBERS,
  Int32: NUMBERS,
  Int64: NUMBERS,
  Float16: NUMBERS,
  Float32: NUMBERS,
  Float64: NUMBERS,
  String: TEXT,
  DateTime: DATES,
}

export class GetAvaliableChartsForField {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }

  async execute(fieldName) {
    const fieldItem = this.dataRepository.data.meta.find(element => element.name === fieldName);
    return CHARTS_BY_TYPE[fieldItem.type];
  }
}
