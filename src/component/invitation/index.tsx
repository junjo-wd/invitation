import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../../component/store"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import { ReactComponent as PhoneIcon } from "../../image/phone-flip-icon.svg"
import { ReactComponent as EnvelopeIcon } from "../../image/envelope-icon.svg"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      <h2 className="sub_title">- 초대장 -</h2>

      <div className="break" />

      <div className="contHOLIDAYSent">벚꽃이 흩날리는 4월의 어느날,</div>
      <div className="contHOLIDAYSent">저희 결혼합니다.</div> 
      <div className="content"></div>      

      <div className="content">오래전 작은 인연이 우리를 연인으로 만들었고</div>
      <div className="content">그 인연이 이제 하나가 됩니다.</div> 
      <div className="break" />
      <div className="content">하나 된 삶을 향해 첫걸음을 내딛는 뜻깊은 날,</div>
      <div className="content">기꺼이 오셔서 시작하는 모습을 함께해주시면</div>
      <div className="content">감사하겠습니다.</div>

      <div className="break" />
      <div className="content">늘 곁에서 아껴주신 고마운 분들을</div>
      <div className="content">기쁜 마음으로 초대합니다.</div>

      <div className="break" />
      <div className="break" />

      <div className="name">
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM_FULLNAME}
      </div>
      <div className="name">
        {BRIDE_FATHER} · {BRIDE_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{BRIDE_TITLE}</span>
        </span>{" "}
        {BRIDE_FULLNAME}
      </div>

      <div className="break" />

      {/* <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">축하 인사 전하기</div>
                <div className="subtitle">
                  전화, 문자메세지로 축하 인사를 전해보세요.
                </div>
              </div>
            ),
            content: (
              <>
                <div className="contact-info">
                  {GROOM_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
                <div className="contact-info">
                  {BRIDE_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                닫기
              </Button>
            ),
          })
        }}
      >
        연락하기
      </Button> */}
    </LazyDiv>
  )
}
