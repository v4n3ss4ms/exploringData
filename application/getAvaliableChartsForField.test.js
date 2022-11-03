import { GetAvaliableChartsForField } from './getAvaliableChartsForField.js';

const dataRepositoryMock = () => {
  return {
    data: {
      meta: [
        {
          name: 'vendorid',
          type: 'Int16',
        },
        {
          name: 'tpep_dropoff_datetime',
          type: 'DateTime',
        },
        {
          name: 'trip_distance',
          type: 'Float32',
        },
        {
          name: 'store_and_fwd_flag',
          type: 'String',
        },
        {
          name: 'pulocationid',
          type: 'Int32',
        },
      ],
    },
  };
};
const getAvaliableChartsForField = new GetAvaliableChartsForField(dataRepositoryMock());

describe('GetAvaliableChartsForField', () => {
  it('returns available charts for Int16 (vendorid)', () => {
    const charts = getAvaliableChartsForField.execute('vendorid');

    expect(charts).toContain('min', 'max', 'average', 'sum', 'distinct', 'mode');
  });

  it('returns available charts for Int32 (pulocationid)', () => {
    const charts = getAvaliableChartsForField.execute('pulocationid');

    expect(charts).toContain('min', 'max', 'average', 'sum', 'distinct', 'mode');
  });

  it('returns available charts for Float32 (trip_distance)', () => {
    const charts = getAvaliableChartsForField.execute('trip_distance');

    expect(charts).toContain('min', 'max', 'average', 'sum', 'distinct', 'mode');
  });

  it('returns available charts for String (store_and_fwd_flag)', () => {
    const charts = getAvaliableChartsForField.execute('store_and_fwd_flag');

    expect(charts).toContain('distinct', 'mode');
  });

  it('returns available charts for DateTime (tpep_dropoff_datetime)', () => {
    const charts = getAvaliableChartsForField.execute('tpep_dropoff_datetime');

    expect(charts).toContain('min', 'max');
  });
});
