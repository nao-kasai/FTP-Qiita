import * as React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export interface PagerProps {
}

const PagerWrapper = styled.div`
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


export default class Pager extends React.Component<PagerProps, any> {

  constructor(props: PagerProps) {
    super(props);
  }

  render() {
    return (
      <PagerWrapper>
        <div className="pager__btn pager__btn--prev">
          <span className="pager__btn__icon">
            <FontAwesomeIcon icon={faAngleLeft} color="#879399" />
          </span>
        </div>

        <span className="pager__num">4</span>

        <div className="pager__btn pager__btn--next">
          <span className="pager__btn__icon">
            <FontAwesomeIcon icon={faAngleRight} color="#879399" />
          </span>
        </div>
      </PagerWrapper>
    );
  }
}

