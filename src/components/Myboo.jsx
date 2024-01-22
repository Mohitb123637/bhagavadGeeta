import React from 'react';
import HTMLFlipBook from "react-pageflip-agile";
import Page from './pages/Page';
import Cover from './Cover';
import coverImg from "../assets/front.jpg";
import LastPage from './pages/LastPage';
import LastImg from "../assets/last.jpg"
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import Five from './pages/Five';
import Six from './pages/Six';
import Seven from './pages/Seven';
import Eight from './pages/Eight';
import Nine from './pages/Nine';
import TenP from './pages/TenP';
function Myboo(props) {
    return (
        <HTMLFlipBook width={500} height={650} showCover = "true">
            <Page number={1}>
               <Cover coverImg= {coverImg}/>
            </Page>
            <Page number={"अध्याय 1"}>
                <FirstPage />
            </Page>
            <Page number={3}>
                <SecondPage/>
            </Page>
            <Page number={4}>
               <ThirdPage/>
            </Page>
            <Page number={5}>
               <FourthPage/>
            </Page>
            <Page number={6}>
               <Five/>
            </Page>
            <Page number={7}>
               <Six/>
            </Page>
            <Page number={8}>
               <Seven/>
            </Page>
            <Page number={9}>
               <Eight/>
            </Page>
            <Page number={10}>
            <Nine/>
            </Page>
            <Page number={11}>
               <TenP/>
            </Page>
            <Page>
                <LastPage coverImg = {LastImg}/>
            </Page>
        </HTMLFlipBook>
    );
}

export default Myboo;
