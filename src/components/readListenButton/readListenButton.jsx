import "./readListenButton.css"
import { useState } from "react";
import listenPhoneImg from "../../assets/img/listen-phone.png";
import readPhoneImg from "../../assets/img/read-phone.png";


export const ReadListenButton = () => {
    const [regime, setRegime] = useState({
        isListen: true,
        readLabelColor: "gray",
        listenLabelColor: "black",
        image: listenPhoneImg
    });

    const handleChoice = () => {
        setRegime({
        isListen: !regime.isListen, 
        readLabelColor: setLabelGray(!regime.isListen),
        listenLabelColor: setLabelGray(regime.isListen),
        image: showImage(regime.isListen)
        });
    }  

    const setLabelGray = (isState) => !isState ? "black" : "gray";
    const showImage = (isState) => !isState ? listenPhoneImg : readPhoneImg;

    return (
        <>
        <div className="toggle-button-box">
        <span style={{color: regime.listenLabelColor}}>Listen</span>
            <label className="switch">
            <input type="checkbox" onChange={handleChoice}/>
            <span class="slider round"></span>
            </label>
        <span style={{color: regime.readLabelColor}}>Read</span>
        </div>
        <img className="read-listen-img" src={regime.image} alt="" />
        </>
    )
}

export default ReadListenButton;