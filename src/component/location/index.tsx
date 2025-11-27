import { Map } from "./map"
import { ReactComponent as CarIcon } from "../../image/car-icon.svg"
import { ReactComponent as BusIcon } from "../../image/bus-icon.svg"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="sub_title">- 오시는 길 -</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>          
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 1호선, 수인분당선, KTX
            <br />
            <b> 수원역 2층 3번출구</b> 도보 8분거리                       
            <br />
            (롯데 타임빌라스 수원 맞은편)
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 수원역 환승센터(1승강장), 평동동남아파트 하차           
          </div>
        </div>     

        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 네비, 티맵 등 이용
            <br />
            <b>메리빌리아 더 프레스티지</b> 검색
            <br />
            <br />
            - 웨딩홀 내부 주차 가능 (2시간 무료 주차)
            {/* <br /> */}
            {/* ※ 만차시 외부주차장 이용 가능 (주차요원 안내 예정)             */}
          </div>
          <div />          
        </div>
      </LazyDiv>
    </>
  )
}
