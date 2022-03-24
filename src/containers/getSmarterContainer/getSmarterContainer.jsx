import "./getSmarterContainer.css"
import BlockHeaderText from "../../components/pageTitle/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageTitle/subheader/blockSubheaderText.jsx"

const GetSmarterContainer = () => {
    const header = 'Get smarter with the least effort'
    const subheader = ''

    return (
        <>
            <section className="wrapper page-2">
            <BlockHeaderText text={header}/>
            </section>
        </>
    );
  }
  
  export default GetSmarterContainer;
  