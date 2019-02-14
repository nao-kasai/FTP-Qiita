import * as React from 'react';
import styled from 'styled-components';

export interface HeaderProps {
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 48px;
  width: 100%;
  height: 64px;
  background-color: #fff;
  border-bottom: 1px solid #eaf1f5;

  .header {
    &__left {
      display: flex;
      align-items: center;

    .logo {
        margin-right: 64px;
        width: 75px;
        height: 26px;
        background: url(images/common/qiita-logo@2x.png) no-repeat;
        background-size: 100%;
      }

      > ul {
        li {
          position: relative;

          &.is-active:after {
            position: absolute;
            bottom: -23px;
            left: 0;
            display: block;
            content: "";
            width: 48px;
            height: 2px;
            background-color: #A7E07E;
          }
        }
      }
    }

    &__right {
      display: flex;
      align-items: center;
      .user-icon {
        display: block;
        width: 36px;
        height: 36px;
        background: url(images/common/user@2x.png) no-repeat;
        background-size: 100%;
      }
    }
  }
`;

export default class Header extends React.Component<HeaderProps, any> {
  public render() {
    return (
      <HeaderWrapper>
        <div className="header__left">
          <h1 className="logo"></h1>
          <ul>
            <li className="is-active">ホーム</li>
          </ul>
        </div>

        <div className="header__right">
          <span className="user-icon"></span>
        </div>
      </HeaderWrapper>
    );
  }
}