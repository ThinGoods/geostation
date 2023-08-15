import { PicturesTable } from './components/pictureTable/pictureTable'
import { sourceImg } from './importsOfPictures';
import './App.css';
import {Review} from './components/review/review'



function App() {
  return (
    <div>
      <Review />
      <PicturesTable pictureArray={sourceImg}/>
    </div>
  );
}
export default App;