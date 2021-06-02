import React, {Component} from "react"
import background from "../../../assets/images/background.jpg"
import asher from "../../../assets/images/asher.png"
import cloud from "../../../assets/images/cloud.svg"
import google from "../../../assets/images/google.svg"
import lum from "../../../assets/images/lum.svg"
import ashers from "../../../assets/images/asher.svg"
import dark from "../../../assets/images/dark.svg"
import coffee from "../../../assets/images/coffee.svg"
import asian from "../../../assets/images/asian.svg"
import solo from "../../../assets/images/solo.svg"


class Landing extends Component{

    render(){

      return (
          <div className="landing">
               <img className="landing__backgroundImg" src={background} alt=""/>
               <div className="landing__socialMedia">
                   <img className="landing__socialMedia_asherImg" src={asher} alt=""/>
                   <div className="landing__socialMedia_asher">ASHER</div>
                   <div className="landing__socialMedia_location"><i className="fa fa-map-marker" aria-hidden="true"></i> california</div>
                   <div className="landing__socialMedia_occupation">WA artist based in California.</div>
                   <div className="landing__socialMedia_items">
                   <a className="landing__socialMedia_link" href=""><i className="fa fa-music" aria-hidden="true"></i></a>
                       <a className="landing__socialMedia_link" href=""><i className="fa fa-facebook" aria-hidden="true"></i></a>
                       <a className="landing__socialMedia_link" href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
                       <a className="landing__socialMedia_link" href=""><i className="fa fa-spotify" aria-hidden="true"></i></a>
                       <a className="landing__socialMedia_link" href=""><i className="fa fa-cloud" aria-hidden="true"></i></a>
                       <a className="landing__socialMedia_link" href=""><i className="fa fa-twitter" aria-hidden="true"></i></a>
                       <a className="landing__socialMedia_link" href=""><i className="fa fa-youtube" aria-hidden="true"></i></a>
                   </div>
               </div>
               <div className="landing__grid">
                   <a href="/" className="landing__grid_item landing__grid_item--1">
                        <div className="landing__grid_item-box">.</div>
                        <img src={cloud} alt=""/>
                        <div className="landing__grid_item-title">NEW TUNES</div>
                        <div className="landing__grid_item-subtitle">Lorem/ipsum/dolor</div>
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                   </a>
                   <a href="/" className="landing__grid_item landing__grid_item--2">
                   <div className="landing__grid_item-box">.</div>
                         <img src={asian} alt=""/>
                         <div className="landing__grid_item-title">Stop Asian Hate</div>
                         <div className="landing__grid_item-subtitle">Lorem/ipsum/dolor/sit/amet</div>
                         <i className="fa fa-arrow-right" aria-hidden="true"></i>
                   </a>
                   <a href="/" className="landing__grid_item landing__grid_item--3">
                   <div className="landing__grid_item-box">.</div>
                         <img src={ashers} alt=""/>
                         <div className="landing__grid_item-title">ASHER</div>
                         <div className="landing__grid_item-subtitle"></div>
                         <i className="fa fa-arrow-right" aria-hidden="true"></i>
                   </a>
                   <a href="/" className="landing__grid_item landing__grid_item--4">
                   <div className="landing__grid_item-box">.</div>
                         <img src={coffee} alt=""/>
                         <div className="landing__grid_item-title">buy ASHER a coffee</div>
                         <div className="landing__grid_item-subtitle"></div>
                         <i className="fa fa-arrow-right" aria-hidden="true"></i>
                   </a>
                   <a href="/" className="landing__grid_item landing__grid_item--5">
                   <div className="landing__grid_item-box">.</div>
                         <img src={dark} alt=""/>
                         <div className="landing__grid_item-title">ASHER on Darkroom</div>
                         <div className="landing__grid_item-subtitle"></div>
                         <i className="fa fa-arrow-right" aria-hidden="true"></i>
                   </a>
                   <a href="/" className="landing__grid_item landing__grid_item--6">
                   <div className="landing__grid_item-box">.</div>
                         <img src={google} alt=""/>
                         <div className="landing__grid_item-title">ASHER on Spoon</div>
                         <div className="landing__grid_item-subtitle"></div>
                         <i className="fa fa-arrow-right" aria-hidden="true"></i>
                   </a>
                   <a href="/" className="landing__grid_item landing__grid_item--7">
                   <div className="landing__grid_item-box">.</div>
                         <img src={lum} alt=""/>
                         <div className="landing__grid_item-title">ASHER on LÜM</div>
                         <div className="landing__grid_item-subtitle"></div>
                         <i className="fa fa-arrow-right" aria-hidden="true"></i>
                   </a>
               </div>

               <hr className="hr"/>

               <div className="landing__footer">
                   <div className="landing__footer_branding"><img src={solo} alt=""/> <span>SOLO</span></div>
                   <div className="landing__footer_create">create page</div>
               </div>
          </div>
      )
    }
}


    export default Landing;
