import { default as React, useCallback, useEffect } from 'react';
import { useMappedState, useDispatch } from 'redux-react-hook';
import { fetchFeatures } from '<PROJECT-NAME>-core/actions/feature/featureActions';
import { getFeatureState } from '<PROJECT-NAME>-core/selectors/feature';
import Features from '<PROJECT-NAME>-common/components/molecules/Features/Features';
import Header from '<PROJECT-NAME>-common/components/molecules/Header/Header';
import { ReactComponent as Logo } from '<PROJECT-NAME>-common/assets/img/logo-itp-white.svg';
import { default as styles } from './App.module.css';

const useMappedFeaturesState = () => {
  const mappedState = useCallback(
    getFeatureState,
    ['features'],
  );

  return useMappedState(mappedState);
};

const App = () => {
  const dispatch = useDispatch();
  const featuresState: any = useMappedFeaturesState();
  const { features, isFetchingFeatures } = featuresState;

  useEffect(
    () => {
      dispatch(fetchFeatures.request());
    },
    featuresState,
  );

  return (
    <div className={styles.App}>
      <Logo className={styles.Logo} />
      <Header title="Welcome to your generated itp-react-app." />
      <Features features={features} isLoading={isFetchingFeatures} />
    </div>
  );
};

export default App;
