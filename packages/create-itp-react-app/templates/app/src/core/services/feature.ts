import { features } from '<PROJECT-NAME>-mock/features';
const sleep = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchFeatures = async () => {
  await sleep();
  return features;
};
