import { useEffect, useState, useRef } from "react"
import nmapIcon from "../../image/nmap-icon.png"
import knaviIcon from "../../image/knavi-icon.png"
import tmapIcon from "../../image/tmap-icon.png"
import { ReactComponent as LockIcon } from "../../image/lock-icon.svg"
import { ReactComponent as UnlockIcon } from "../../image/unlock-icon.svg"
import {
  KMAP_PLACE_ID,
  LOCATION,
  NMAP_PLACE_ID,
  WEDDING_HALL_POSITION,
} from "../../const"

const NAVER_CLIENT_ID = "tu4l8dvg87" // 하드코딩

export const Map = () => {
  return <NaverMap />
}

const NaverMap = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [locked, setLocked] = useState(true)
  const [showLockMessage, setShowLockMessage] = useState(false)
  const lockMessageTimeout = useRef<NodeJS.Timeout>()

  const checkDevice = () => {
    const userAgent = window.navigator.userAgent
    if (userAgent.match(/(iPhone|iPod|iPad)/)) return "ios"
    else if (userAgent.match(/(Android)/)) return "android"
    else return "other"
  }

  useEffect(() => {
    if (!ref.current) return

    // 스크립트 로드
    const existingScript = document.querySelector(
      `script[src*="naver.maps.js"]`
    )
    if (!existingScript) {
      const script = document.createElement("script")
      script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${NAVER_CLIENT_ID}`
      script.async = true
      script.onload = () => {
        const map = new (window as any).naver.maps.Map(ref.current, {
          center: WEDDING_HALL_POSITION,
          zoom: 17,
        })
        new (window as any).naver.maps.Marker({
          position: WEDDING_HALL_POSITION,
          map,
        })
      }
      document.head.appendChild(script)
    } else {
      const map = new (window as any).naver.maps.Map(ref.current, {
        center: WEDDING_HALL_POSITION,
        zoom: 17,
      })
      new (window as any).naver.maps.Marker({
        position: WEDDING_HALL_POSITION,
        map,
      })
    }
  }, [])

  return (
    <>
      <div className="map-wrapper">
        {locked && (
          <div
            className="lock"
            onTouchStart={() => {
              setShowLockMessage(true)
              clearTimeout(lockMessageTimeout.current)
              lockMessageTimeout.current = setTimeout(
                () => setShowLockMessage(false),
                3000
              )
            }}
            onMouseDown={() => {
              setShowLockMessage(true)
              clearTimeout(lockMessageTimeout.current)
              lockMessageTimeout.current = setTimeout(
                () => setShowLockMessage(false),
                3000
              )
            }}
          >
            {showLockMessage && (
              <div className="lock-message">
                <LockIcon /> 자물쇠 버튼을 눌러
                <br />
                터치 잠금 해제 후 확대 및 이동해 주세요.
              </div>
            )}
          </div>
        )}
        <button
          className={"lock-button" + (locked ? "" : " unlocked")}
          onClick={() => {
            clearTimeout(lockMessageTimeout.current)
            setShowLockMessage(false)
            setLocked((locked) => !locked)
          }}
        >
          {locked ? <LockIcon /> : <UnlockIcon />}
        </button>
        <div className="map-inner" ref={ref}></div>
      </div>

      <div className="navigation">
        {/* 네이버 지도 */}
        <button
          onClick={() => {
            switch (checkDevice()) {
              case "ios":
              case "android":
                window.open(`nmap://place?id=${NMAP_PLACE_ID}`, "_self")
                break
              default:
                window.open(
                  `https://map.naver.com/p/entry/place/${NMAP_PLACE_ID}`,
                  "_blank"
                )
                break
            }
          }}
        >
          <img src={nmapIcon} alt="naver-map-icon" />
          네이버 지도
        </button>

        {/* 카카오 내비 */}
        <button
          onClick={() => {
            switch (checkDevice()) {
              case "ios":
              case "android":
                if ((window as any).kakao)
                  (window as any).kakao.Navi.start({
                    name: LOCATION,
                    x: WEDDING_HALL_POSITION[0],
                    y: WEDDING_HALL_POSITION[1],
                    coordType: "wgs84",
                  })
                break
              default:
                window.open(
                  `https://map.kakao.com/link/map/${KMAP_PLACE_ID}`,
                  "_blank"
                )
                break
            }
          }}
        >
          <img src={knaviIcon} alt="kakao-navi-icon" />
          카카오 내비
        </button>

        {/* T맵 */}
        <button
          onClick={() => {
            switch (checkDevice()) {
              case "ios":
              case "android":
                const params = new URLSearchParams({
                  goalx: WEDDING_HALL_POSITION[0].toString(),
                  goaly: WEDDING_HALL_POSITION[1].toString(),
                  goalName: LOCATION,
                })
                window.open(`tmap://route?${params.toString()}`, "_self")
                break
              default:
                alert("모바일에서 확인하실 수 있습니다.")
                break
            }
          }}
        >
          <img src={tmapIcon} alt="t-map-icon" />
          티맵
        </button>
      </div>
    </>
  )
}
