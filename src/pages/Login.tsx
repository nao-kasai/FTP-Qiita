import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import PrimaryButton from '../components/atoms/PrimaryButton';

export interface LoginProps {
}

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fafbfc;
`

const LoginBody = styled.div`
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
export default class Login extends React.Component<LoginProps, any> {
  public render() {
    return (
      <LoginWrapper>
        <Header />

        <LoginBody>
          <div className="msgBoard">
            <div className="msgBoard__msg">Qiitaにログイン</div>
            <Link to={"/"}>
              <PrimaryButton>OAuthログイン</PrimaryButton>
            </Link>
          </div>
        </LoginBody>
      </LoginWrapper>
    );
  }
}
