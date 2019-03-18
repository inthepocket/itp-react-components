import { fetchFeatures } from './feature';
import { features } from '<PROJECT-NAME>-mock/features';

test('Service: feature: fetchFeatures', async () => {
  const result = await fetchFeatures();
  expect(result).toEqual(features);
});
