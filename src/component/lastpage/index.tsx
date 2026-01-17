
import coverImage from "../../image/cover.png"
import { LazyDiv } from "../lazyDiv"

export const LastPage = () => {
  return (
    <LazyDiv className="card cover">
      <div className="image-wrapper">
        <img src={coverImage} alt="sample" />
      </div>
    </LazyDiv>
  )
}
