// Routes.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import ContentCategory1 from './ContentCategory1.jsx';
import ContentCategory2 from './ContentCategory2.jsx';
import ContentCategory3 from './ContentCategory3.jsx';
import ContentCategory4 from './ContentCategory4.jsx';
import ContentCategory5 from './ContentCategory5.jsx';

import NotFound from './NotFound.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/categoria1" element={<ContentCategory1 />} />
            <Route path="/categoria2" element={<ContentCategory2 />}/>
            <Route path="/categoria3" element={<ContentCategory3 />} />
            <Route path="/categoria4" element={<ContentCategory4 />}/>
            <Route path="/categoria5" element={<ContentCategory5 />}/>
            
            <Route path="*" element={<NotFound />}/>
        </Routes>
);
}
