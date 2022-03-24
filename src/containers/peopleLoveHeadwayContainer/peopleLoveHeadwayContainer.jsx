import "./peopleLoveHeadwayContainer.css"
import BlockHeaderText from "../../components/pageTitle/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageTitle/subheader/blockSubheaderText.jsx"

const PeopleLoveHeadwayContainer = () => {
    const header = 'People love the Headway app'
    const subheader = 'Become a member of our global community of 7 million people'

    return (
        <>
            <section className="wrapper page-6">
            <BlockHeaderText text={header}/>
            <BlockSubheaderText text={subheader} />
            </section>
        </>
    );
  }
  
  export default PeopleLoveHeadwayContainer;
  