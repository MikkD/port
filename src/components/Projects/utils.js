import uuid from 'react-uuid';

export const projectsData = {
    1: {
        name: 'BONOS',
        description: 'This 9,380-square-foot Water University facility includes operation equipment that clients will use to learn how to minimize water use. It also has spaces to hold seminars',
        achives: ['Implemented various features including, accessibility, carousel, pagination along with auto-save functionality.',
            'Created “Contractor Zone” page to meet clients requirements.',
            'Created “Project Details” form including data-picker.',
            'Implemented auto-complete widget by using Google API Places library.',],
        stack: ['Redux', 'React', 'JS', 'HTML', 'CSS'],
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
        stack: ['Redux', 'React', 'JS', 'HTML', 'CSS'],
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
        stack: ['Redux', 'React', 'JS', 'HTML', 'CSS'],
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
        stack: ['Redux', 'React', 'JS', 'HTML', 'CSS'],
        linkUrl: 'https://gmeadow.com/',
        img: require('../../assets/projects/brandshop.png'),
        isClicked: false,
        id: uuid(),
        number: '4',
        index: '3'
    },
};