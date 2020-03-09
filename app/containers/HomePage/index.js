/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import CenteredSection from '../../components/CenteredSection';
import reducer from './reducer';
import saga from './saga';
import useRandom from '../../custom-hooks/useRandom';
import withCustomHeader from '../../hoc/withCustomHeader';

const key = 'home';

const TestComp = ({ min, max }) => {
  const [random, setRandom] = useRandom();
  return (
    <>
      <h3>{random}</h3>
      <button type="button" onClick={() => setRandom(min, max)}>
        {`Generate number b/w ${min} and ${max}`}
      </button>
    </>
  );
};

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <div>
        <CenteredSection>
          Yay!
          <TestComp min={100} max={200} />
          <TestComp min={900} max={999} />
        </CenteredSection>
      </div>
    </article>
  );
}

export default withCustomHeader(HomePage);
