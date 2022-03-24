import "./startContainer.css"
import BlockHeaderText from "../../components/pageTitle/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageTitle/subheader/blockSubheaderText.jsx"
import discoverApp from "../../assets/img/discover-app.png"
import Lottie from 'react-lottie-player'
import growthAnimation from "../../assets/lottie/growth.json"

const StartContainer = () => {
    const header = 'Become a better you'
    const subheader = 'with 15-min bite-sized reads and audios of the world’s best nonfiction books'

    return (
        <>
            <section className="wrapper">
            <BlockHeaderText text={header}/>
            <BlockSubheaderText text={subheader}/>
            <div className="illustration-box">
            <Lottie className={"lottie"}
                loop
                animationData={growthAnimation}
                play
            />
            <img src={discoverApp} alt="discover-app"/>
            </div>
            </section>
        </>
    );
  }
  
  export default StartContainer;
  