import "./determineGoalContainer.css"
import BlockHeaderText from "../../components/pageText/blockHeader/blockHeaderText.jsx"
import BlockSubheaderText from "../../components/pageText/subheader/blockSubheaderText.jsx"

const DetermineGoalContainer = () => {
    const header = 'Determine your goal and go ahead!'
    const subheader = 'Learn something new every day from Self-Growth, Happiness, Money, Health, and many other categories. Benefit from unlimited access to world best thoughts.'

    return (
        <>
            <section className="wrapper page-4">
            <BlockHeaderText text={header}/>
            <BlockSubheaderText text={subheader} />
            </section>
        </>
    );
  }
  
  export default DetermineGoalContainer;
  