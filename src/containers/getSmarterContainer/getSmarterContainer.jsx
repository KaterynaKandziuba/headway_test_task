import "./getSmarterContainer.css"
import BlockHeaderText from "../../components/pageTitle/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageTitle/subheader/blockSubheaderText.jsx"
import logoNewspapers from "../../assets/img/logo-newspapers.svg"
import insightsPic from "../../assets/img/insights.svg"
import weekdaysPic from "../../assets/img/weekdays.svg"
import BoldSubheaderText from "../../components/pageTitle/boldSubheader/boldSubheader"

const GetSmarterContainer = () => {
    const header = 'Get smarter with the least effort'

    // add map
    return (
        <>
            <section className="wrapper page-2">
            <BlockHeaderText text={header}/>
            <img src={logoNewspapers} alt="newspapers-logo"/>
            <BoldSubheaderText
            text={"Learn from the best"}
             />
             <BlockSubheaderText 
             text={"Highlighted by top reviewers, we picked only the most outstanding bestsellers for you."}
             />

            <img src={insightsPic} alt="nsights-pic"/>
            <BoldSubheaderText
            text={"Get key insights"}
             />
             <BlockSubheaderText 
             text={"Major ideas in a bite-sized form. Long reads no more!"}
             />

            <img src={weekdaysPic} alt="weekdays-pic"/>
            <BoldSubheaderText
            text={"Build a reading habit"}
             />
             <BlockSubheaderText 
             text={"Consistency is the key to top performance. Only 15 minutes per day to make reading your brand new habit!"}
             />
            </section>
        </>
    );
  }
  
  export default GetSmarterContainer;
  