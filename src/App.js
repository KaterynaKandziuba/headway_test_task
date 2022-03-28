import './App.css';
import StartContainer from './containers/startContainer/startContainer';
import Header from './components/header/header'
import GetSmarterContainer from './containers/getSmarterContainer/getSmarterContainer';
import SummaryContainer from './containers/summaryContainer/summaryContainer';
import DetermineGoalContainer from './containers/determineGoalContainer/determineGoalContainer';
import ReadListenContainer from './containers/readListenContainer/readListenContainer';
import PeopleLoveHeadwayContainer from './containers/peopleLoveHeadwayContainer/peopleLoveHeadwayContainer';
import FooterContainer from './containers/footerContainer/footerContainer';
import GetStartedButton from './components/getStartedButton/getStartedButton'

function App() {
  return (
    <>
    <Header />
    <StartContainer />
    <GetSmarterContainer/>
    <SummaryContainer />
    {/* <DetermineGoalContainer /> */}
    <ReadListenContainer />
    {/* <PeopleLoveHeadwayContainer /> */}
    <FooterContainer />
    <GetStartedButton />
    </>
  );
}

export default App;
