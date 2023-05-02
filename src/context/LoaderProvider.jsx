import { createContext } from 'react';
import BackdropModal from 'components/BackdropModal/BackdropModal';
import { selectorIsLoading } from 'redux/Loader/loaderSelectors';
import { useSelector } from 'react-redux';

import { Dna } from 'react-loader-spinner';

const LoaderContext = createContext();

const Loader = () => {
  return (
    <BackdropModal>
      <Dna
        visible={true}
        height="280"
        width="280"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </BackdropModal>
  );
};

const LoaderProvider = ({ children }) => {
  const isLoading = useSelector(selectorIsLoading);

  return (
    <LoaderContext.Provider value={isLoading}>
      <>{children}</>
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
};

export default LoaderProvider;
