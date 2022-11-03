import { CalculateMode } from './calculateMode.js';

const dataRepositoryMock = () => {
  return {
    data: {
      data: [
        {
          vendorid: 1,
          store_and_fwd_flag: 'A',
        },
        {
          vendorid: 1,
          store_and_fwd_flag: 'N',
        },
        {
          vendorid: 2,
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
const calculateMode = new CalculateMode(dataRepositoryMock());

describe('CalculateMode', () => {
  it('calculates vendorid mode', () => {
    const mode = calculateMode.execute('vendorid');

    expect(mode).toContain(1, 2);
  });

  it('calculates store_and_fwd_flag mode', () => {
    const mode = calculateMode.execute('store_and_fwd_flag');

    expect(mode).toContain('N');
  });
});
