import uuid from 'react-uuid';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCsswizardry } from 'react-icons/si';
import { FaCcStripe } from 'react-icons/fa';
import { SiMaterialUi } from 'react-icons/si';
import { FaBootstrap } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiFramer } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { CgPushRight } from 'react-icons/cg';
import { CgArrowLongRight } from 'react-icons/cg';
import { CgArrowTopRightR } from 'react-icons/cg';

export const projectsData = {
    1: {
        name: 'BONOS',
        description: 'This 9,380-square-foot Water University facility includes operation equipment that clients will use to learn how to minimize water use. It also has spaces to hold seminars',
        achives: ['Implemented various features including, accessibility, carousel, pagination along with auto-save functionality.',
            'Created “Contractor Zone” page to meet clients requirements.',
            'Created “Project Details” form including data-picker.',
            'Implemented auto-complete widget by using Google API Places library.',],
        stack: [{ icon: <FaReact />, color: '#61dafb' }, { icon: <SiRedux />, color: '#764abc' }, { icon: <SiJavascript />, color: '#efd819' }, { icon: <SiHtml5 />, color: "#f16629" }, { icon: <SiCsswizardry />, color: "#254cdd" }, { icon: <FaSass />, color: "#c76493" }, { icon: < SiMaterialUi />, color: "#00b0fe" }],
        linkUrl: 'https://www.kronos.com/',
        img: require('../../assets/projects/kronos.png'),
        isClicked: true,
        id: uuid(),
        number: '1',
        index: '0'
    },
    2: {
        name: 'GAF',
        description: 'Maman Corp completed the consolidation of Schneider Chicagoland offices into one space. This project consisted of a complete gut and renovation of the top two floors',
        achives: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem',],
        stack: [{ icon: <FaReact />, color: '#61dafb' }, { icon: <SiRedux />, color: '#764abc' }, { icon: <SiJavascript />, color: '#efd819' }, { icon: <SiHtml5 />, color: "#f16629" }, { icon: <SiCsswizardry />, color: "#254cdd" }, { icon: <SiFirebase />, color: "##ffcc2e" }, { icon: < FaNode />, color: "##6fbb4f" }],
        linkUrl: 'https://www.gaf.com/',
        img: require('../../assets/projects/gaf.png'),
        isClicked: false,
        id: uuid(),
        number: '2',
        index: '1'
    },
    3: {
        name: 'END CLOTHING',
        description: 'Complete build of administration buildings. The space consisted of meeting spaces, gathering space and much more.',
        achives: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem',],
        stack: [{ icon: <FaReact />, color: '#61dafb' }, { icon: <SiRedux />, color: '#764abc' }, { icon: <SiJavascript />, color: '#efd819' }, { icon: <SiHtml5 />, color: "#f16629" }, { icon: <SiCsswizardry />, color: "#254cdd" }, { icon: <FaBootstrap />, color: "#c76493" }, { icon: < SiMaterialUi />, color: "#00b0fe" }],
        linkUrl: 'https://www.brandshop.com/',
        img: require('../../assets/projects/endclo.png'),
        isClicked: false,
        id: uuid(),
        number: '3',
        index: '2'
    },
    4: {
        name: 'MAMAN',
        description: 'Maman Corp has a strong expertise which allows us to work with all kind of environment structure. We have worked for Ecolab lobby,',
        achives: ['lorem', 'lorem', 'lorem', 'lorem', 'lorem',],
        stack: [{ icon: <FaReact />, color: '#61dafb' }, { icon: <SiRedux />, color: '#764abc' }, { icon: <SiJavascript />, color: '#efd819' }, { icon: <SiHtml5 />, color: "#f16629" }, { icon: <SiCsswizardry />, color: "#254cdd" }, { icon: <SiFramer />, color: "#92e" }, { icon: < SiMaterialUi />, color: "#00b0fe" }],
        linkUrl: 'https://gmeadow.com/',
        img: require('../../assets/projects/brandshop.png'),
        isClicked: false,
        id: uuid(),
        number: '4',
        index: '3'
    },
};