import { DataRepository } from '../domain/dataRepository.js';
import { GetAllDataAvailable } from './getAllDataAvailable.js';

jest.mock('../domain/dataRepository.js');

describe('GetAllDataAvailable', () => {
  beforeEach(() => {
    DataRepository.mockClear();
  });
  it('checks getData dependency method has been called', () => {
    const dataRepository = new DataRepository(jest.fn());
    const getAllDataAvailable = new GetAllDataAvailable(dataRepository);
    getAllDataAvailable.execute();
    expect(dataRepository.getData).toHaveBeenCalled();
  });
});
