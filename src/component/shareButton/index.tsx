import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  SHARE_ADDRESS,
  SHARE_ADDRESS_TITLE,
  WEDDING_DATE,
} from "../../const"
import UrlIcon from "../../image/url_link-icon.png"
import ktalkIcon from "../../image/ktalk-icon.png"
import YoutubeIcon from "../../image/youtube-Icon.png"
import { LazyDiv } from "../lazyDiv"
import { useKakao } from "../store"

export const ShareButton = () => {
  const kakao = useKakao()
  return (

    <LazyDiv className="footer share-button">
     
        <button
          className="ktalk-share"
          onClick={() => {
            if (!kakao) {
              return
            }

            kakao.Share.sendDefault({
              objectType: "location",
              address: SHARE_ADDRESS,
              addressTitle: SHARE_ADDRESS_TITLE,
              content: {
                title: `${GROOM_FULLNAME} ❤️ ${BRIDE_FULLNAME}의 결혼식에 초대합니다.`,
                description:
                  WEDDING_DATE.format("YYYY년 MMMM D일 dddd A h시") +
                  "\n" +
                  LOCATION,
                imageUrl:
                  window.location.protocol +
                  "//" +
                  window.location.host +
                  process.env.PUBLIC_URL +
                  "/preview_image.png",
                link: {
                  mobileWebUrl:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    process.env.PUBLIC_URL,
                  webUrl:
                    window.location.protocol +
                    "//" +
                    window.location.host +
                    process.env.PUBLIC_URL,
                },
              },
              buttons: [
                {
                  title: "초대장 보기",
                  link: {
                    mobileWebUrl:
                      window.location.protocol +
                      "//" +
                      window.location.host +
                      process.env.PUBLIC_URL,
                    webUrl:
                      window.location.protocol +
                      "//" +
                      window.location.host +
                      process.env.PUBLIC_URL,
                  },
                },
              ],
            })
          }}
        >
          <img src={ktalkIcon} alt="ktalk-icon" /> 카카오톡으로 공유하기
        </button>

    </LazyDiv>
  )
}


export const ShareButton_url = () => {
  return (

    <LazyDiv className="footer share-button">
 
      <button
        className="ktalk-share"
        onClick={() => {
          navigator.clipboard.writeText("https://invitation.heehye.kr")
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

export const ShareButton_youtube = () => {
  return (
    <LazyDiv className="footer share-button">

      <button
        className="ktalk-share"
        onClick={() => {
          window.open(
            "https://m.youtube.com/watch?v=PnpmKfZJgOk&pp=0gcJCRUKAYcqIYzv",
            "_blank", // 새 탭으로 열기
            "noopener,noreferrer" // 보안 옵션
          );
        }}
      >
        <img src={YoutubeIcon} alt="youtube-icon" /> 오시는 길 (유튜브)
      </button>

    </LazyDiv>
  )
}