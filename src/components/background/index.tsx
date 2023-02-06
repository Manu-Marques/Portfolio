import Video from "../../../src/assets/espace.mp4";
import "./styles.css";

export default function Background() {
  return (
    <div className="layout">
    <video className='video' src={Video} autoPlay loop muted />
</div>

  );
}