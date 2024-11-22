import { GameSavingLoader } from "../gameSaving";

jest.setTimeout(10000)

test('Loading data', async () => {
  const data = await GameSavingLoader.load();
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
  }
  expect(data).toEqual(result)
})