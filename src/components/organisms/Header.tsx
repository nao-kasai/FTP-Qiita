import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/index';

export interface HeaderProps {
}

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 48px;
  width: 100%;
  height: 64px;
  background-color: ${COLORS.WHITE};
  border-bottom: 1px solid ${COLORS.LIGHT_GRAY};
`;

const PageNav = styled.ul`
  display: flex;

  > li {
    position: relative;

    &.is-active:after {
      position: absolute;
      bottom: -23px;
      left: 0;
      display: block;
      content: "";
      width: 100%;
      height: 2px;
      background-color: ${COLORS.PALE_GREEN};
    }

    &:not(:last-child) {
      margin-right: 32px;
    }
  }
`;

const UserIcon = styled.span`
  display: block;
  margin-left: auto;
  width: 36px;
  height: 36px;
  background: url(images/common/user@2x.png) no-repeat;
  background-size: 100%;
`;

const Logo = styled.h1`
  margin-right: 64px;
  width: 75px;
  height: 26px;
  background: url(images/common/qiita-logo@2x.png) no-repeat;
  background-size: 100%;
`;

const pageNavListAry = [
  {
    name: 'ホーム',
    href: '/',
  },
  // {
  //   name: 'マイページ',
  //   href: '/mypage',
  // }
];

export default class Header extends React.Component<HeaderProps, any> {
  public render() {
    
    const pageNavList = pageNavListAry.map((item, idx) => {
      return (
        <li key={idx} className="is-active">{item.name}</li>
        
        // <li key={idx} className="is-active">
        //   <Link to={item.href}>{item.name}</Link>
        // </li>
      );
    });

    return (
      <HeaderInner>
        <Logo />
        <PageNav>
          {pageNavList}
        </PageNav>
        <UserIcon />
      </HeaderInner>
    );
  }
}