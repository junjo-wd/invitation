import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  SHARE_ADDRESS,
  SHARE_ADDRESS_TITLE,
  WEDDING_DATE,
} from "../../const"
import UrlIcon from "../../image/url_link-icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

export const ShareButton = () => {
  const kakao = useKakao()
  return (
    <LazyDiv className="footer share-button">
            <button
        className="ktalk-share"
        onClick={() => {
          navigator.clipboard.writeText("https://junjo-wd.github.io/invitation/")
            .then(() => {
              alert("URL 주소가 복사되었습니다!");
            })
            .catch((err) => {
              console.error("복사 실패:", err);
            });
        }}
      >
        <img src={UrlIcon} alt="url-icon" /> URL 주소 복사하기
      </button>
    </LazyDiv>
  )
}