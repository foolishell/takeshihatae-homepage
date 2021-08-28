import "./Gear.scss"
import gearLive1 from '../assets/gear__live1.jpg'
import gearLive2 from '../assets/gear__live2.jpg'
import gearMaple1 from '../assets/gear__maple1.jpg'
import gearMaple2 from '../assets/gear__maple2.jpg'


export const Gear = () => {
  return (
    <div>
      <div className="gear">
        <div className="gear__container">
          <h3>Supported by YAMAHA Drums</h3>
          <div className="gear__live">
            <div className="gear__live--cover">
              <h3>YAMAHA LIVE CUSTOM（Emerald Shadow Sunburst、Black Shadow Sunburst）</h3>
              <p>Kick 22×16、20×16、18×14、Tom 10×7、12×8、 Floor Tom 14×13、16×15</p>
            </div>
            <div className="gear__live--img1">
              <img alt=""  src={ gearLive1 } />
            </div>
            <div className="gear__live--img2">
              <img alt="" src={ gearLive2 } />
            </div>
          </div>
          <div className="gear__maple">
            <div className="gear__maple--cover">
              <h3>YAMAHA MAPLE CUSTOM（Solid Black）</h3>
              <p>Kick 20×16、Tom (Power Hoop) 10×8、12×8、14×12、16×14</p>
            </div>
            <div className="gear__maple--img1">
              <img alt=""  src={ gearMaple1 } />
            </div>
            <div className="gear__maple--img2">
              <img alt="" src={ gearMaple2 } />
            </div>
          </div>
          <div className="gear__others">
            <h3>HARDWARE</h3>
            <p>DFP9500C(Belt Drive)、HS1200、SS950、CS755、CH755、TH840、DS840、WS904A、CL945B、CL940B</p>
          </div>
          <div className="gear__others">
            <h3>SNARE DRUM</h3>
            <p>YAMAHA SD-955AE 14×5.5 (Aluminum)、SD855ME 14×5.5 (Steel)、BSD0105 14×5.5(Birch)、 WSD0535 13×5.5(Beech Absolute Nouveau)、etc</p>
          </div>
          <div className="gear__others">
            <h3>YAMAHA-REMO DRUM HEAD</h3>
            <p>VIC FIRTH DRUM STICK 5A & AH5、ROOT505、Heritage Brush、Medium Mallet LP MAMBO COWBELL</p>
          </div>
          <div className="gear__others">
            <h3>XL SPECIALTY PERCUSSION’S PROTECHTOR CASES</h3>
          </div>
          <div className="gear__others">
            <h3>SHURE MICROPHONE & EARPHONE</h3>
          </div>
          <div className="gear__others">
            <h3>OYAIDE’S AUDIO CABLES</h3>
          </div>
          <div className="gear__others">
            <h3>OTOMIX STINGRAY ESCAPE</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
