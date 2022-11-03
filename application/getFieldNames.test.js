import { GetFieldNames } from './getFieldNames.js';

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
const getFieldNames = new GetFieldNames(dataRepositoryMock());

describe('GetFieldNames', () => {
  it('returns field names', () => {
    const fieldNames = getFieldNames.execute();

    expect(fieldNames).toContain('vendorid', 'tpep_dropoff_datetime', 'trip_distance', 'store_and_fwd_flag', 'pulocationid');
  });
});
