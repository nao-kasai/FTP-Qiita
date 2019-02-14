import * as React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RouterStore } from 'mobx-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

import Header from '../components/organisms/Header';

export interface HomeProps {
  routing: RouterStore;
}

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafbfc;
`;

const PageTitle = styled.h2`
  display: flex;
  align-items: center;
  margin: 0 0 24px;

  .page-title {
    &__icon {
      margin-right: 7px;
      font-size: 28px;
    }
    &__title {
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

const PageBody = styled.div`
  width: 100%;
  max-width: 960px;
  min-height: calc(100vh - 64px); /* Header height*/
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
  padding: 24px;
  background-color: #fff;
  border: 1px solid #eaf1f5;

  & + & {
    margin-top: 24px;
  }

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
      display: flex;
      align-items: center;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      &__icon {
        margin-right: 8px;
        font-size: 16px;
      }

      &__name {
        font-size: 12px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #3e474d;
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
      display: flex;
      align-items: center;
      margin-right: 20px;

      &__icon {
        margin-right: 8px;
        font-size: 16px;
      }

      &__num {
        font-size: 12px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
      }
    }

    &__comment {
      display: flex;
      align-items: center;
      margin-right: 20px;

      &__icon {
        margin-right: 8px;
        font-size: 16px;
      }

      &__num {
        font-size: 12px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
      }
    }

    &__author {
      display: flex;
      align-items: center;
      color: #3e474d;
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1;
      letter-spacing: normal;

      &__icon {
        display: inline-block;
        margin-right: 8px;
        width: 24px;
        height: 24px;
        background: url(images/common/oval@2x.png) no-repeat;
        background-size: 100%;
      }

      &__name {
        margin-right: 8px;
      }

      &__time {

      }
    }
  }
`;

const Pager = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 51px auto 65px;
  width: 140px;

  .pager {
    &__num {
      margin: 0 32px;
      width: 11px;
      height: 27px;
      font-size: 18px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #879399;
    }

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: #fff;
      border: 1px solid #eaf1f5;
      border-radius: 50%;
      font-size: 24px;

      &--prev {
        .pager__btn__icon {
          transform: translateX(-1px);
        }
      }

      &--next {
        .pager__btn__icon {
          transform: translateX(1px);
        }
      }
    }
  }
`;

@inject('routing')
@observer
export default class Home extends React.Component<HomeProps, any> {
  public render() {
    return (
      <PageWrapper>
        <Header />

        <PageBody>
          <PageTitle>
            <span className="page-title__icon">
              <FontAwesomeIcon icon={faNewspaper} color="#3e474d" />
            </span>
            <span className="page-title__title">注目記事</span>
          </PageTitle>

          <PostCardList>
            <PostCard>
              <h3 className="post-card__title">iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた</h3>
              <div className="post-card__tag-group">
                <div className="post-card__tag">
                  <span className="post-card__tag__icon">
                    <FontAwesomeIcon icon={faTag} color="#a8b7bf" />
                  </span>
                  <span className="post-card__tag__name">フリーランス</span>
                </div>

                <div className="post-card__tag">
                  <span className="post-card__tag__icon">
                    <FontAwesomeIcon icon={faTag} color="#a8b7bf" />
                  </span>
                  <span className="post-card__tag__name">Swift</span>
                </div>

                <div className="post-card__tag">
                  <span className="post-card__tag__icon">
                    <FontAwesomeIcon icon={faTag} color="#a8b7bf" />
                  </span>
                  <span className="post-card__tag__name">キャリア</span>
                </div>

                <div className="post-card__tag">
                  <span className="post-card__tag__icon">
                    <FontAwesomeIcon icon={faTag} color="#a8b7bf" />
                  </span>
                  <span className="post-card__tag__name">iOS</span>
                </div>
              </div>

              <div className="post-card__text">
              フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。
              </div>

              <div className="post-card__bottom">
                <div className="post-card__reaction">
                  <div className="post-card__like">
                    <span className="post-card__like__icon">
                      <FontAwesomeIcon icon={faHeart} color="#879399" />
                    </span>
                    <span className="post-card__like__num">324</span>
                  </div>
                  <div className="post-card__comment">
                    <span className="post-card__comment__icon">
                      <FontAwesomeIcon icon={faComment} color="#879399" />
                    </span>
                    <span className="post-card__comment__num">728</span>
                  </div>
                </div>

                <div className="post-card__author">
                  <span className="post-card__author__icon"></span>
                  <div className="post-card__author__name">tamappe</div>
                  <div className="post-card__author__time">@1時間前</div>
                </div>
              </div>
            </PostCard>

            <PostCard>
              <h3 className="post-card__title">iOSエンジニアがフリーランス案件の面談で良く聞かれる質問集をまとめてみた</h3>
              <div className="post-card__tag-group">
                <div className="post-card__tag">
                  <span className="post-card__tag__icon">
                    <FontAwesomeIcon icon={faTag} color="#a8b7bf" />
                  </span>
                  <span className="post-card__tag__name">フリーランス</span>
                </div>

                <div className="post-card__tag">
                  <span className="post-card__tag__icon">
                    <FontAwesomeIcon icon={faTag} color="#a8b7bf" />
                  </span>
                  <span className="post-card__tag__name">Swift</span>
                </div>

                <div className="post-card__tag">
                  <span className="post-card__tag__icon">
                    <FontAwesomeIcon icon={faTag} color="#a8b7bf" />
                  </span>
                  <span className="post-card__tag__name">キャリア</span>
                </div>

                <div className="post-card__tag">
                  <span className="post-card__tag__icon">
                    <FontAwesomeIcon icon={faTag} color="#a8b7bf" />
                  </span>
                  <span className="post-card__tag__name">iOS</span>
                </div>
              </div>

              <div className="post-card__text">
              フリーランスのiOSエンジニアです。最近はiOSとAndroidの両刀使いになりました。わかる言語は英語/Swift/Objective-C/Java/Kotlin/Ruby/PHPです。注目のトレンドはブロックチェーンでDAppsです。趣味はポーカーとスプラトゥーン2。
              </div>

              <div className="post-card__bottom">
                <div className="post-card__reaction">
                  <div className="post-card__like">
                    <span className="post-card__like__icon">
                      <FontAwesomeIcon icon={faHeart} color="#879399" />
                    </span>
                    <span className="post-card__like__num">324</span>
                  </div>
                  <div className="post-card__comment">
                    <span className="post-card__comment__icon">
                      <FontAwesomeIcon icon={faComment} color="#879399" />
                    </span>
                    <span className="post-card__comment__num">728</span>
                  </div>
                </div>

                <div className="post-card__author">
                  <span className="post-card__author__icon"></span>
                  <div className="post-card__author__name">tamappe</div>
                  <div className="post-card__author__time">@1時間前</div>
                </div>
              </div>
            </PostCard>
          </PostCardList>

          <Pager>
            <div className="pager__btn pager__btn--prev">
              <span className="pager__btn__icon"><FontAwesomeIcon icon={faAngleLeft} color="#879399" /></span>
            </div>

            <span className="pager__num">4</span>

            <div className="pager__btn pager__btn--next">
              <span className="pager__btn__icon"><FontAwesomeIcon icon={faAngleRight} color="#879399" /></span>
            </div>
          </Pager>

          <Link to="/mypage">[ mypage ]</Link> 
        </PageBody>

      </PageWrapper>
    );
  }
}
