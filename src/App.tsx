import { PicturesTable } from './components/pictureTable/pictureTable'
import { sourceImg } from './importsOfPictures';
import { Review } from './components/review/review'

const App = () => {
  return (
    <div>
      <Review />
      <PicturesTable pictureArray={sourceImg}/>
    </div>
  );
}


export default App;