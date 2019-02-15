import * as React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Header from '../components/organisms/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faHeart, faFolder } from '@fortawesome/free-regular-svg-icons';


export interface DetailProps {
}

const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #fafbfc;
`

const DetailBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 960px;
  margin: 0 auto;
`;

const ArticleDetail = styled.div`
  display: flex;
  margin-top: 32px;

  .article-icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 16px;
    width: 48px;

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 48px;
      height: 48px;
      background-color: #fff;
      border: 1px solid #e3edf3; 
      border-radius: 50%;
      font-size: 24px;
    }

    .article-icons__icon + .article-icons__icon {
      margin-top: 24px;
    }
  }

  .article-detail {
    padding: 32px;
    width: 896px;
    background-color: #fff;

    &__title {
      margin-bottom: 20px;
      font-size: 32px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #292f33;
    }

    &__tag-group {
      margin-bottom: 27px;
      font-size: 12px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #3e474d;
    }

    &__h1 {
      margin-bottom: 15px;
      padding-bottom: 8px;
      font-size: 28px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #292f33;
      border-bottom: 1px solid #e3edf3;
    }

    &__h2 {
      margin-bottom: 16px;
      font-size: 24px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #292f33;
    }
    
    &__h3 {
      margin-bottom: 16px;
      font-size: 21px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #292f33;
    }

    &__text {
      margin-bottom: 32px;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #292f33;

      > strong {
        font-weight: bold;
      }

      > span {
        color: #4aac00;
      }
    }

    &__quote {
      margin-bottom: 12px;
      padding: 8px 15px;
      font-size: 16px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.31;
      letter-spacing: normal;
      color: #879399;
      border-left: 2px solid #E3EDF3;

      > span {
        color: #4aac00;
      }
    }

    &__list {
      margin-bottom: 16px;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 2;
      letter-spacing: normal;
      color: #292f33;
      
      &__item {
        position: relative;
        padding: 0 8px;

        &:before {
          position: absolute;
          top: 50%;
          left: 0;
          display: block;
          content: "";
          width: 3px;
          height: 3px;
          background-color: #292f33;
          border-radius: 50%;
        }

        &--code {
          > span {
            display: inline-block;
            padding-left: 4px;
            padding-right: 4px;
            background-color: #f4f8fa;
            border-radius: 4px;
          }
        }
      }
    }

    &__author {
      display: flex;
      margin-top: 48px;
      padding-top: 23px;
      border-top: 1px solid #e3edf3;

      &__column-l {
        margin-right: 16px;
        width: 48px;
      }

      &__img {
        width: 48px;
        height: 48px;
        background-color: #fff;
        border: 1px solid #e3edf3;
        border-radius: 8px;
      }

      &__column-r {
        display: flex;
        flex-direction: column;
      }

      &__head {
        display: flex;
        margin-bottom: 8px;
      }

      &__info-set {

      }

      &__name {
        display: inline-block;
        margin-bottom: 8px;
        padding-right: 8px;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #292f33;
      }

      &__time {
        display: inline-block;
        font-size: 16px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #a8b7bf;
      }

      &__account {
        font-size: 12px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1;
        letter-spacing: normal;
        color: #879399;
      }

      &__btn-wrapper {
        display: flex;
        align-items: center;
      }
      /* あとでコンポーネント化 */
      &__btn {
        margin-left: 12px;
        padding: 7px 23px;
        background-color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4aac00;
        border: 1px solid #4aac00;
        border-radius: 4px;
      }

      &__description {
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: normal;
        color: #3e474d;
      }
    }

  }
`;

@observer
export default class Detail extends React.Component<DetailProps, any> {
  public render() {
    return (
      <DetailWrapper>
        <Header />

        <DetailBody>
          <ArticleDetail>
            <div className="article-icons">
              <div className="article-icons__icon">
                <FontAwesomeIcon icon={faHeart} color="#879399" />
              </div>
              <div className="article-icons__icon">
                <FontAwesomeIcon icon={faFolder} color="#879399" />
              </div>
            </div>

            <div className="article-detail">
              <div className="article-detail__title">ZOZO大忘年会でFirebaseを使った1,000人規模のリアルタイムアンケートを費用2円で制作した話</div>
              
              <ul className="article-detail__tag-group">
                タグ（PostCard内の記述をコンポーネント化）
              </ul>

              <div className="article-detail__h1">h1文字になります</div>
              <div className="article-detail__h2">h2文字になります</div>
              <div className="article-detail__h3">h3文字になります</div>
              <div className="article-detail__text">
                当日会場にて弊社の昨年の事業紹介や、「<strong>楽しく働く</strong>」というコンセプトの<span>動画</span>を流し、動画の合間で質問をし動画と一体となるような演出を行いました。
                その質問に対して全社員それぞれのスマートフォンで回答できるシステムを作ったので、その制作の裏側や、当日の様子などご紹介させていただきます。
              </div>

              <div className="article-detail__quote">
                この記事は<span>ZOZOテクノロジーズ TECH BLOG</span>にも同じ内容で投稿しています。よろしければ他の記事もご覧ください。
              </div>

              <ul className="article-detail__list">
                <li className="article-detail__list__item">箇条書き１</li>
                <li className="article-detail__list__item">箇条書き２</li>
                <li className="article-detail__list__item article-detail__list__item--code"><span>code block</span></li>
                <li className="article-detail__list__item">箇条書き４</li>
              </ul>

              <div className="article-detail__author">
                <div className="article-detail__author__column-l">
                  <div className="article-detail__author__img">photo</div>
                </div>

                <div className="article-detail__author__column-r">
                  
                  <div className="article-detail__author__head">
                    <div className="article-detail__author__info-set">
                      <div className="article-detail__author__name">智仁 高橋</div>
                      <div className="article-detail__author__time">@1日前</div>
                      <div className="article-detail__author__account">@tomohito_takahashi</div>
                    </div>
                    
                    <div className="article-detail__author__btn-wrapper">
                      <button className="article-detail__author__btn">フォロー</button>
                    </div>
                  </div>

                  <div className="article-detail__author__description">
                    こんにちは！ZOZOでフロントエンドエンジニアやってます！
                  </div>
                </div>


              </div>
            </div>
          </ArticleDetail>

          <div className="article-comment">
            <div className="title">コメント</div>
            <ul className="comment-list">
              <li className="comment-list__item">
                NAVE
              </li>
            </ul>
          </div>
        </DetailBody>
  
        <Link to={"/"}>[ HOME ]</Link>
      </DetailWrapper>
    );
  }
}
