import * as React from 'react';
import Home from './pages/home/Home';
import GlobalStyles from './globalStyles';
import Footer from './Components/Footer/Footer';

const App = (): React.ReactElement => {
  return (
    <>
      <Home />
      <Footer />
      <GlobalStyles />
    </>
  );
};

export default App;
