import "./readListenContainer.css"
import BlockHeaderText from "../../components/pageTitle/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageTitle/subheader/blockSubheaderText.jsx"

const ReadListenContainer = () => {
    const header = 'Read or Listen'
    const subheader = 'Commuting, jogging, or stuck in line? Enjoy the best books in a condensed format. Summaries have an audio version, narrated by professional voice actors.'

    return (
        <>
            <section className="wrapper page-5">
            <BlockHeaderText text={header}/>
            <BlockSubheaderText text={subheader} />
            </section>
        </>
    );
  }
  
  export default ReadListenContainer;
  