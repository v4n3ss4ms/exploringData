// could be extracted into a constants file
// could be interesting to have a default array which works with any unexpected data type

const NUMBERS = ['min', 'max', 'average', 'sum', 'distinct', 'mode'];
const TEXT = ['distinct', 'mode'];
const DATES = ['min', 'max'];

const CHARTS_BY_TYPE = {
  int16: NUMBERS,
  int32: NUMBERS,
  int64: NUMBERS,
  float16: NUMBERS,
  float32: NUMBERS,
  float64: NUMBERS,
  string: TEXT,
  datetime: DATES,
};

export class GetAvaliableChartsForField {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }

  execute(fieldName) {
    const fieldItem = this.dataRepository.data.meta.find((element) => element.name === fieldName);
    return CHARTS_BY_TYPE[fieldItem.type.toLowerCase()];
  }
}
