import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import NotFound from './NotFound';
import Contact from './Contact';
import Bookmark from './Bookmark';
import Accounts from './Accounts';
import Main from './Main';


function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />}>
                    <Route index element={<MainPage />} />
                    <Route path="/account" element={<Accounts />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/bookmarks" element={<Bookmark />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Index;