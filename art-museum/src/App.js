import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import { Route} from "react-router-dom";




function App() {

 
  return (
    <div className="page-wrapper">
    <Route path = "/"> 
    <GalleryNavigation galleries={harvardArt.records}/>
    </Route>
    <Route path = "/galleries/:galleryId"> 
    <GalleryView galleries={harvardArt.records}/>
    </Route>
    </div>
  );

}

export default App;
