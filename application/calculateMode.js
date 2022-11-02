export class CalculateMode {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }

  #mode(data) {
    if (!data.length) return [];
    var modeMap = {},
      maxCount = 0,
      modes = [];

    data.forEach((val) => {
      if (!modeMap[val]) modeMap[val] = 1;
      else modeMap[val]++;

      if (modeMap[val] > maxCount) {
        modes = [val];
        maxCount = modeMap[val];
      } else if (modeMap[val] === maxCount) {
        modes.push(val);
        maxCount = modeMap[val];
      }
    });

    return modes;
  }

  execute(fieldName) {
    const data = this.dataRepository.data.data;
    const extractData = data.map((e) => e[fieldName]);
    return this.#mode(extractData);
  }
}
