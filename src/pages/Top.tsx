import * as React from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';

import Header from '../components/organisms/Header';
import PostCard from '../components/organisms/PostCard';
import Pager from '../components/molecules/Pager';

import { COLORS, HEADER_HEIGHT } from '../constants/index';

export interface HomeProps {
  routing: RouterStore;
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLORS.PALE_GRAY};
`;

const PageTitleWrapper = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 0 24px;
`;

const PageTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  color: ${COLORS.CHARCOAL_GRAY2};
`;

const PageTitleIcon = styled.span`
  margin-right: 7px;
  font-size: 28px;
`;

const PageBody = styled.div`
  width: 100%;
  max-width: 960px;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  margin: 0 auto;
  padding: 33px 0 71px;
`;

const PostCardList = styled.ul`
  display: flex;
  flex-direction: column;
`;

@inject('routing')
@observer
export default class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <PageWrapper>
        <Header />

        <PageBody>

          <PageTitleWrapper>
            <PageTitleIcon>
              <FontAwesomeIcon icon={faNewspaper} color={COLORS.CHARCOAL_GRAY2} />
            </PageTitleIcon>

            <PageTitle>注目記事</PageTitle>
          </PageTitleWrapper>

          <PostCardList>
            <PostCard
              title={"iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた"}
              tags={["フリーランス", "Swift", "キャリア", "iOS"]}
              text={"フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。"}
              likeNum={327}
              commentNum={1728}
            />
          </PostCardList>

          <Pager />
          
          <Link to="/mypage">[ mypage ]</Link> <br/>
          <Link to="/detail">[ detail ]</Link> <br/>
          <Link to="/404">[ 404 ]</Link><br/>
          <Link to="/login">[ login ]</Link>
        </PageBody>

      </PageWrapper>
    );
  }
}
