import * as React from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RouterStore } from 'mobx-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faHeart, faComment } from '@fortawesome/free-regular-svg-icons';

export interface PostCardProps {
  title: string;
  tags: string[];
  text: string;
  likeNum: number;
  commentNum: number;
}

const PostCardWrapper = styled.li`
  width: 100%;
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

export default class PostCard extends React.Component<PostCardProps, any> {

  constructor(props: PostCardProps) {
    super(props);  
  }

  render() {

    const tagItems = this.props.tags.map( (tag, idx) => {
      return (
        <li className="post-card__tag" key={idx}>
          <span className="post-card__tag__icon">
            <FontAwesomeIcon icon={faTag} color="#a8b7bf" />
          </span>
          <span className="post-card__tag__name">{tag}</span>
        </li>
      );
    })

    return (
      <PostCardWrapper>
        <h3 className="post-card__title">{this.props.title}</h3>

        <ul className="post-card__tag-group">
          {tagItems}
        </ul>

        <div className="post-card__text">{this.props.text}</div>

        <div className="post-card__bottom">
          <div className="post-card__reaction">
            <div className="post-card__like">
              <span className="post-card__like__icon">
                <FontAwesomeIcon icon={faHeart} color="#879399" />
              </span>
              <span className="post-card__like__num">{this.props.likeNum}</span>
            </div>
            <div className="post-card__comment">
              <span className="post-card__comment__icon">
                <FontAwesomeIcon icon={faComment} color="#879399" />
              </span>
              <span className="post-card__comment__num">{this.props.commentNum}</span>
            </div>
          </div>

          <div className="post-card__author">
            <span className="post-card__author__icon"></span>
            <div className="post-card__author__name">tamappe</div>
            <div className="post-card__author__time">@1時間前</div>
          </div>
        </div>
      </PostCardWrapper>
    );
  }
}

