import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"
import image1 from "./image/image1.png"
import image2 from "./image/image2.png"
import image3 from "./image/image3.png"
import image4 from "./image/image4.png"
import image5 from "./image/image5.png"
import image6 from "./image/image6.png"
import image7 from "./image/image7.png"
import image8 from "./image/image8.png"
import image9 from "./image/image9.png"
import image10 from "./image/image10.png"
import image11 from "./image/image11.png"
import image12 from "./image/image12.png"
import image13 from "./image/image13.png"
import image14 from "./image/image14.png"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-04-12 11:00", "Asia/Seoul")
export const HOLIDAYS = [15] //holiday 4월은 없음

export const LOCATION = "메리빌리아 더 프레스티지"
export const HALL_NAME = "2층 컨벤션홀"
export const LOCATION_ADDRESS  = "경기도 수원시 권선구 세화로 116(서둔동 389)"

export const SHARE_ADDRESS = LOCATION
export const SHARE_ADDRESS_TITLE = LOCATION

export const WEDDING_HALL_POSITION = [126.996439, 37.262723] //메리빌리아 더 프레스티지 위도와 경도 구글로 찾아서 순서 반대로 입력하면 됨

export const NMAP_PLACE_ID = 1856237237
export const KMAP_PLACE_ID = 871976307

export const BRIDE_FULLNAME = "조혜진"
export const BRIDE_FIRSTNAME = "혜진"
export const BRIDE_TITLE = "딸"
export const BRIDE_FATHER = "조병훈"
export const BRIDE_MOTHER = "윤난희"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-4983-0724",
    account: "우리은행 1002935977770",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-0000-0000",
    account: "우리은행 06309895302402",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-0000-0000",
    account: "우리은행 26907009546",
  },
]

export const GROOM_FULLNAME = "전희원"
export const GROOM_FIRSTNAME = "희원"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "전영기"
export const GROOM_MOTHER = "오영이"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-9029-7431",
    account: "신한은행 110348729220",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-0000-0000",
    account: "신한은행 110275667074",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-0000-0000",
    account: "신한은행 110275667074",
  },
]

export const GALLERY_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  
]
