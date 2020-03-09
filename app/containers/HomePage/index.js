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

const key = 'home';

export function HomePage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  return (
    <article>
      <div>
        <CenteredSection>Yay!</CenteredSection>
      </div>
    </article>
  );
}

export default HomePage;
