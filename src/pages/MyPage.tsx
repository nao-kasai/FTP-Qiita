import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import styled from 'styled-components';

import Header from '../components/organisms/Header';

export interface MyPageProps {
}

const MyPageWrapper = styled.div`
`
@observer
export default class MyPage extends React.Component<MyPageProps, any> {
  public render() {
    return (
      <MyPageWrapper>
        <Header />
        MyPage<br/>
        <Link to="/">[ HOME ]</Link>
      </MyPageWrapper>
    );
  }
}
