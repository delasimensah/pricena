import { DefaultSeo } from "next-seo";

import "@styles";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo
        title="Online Shopping UAE, Compare prices across all stores"
        description="Description here"
      />

      <Component {...pageProps} />
    </>
  );
};

export default App;
