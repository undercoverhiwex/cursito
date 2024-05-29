import api from '../http/fetch';

describe('test get', () => {
  it('get data', async () => {
    const results = await api.get('');
    console.log({results});
    expect(results).toBeTruthy();
  });

  it('get data by assert', async () => {
    await expect(api.get('')).resolves.toBeTruthy();
  });
});

describe('test get mocked', () => {
  it('get data', async () => {
    jest.spyOn(api, 'get');
    await expect(api.get('123')).resolves.toBeTruthy();
    expect(api.get).toHaveBeenCalledWith('123');
  });

  it('get mocked data', async () => {
    jest.mock('../http/fetch');
    const mockedApi = jest.mocked(api);
    mockedApi.get.mockImplementation(() => Promise.resolve('true'));
    await expect(mockedApi.get('')).resolves.toBe('true');
  });
});
