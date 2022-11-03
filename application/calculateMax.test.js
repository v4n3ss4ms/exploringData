import { CalculateMax } from './calculateMax.js';

const dataRepositoryMock = () => {
  return {
    data: {
      data: [
        {
          trip_distance: 1.7,
          total_amount: 6.36,
        },
        {
          trip_distance: 1.65,
          total_amount: 17.3,
        },
        {
          trip_distance: 3.35,
          total_amount: 16.3,
        },
      ],
    },
  };
};
const calculateMax = new CalculateMax(dataRepositoryMock());

describe('CalculateMax', () => {
  it('calculates total_amount max', () => {
    const max = calculateMax.execute('total_amount');

    expect(max).toBe(17.3);
  });

  it('calculates trip_distance max', () => {
    const max = calculateMax.execute('trip_distance');

    expect(max).toBe(3.35);
  });
});
