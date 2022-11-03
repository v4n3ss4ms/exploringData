import { CalculateMin } from './calculateMin.js';

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
const calculateMin = new CalculateMin(dataRepositoryMock());

describe('CalculateMin', () => {
  it('calculates total_amount min', () => {
    const min = calculateMin.execute('total_amount');

    expect(min).toBe(6.36);
  });

  it('calculates trip_distance min', () => {
    const min = calculateMin.execute('trip_distance');

    expect(min).toBe(1.65);
  });
});
