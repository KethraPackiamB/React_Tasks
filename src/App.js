import logo from './logo.svg';
import './App.css';
import Form from "./Form";
// import RegistrationForm from "./RegistrationForm";
import Country from "./Components/Country";
import ParentComponent from './Props/ParentComponent';
import Routing from './React-Router/Routing';
import RoutingPage from './ReactRouterDom/RoutingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetails from './UseSearchParams/ProductDetails';
import DisplayProductDetails from './UseSearchParams/DisplayProductDetails';
import ThemeContextExample from './Advanced-Concepts/ThemeContextExample';
import { ThemeProvider } from './Advanced-Concepts/Context-api-state-patterns/ThemeContext';
import CartExample from './Advanced-Concepts/Context-api-state-patterns/CartExample';
import { CartProvider } from './Advanced-Concepts/Context-api-state-patterns/CartContext';
import BasicCounter from './ErrorBoundary/BasicCounter';
import Counter from './ErrorBoundary/Counter';
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallbackComponent from './ErrorBoundary/ErrorFallbackComponent';
import ErrorBoundaryComponent from './ErrorBoundary/StateRecovery/ErrorBoundaryComponent';
// import RegistrationForm from './EventHandleForm/RegistrationForm';
import Routers from './React_Tasks_Practice/Routers';
// import { CartProvider } from './React_Tasks_Practice/CartContext';
import ArrayOps from './ArrayOperations/ArrayOps';

import Navigation from './StudentMarkList/Navigation';
import CountryAndStateSelection from './StateSelectionDropdown/CountryAndStateSelection';
import VariousInputFields from './Form/VariousInputFields';
import RegistrationForm from './Form/RegistrationForm';
import UserDetailsForm from './Form/UserDetailsForm';
import LocationSelector from './CountryStateCitySelection/LocationSelector';
import CountryLocation from './CountryStateCitySelection/CountryLocation';
import { ListCloth } from './ArrayOperations/ListCloth';
import CharacterStatusEffects from './Hooks/CharacterStatusEffects';
import UseState from './Hooks/UseState';
import TreeStages from './Hooks/TreeStages';
import UseEffect from './Hooks/UseEffect';
import { PreferencesProvider } from './Hooks/ContextAPI/PreferencesContext';
import PreferencesPanel from './Hooks/ContextAPI/PreferencesPanel';
import Content from './Hooks/ContextAPI/Content';
import UseRef from './Hooks/UseRef';
import VideoPlayer from './Hooks/VideoPlayer';
import CharacterCounter from './Hooks/CharacterCounter';
import ShoppingCart from './Hooks/ShoppingCart';
import CounterWithRef from './Hooks/CounterWithRef';
import InputFocus from './Hooks/InputFocus';
import PreviousStatebyUseRef from './Hooks/PreviousStatebyUseRef';
import WordsCounter from './Hooks/WordsCounter';
import TraditionalDomAccess from './Hooks/TraditionalDomAccess';
import UseTransitionExample from './Hooks/UseTransitionExample';


function App() {
  return (
    <div>
   

     {/* <BrowserRouter>
     <Routes>
      <Route path="/" element={<ProductDetails/>}></Route>
      <Route path="/display-product-details/:id" element={<DisplayProductDetails/>}></Route>
     </Routes>
     </BrowserRouter> */}


     {/* <ThemeProvider>
      <ThemeContextExample/>
     </ThemeProvider> */}

     {/* <CartProvider>
         <CartExample/>
     </CartProvider> */}



 {/* <ErrorBoundary FallbackComponent={ErrorFallbackComponent} onError={(error,componentStack)=>{
  //library
 }}></ErrorBoundary> */}

    
         {/* <ErrorBoundary fallbackRender={({error, resetErrorBoundary}) => {
           return(
        <div>
            <p>Something went wrong</p>
            <p>{error.message}</p>
            <button onClick={resetErrorBoundary}>Try Again</button>
        </div>
    )
         }}> */}
      {/* <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        <Counter/>
      </ErrorBoundary> */}
    
      {/* <ErrorBoundaryComponent/> */}
    

        {/* <RegistrationForm/> */}


        {/* <Routers/> */}

        {/* <ArrayOps/> */}

        {/* <RegistrationForm/> */}

        {/* <StudentData/> */}

       
        {/* <Navigation/> */}

        {/* <CountryAndStateSelection/> */}

        
      {/* <VariousInputFields/> */}

      {/* <RegistrationForm/> */}

      {/* <UserDetailsForm/> */}

      {/* <LocationSelector/> */}

      {/* <CountryLocation/> */}

      {/* <ListCloth/> */}

      {/* <CharacterStatusEffects/> */}
      {/* <UseState/> */}
      {/* <TreeStages/> */}
    
     {/* <UseEffect/> */}

     {/* <PreferencesProvider>
      <div style={{ width: "400px", margin: "40px auto" }}>
        <PreferencesPanel />
        <Content />
      </div>
    </PreferencesProvider> */}

    {/* <UseRef/> */}

    {/* <VideoPlayer/> */}

    {/* <CharacterCounter/> */}
    {/* <ShoppingCart/> */}
    {/* <CounterWithRef/> */}
    {/* <InputFocus/> */}
    {/* <PreviousStatebyUseRef/> */}
    {/* <WordsCounter/> */}
    {/* <TraditionalDomAccess/> */}
    <UseTransitionExample/>
    </div>
  );
}

export default App;
