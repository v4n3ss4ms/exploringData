import { CalculateDistinct } from './calculateDistinct.js';

const dataRepositoryMock = () => {
  return {
    data: {
      data: [
        {
          vendorid: 1,
          store_and_fwd_flag: 'N',
        },
        {
          vendorid: 1,
          store_and_fwd_flag: 'N',
        },
        {
          vendorid: 2,
          store_and_fwd_flag: 'N',
        },
      ],
    },
  };
};
const calculateDistinct = new CalculateDistinct(dataRepositoryMock());

describe('CalculateDistinct', () => {
  it('calculates vendorid distinct', () => {
    const distinct = calculateDistinct.execute('vendorid');

    expect(distinct).toContain(1, 2);
  });

  it('calculates store_and_fwd_flag distinct', () => {
    const distinct = calculateDistinct.execute('store_and_fwd_flag');

    expect(distinct).toContain('N');
  });
});
