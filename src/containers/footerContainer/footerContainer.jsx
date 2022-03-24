import "./footerContainer.css"
import BlockHeaderText from "../../components/pageTitle/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageTitle/subheader/blockSubheaderText.jsx"
import logo from '../../assets/img/logo.png';

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
            </section>
        </>
    );
  }
  
  export default FooterContainer;
  