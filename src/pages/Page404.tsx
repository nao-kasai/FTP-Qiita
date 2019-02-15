import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import PrimaryButton from '../components/atoms/PrimaryButton';

export interface Page404Props {
}

const Page404Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fafbfc;
`

const Page404Body = styled.div`
  max-width: 960px;
  margin: 0 auto;

  .msgBoard {
    margin: 30px auto 0;
    padding: 32px;
    width: 480px;
    background-color: #fff;
    text-align: center;

    &__msg {
      margin-bottom: 48px;
      font-size: 24px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #3e474d;
    }
  }
`;

@observer
export default class Page404 extends React.Component<Page404Props, any> {
  public render() {
    return (
      <Page404Wrapper>
        <Header />

        <Page404Body>
          <div className="msgBoard">
            <div className="msgBoard__msg">お探しのページは見つかりません。</div>
            <Link to={"/"}>
              <PrimaryButton>トップに戻る</PrimaryButton>
            </Link>
          </div>
        </Page404Body>
      </Page404Wrapper>
    );
  }
}
