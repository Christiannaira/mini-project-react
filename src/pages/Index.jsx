import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import NotFound from './NotFound';
import Contact from './Contact';
import Bookmark from './Bookmark';
import Accounts from './Accounts';
import Main from './Main';
import Categories from './Categories';
import Thriller from './Thriller';
import Romance from './Romance';
import Business from './Business';
import Selfhelp from './Selfhelp';
import HealthAndFitness from './HealthAndFitness';
import Mystery from './Mystery';
import Travel from './Travel';
import History from './History';
import FictionAndLiterature from './FictionAndLiterature';
import RealistAndLiterature from './RealistAndLiterature';
import MagicalRealism from './MagicalRealism';
import ComputerAndTechnology from './ComputerAndTechnology';
import SportsAndOutdoors from './SportsAndOutdoors';
import EducationAndTeaching from './EducationAndTeaching';
import Childrensbook from './Childrensbook';
import ReligionAndSpirituality from './ReligionAndSpirituality';
import ScienceFictionAndFantasy from './ScienceFictionAndFantasy';
import ParentingAndRelationships from './ParentingAndRelationships';
import ArtAndPhotography from './ArtAndPhotography';
import Biographies from './Biographies';
import ComicsAndGraphic from './ComicsAndGraphic';
import CraftHobbiesHome from './CraftHobbiesHome';




function Index() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />}>
                        <Route index element={<MainPage />} />
                        <Route path="/account" element={<Accounts />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/bookmarks" element={<Bookmark />} />
                        <Route path="/bookmarks" element={<Bookmark />} />
                        <Route path="/categories" element={<Categories />} />
                    </Route>
                    <Route path='/thriller' element={<Thriller />} />
                    <Route path='/romance' element={<Romance />} />
                    <Route path='/business' element={<Business />} />
                    <Route path='/self help' element={<Selfhelp />} />
                    <Route path='/health & fitness' element={<HealthAndFitness />} />
                    <Route path='/mystery' element={<Mystery />} />
                    <Route path='/travel' element={<Travel />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/fiction & literature' element={<FictionAndLiterature />} />
                    <Route path='/realist & literature' element={<RealistAndLiterature />} />
                    <Route path='/magical realism' element={<MagicalRealism />} />
                    <Route path='/computer & technology' element={<ComputerAndTechnology />} />
                    <Route path='/sports & outdoors' element={<SportsAndOutdoors />} />
                    <Route path='/education & teaching' element={<EducationAndTeaching />} />
                    <Route path='/childrenbook' element={<Childrensbook />} />
                    <Route path='/religion & spirituality' element={<ReligionAndSpirituality />} />
                    <Route path='/sciencefiction & fantasy' element={<ScienceFictionAndFantasy />} />
                    <Route path='/parenting & relationships' element={<ParentingAndRelationships />} />
                    <Route path='/art & photography' element={<ArtAndPhotography />} />
                    <Route path='/biographies & memoirs' element={<Biographies />} />
                    <Route path='/comics & graphicnovels' element={<ComicsAndGraphic />} />
                    <Route path='/crafthobbies & home' element={<CraftHobbiesHome />} />
                    

                </Routes>
            </BrowserRouter>

        </>


    )
}

export default Index;