import axios from 'axios';
import { getBills } from '.';

jest.mock('axios');

// Make sure to resolve with a promise
axios.mockResolvedValue();

describe('getBills()', () => {
  it.skip('calls `axios()` with endpoint url and method', () => {
    const endpoint = 'http://localhost:3002/bills';
    const method = 'get';

    // call function
    getBills(endpoint, method);

    // assert axios()
    expect(axios).toBeCalledWith({ url: endpoint, method });
  });
});
