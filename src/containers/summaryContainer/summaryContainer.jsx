import "./summaryContainer.css"
import BlockHeaderText from "../../components/pageTitle/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageTitle/subheader/blockSubheaderText.jsx"

const SummaryContainer = () => {
    const header = 'Summary is the new black'
    const subheader = 'Use summaries: comprehensive 15-min abstracts from nonfiction books with the main concepts and recommendations.'

    return (
        <>
            <section className="wrapper page-3">
            <BlockHeaderText text={header}/>
            <BlockSubheaderText text={subheader} />
            </section>
        </>
    );
  }
  
  export default SummaryContainer;
  