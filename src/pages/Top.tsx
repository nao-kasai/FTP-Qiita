import * as React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RouterStore } from 'mobx-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faHeart, faComment } from '@fortawesome/free-solid-svg-icons';

export interface HomeProps {
  routing: RouterStore;
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafbfc;
`

const Header = styled.div`
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
`

const PageBody = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 33px 0 71px;
`;

const PostCardList = styled.ul`
  display: flex;
  flex-direction: column;

`;

const PostCard = styled.li`
  width: 100%;
  /* height: 197px; */
  margin-bottom: 24px;
  padding: 24px;
  background-color: #fff;
  border: 1px solid #eaf1f5;

  .post-card {
    &__title {
      margin: 0 0 11px;
      font-size: 18px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #292f33;
    }

    &__tag-group {
      display: flex;
      margin-bottom: 11px;
    }

    &__tag {
      display: inline-block;
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #3e474d;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }

    &__text {
      margin-bottom: 19px;
      font-family: NotoSansCJKjp;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #3e474d;
    }

    &__bottom {
      display: flex;
      justify-content: space-between;
    }

    &__reaction {
      display: flex;
      justify-content: flex-start;
      color: #3e474d;
    }

    &__like {
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      margin-right: 20px;
    }

    &__comment {
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
    }

    &__author {
      display: flex;
      color: #3e474d;
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
    }
  }
`;

const testBtn = styled.button`
`

@inject('routing')
@observer
export default class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <PageWrapper>
        <Header>
          <div className="header__left">
            <h1 className="logo"></h1>
            <ul>
              <li className="is-active">ホーム</li>
            </ul>
          </div>
          <div className="header__right">
            <span className="user-icon"></span>
          </div>
        </Header>

        <PageBody>
          <h2>注目記事</h2>

          <PostCardList>
            <PostCard>
              <h3 className="post-card__title">iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた</h3>
              <div className="post-card__tag-group">
                <span className="post-card__tag">
                  <FontAwesomeIcon icon={faTag} color="#a8b7bf"/>フリーランス
                </span>
                <span className="post-card__tag">
                  <FontAwesomeIcon icon={faTag} color="#a8b7bf" />Swift
                </span>
                <span className="post-card__tag">
                  <FontAwesomeIcon icon={faTag} color="#a8b7bf" />キャリア
                </span>
                <span className="post-card__tag">
                  <FontAwesomeIcon icon={faTag} color="#a8b7bf" />iOS
                </span>
              </div>

              <div className="post-card__text">
              フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。
              </div>

              <div className="post-card__bottom">
                <div className="post-card__reaction">
                  <div className="post-card__like">
                    <FontAwesomeIcon icon={['far', 'heart']} color="#a8b7bf" />324
                  </div>
                  <div className="post-card__comment">
                    <FontAwesomeIcon icon={['far', 'comment']} color="#a8b7bf" />1728
                  </div>
                </div>

                <div className="post-card__author">
                  <div className="post-card__user-name">tamappe</div>
                  <div className="post-card__timestamp">@1時間前</div>
                </div>
              </div>
            </PostCard>

            <PostCard>
              <h3 className="post-card__title">iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた</h3>
              <div className="post-card__tag-group">
                <span className="post-card__tag">フリーランス</span>
                <span className="post-card__tag">Swift</span>
                <span className="post-card__tag">キャリア</span>
                <span className="post-card__tag">iOS</span>
              </div>

              <div className="post-card__text">
              フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。
              </div>

              <div className="post-card__bottom">
                <div className="post-card__reaction">
                  <div className="post-card__like">324</div>
                  <div className="post-card__comment">1728</div>
                </div>

                <div className="post-card__author">
                  <div className="post-card__user-name">tamappe</div>
                  <div className="post-card__timestamp">@1時間前</div>
                </div>
              </div>
            </PostCard>


          </PostCardList>

          home<br/>
          <Link to="/mypage">[ mypage ]</Link> 
        </PageBody>

      </PageWrapper>
    );
  }
}
