// Routes.jsx
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage.jsx';
import Page1 from './Page1.jsx';
import Page2 from './Page2.jsx';
import Page3 from './Page3.jsx';
import Page4 from './Page4.jsx';
import Page5 from './Page5.jsx';
import NotFound from './NotFound.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/categoria1" element={<Page1/>} />
            <Route path="/categoria2" element={<Page2/>}/>
            <Route path="/categoria3" element={<Page3/>} />
            <Route path="/categoria4" element={<Page4/>}/>
            <Route path="/categoria5" element={<Page5/>}/>            
            <Route path="*" element={<NotFound />}/>
        </Routes>
);
}
