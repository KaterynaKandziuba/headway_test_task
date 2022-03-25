import "./summaryContainer.css"
import BlockHeaderText from "../../components/pageTitle/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageTitle/subheader/blockSubheaderText.jsx"
import bookPic from "../../assets/img/book.svg"
import phonePic from "../../assets/img/phone.svg"
import arrow1 from "../../assets/img/arrow1.png"
import arrow2 from "../../assets/img/arrow2.png"
import AdditionalText from "../../components/pageTitle/additionalText/additionalText.jsx"

const SummaryContainer = () => {
    const header = 'Summary is the new black'
    const subheader = 'Use summaries: comprehensive 15-min abstracts from nonfiction books with the main concepts and recommendations.'

    return (
        <>
            <section className="wrapper page-3">
            <BlockHeaderText text={header}/>
            <BlockSubheaderText text={subheader} />
            <img src={bookPic} className="summary-pic" alt="book-pic"/>
            <BlockSubheaderText text={
                "Typical book"
            } />
            <AdditionalText text={
                "320 pages ~ 20 hours"
            }/>
            <img src={arrow2} alt="arrow"/>
            <BlockSubheaderText text={
                "Key ideas & insights"
            } />
            <img src={arrow1} alt="arrow"/>
            <img src={phonePic} className="summary-pic" alt="phone-pic"/>
            <BlockSubheaderText text={
                "Summary"
            } />
            <AdditionalText text={
                "~ 15 minutes"
            }/>
            </section>
        </>
    );
  }
  
  export default SummaryContainer;
  