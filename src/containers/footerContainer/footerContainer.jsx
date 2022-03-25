import "./footerContainer.css"
import BlockHeaderText from "../../components/pageText/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageText/subheader/blockSubheaderText.jsx"
import logo from '../../assets/img/logo.png';
import fbLogo from '../../assets/img/fb-logo.svg'
import instagramLogo from '../../assets/img/insta-logo.svg'
import twitterLogo from '../../assets/img/twitter-logo.svg'

const FooterContainer = () => {
    const header = 'Empower yourself with the best books insights'
    const subheader = 'Social media:'

    return (
        <>
            <section className="wrapper footer-page">
            <div className="logo">
                <img src={logo} alt="headway" />
            </div>
            <BlockHeaderText text={header}/>
            <BlockSubheaderText text={subheader} />
            <div className="social-network-profile">
            <img src={fbLogo} alt="facebook"/>
            <img src={instagramLogo} alt="instagram"/>
            <img src={twitterLogo} alt="twitter"/>
            </div>
            </section>
        </>
    );
  }
  
  export default FooterContainer;
  