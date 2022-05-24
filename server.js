import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4433;

app.get('/', (req, res) => {
    return res.json(getBooks());
});
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});

function getBooks() {
    return [
        {
            id: 1,
            idCode: 'buildingMicroservices',
            title: 'Building Microservices',
            description:
                'Seems to be a high-level abstract book how to not only implement microservices but how to get your head around the paradigm shifts involved, e.g. from request-response to event-driven patterns.',
            yearMonth: '2021-09',
            rank: '4.1',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 2,
            idCode: 'gatsbyEcommerce',
            title: 'Gatsby E-Commerce',
            description:
                'An interesting aspect of Gatsby: using it for e-commerce site which focuses on practical tips around this focus.',
            yearMonth: '2021-03',
            rank: '4.3',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 3,
            idCode: 'rustWeb',
            title: 'Rust Web Programming',
            description:
                'Looking forward to creating sites in Rust on my Debian box at Hetzner. This looks like a practical way to learn Rust in order to actually build something useful.',
            yearMonth: '2021-02',
            rank: '4.8',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 4,
            idCode: 'bashCookbook',
            title: 'bash Cookbook',
            description:
                'This is going to be one of my favorite books as an entry into Linux administration of my Hetzner and Digital Ocean Debian/Ubuntu cloud machines. The cookbook format is extremely practical, looking forward to it.',
            yearMonth: '2017-11',
            rank: '4.9',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 5,
            idCode: 'linuxCommandLine',
            title: 'The Linux Command Line',
            description:
                'This is going to be another of my entry points into Linux administration of my Hetzner and Digital Ocean Debian/Ubuntu cloud machines. This book has good reviews as the best introduction to Linux commands, very basic and structured.',
            yearMonth: '2019-03',
            rank: '4.8',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 6,
            idCode: 'programmationShellSousLinux',
            title: 'Programmation shell sous Unix/Linux',
            description:
                'I got this book mainly because it was in French, it looks quite standard but good to skim/scan through en français and see the topics it covers.',
            yearMonth: '2019-07',
            rank: '4.1',
            language: 'french',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 7,
            idCode: 'debianGnuLinux',
            title: 'Debian GNU/Linux Administration du système',
            description:
                'This is another book that I got mainly because it was in French, it looks quite standard but good to skim/scan through en français and see the topics it covers for Linux administration of a Debian machine.',
            yearMonth: '2017-07',
            rank: '4.0',
            language: 'french',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 8,
            idCode: 'practicalEnterpriseReact',
            title: 'Practical Enterprise React',
            description:
                'A general book on React, more practical than theoritical, learn about libraries like Apex Charts and generally what on should know as a React developer, good book to skim and scan.',
            yearMonth: '2021-08',
            rank: '3.6',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 9,
            idCode: 'javaScriptFunctional',
            title: 'Mastering JavaScript Functional Programming',
            description:
                "As a multi-decade PHP/C# OOP programmer, the functional paradigm is new and strange to me, but fascinating at the same time. This book goes on deep dives trying to explain concepts like currying, pipelining, chaining, reducing, etc. It's a book to read again and again to let it soak in between bouts of programming experience.",
            yearMonth: '2020-01',
            rank: '4.5',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 10,
            idCode: 'jumpstartJamstack',
            title: 'Jumpstart Jamstack Development',
            description:
                'Another Jamstack book but focusing particularly on Gatsby, Netlify and something called Sanity, apparently a headless CMS. Looking through the book, seeing lots of new terms, e.g. GROQ, apparently the query language for Sanity.',
            yearMonth: '2021-05',
            rank: '4.8',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 11,
            idCode: 'vuejs3Cookbook',
            title: 'Vue.js 3 Cookbook',
            description:
                'My introduction into JavaScript frameworks was with Vue.js but I only used it on the surface to implement interactivity on a PHP website frontend. I understane v3 has quite a bit of changes and would like to get into large Vue.js 3 applications with components, etc. as in React and learn about the larget ecosystem. Cookbooks are a favorite format of mine, very practical.',
            yearMonth: '2020-09',
            rank: '4.9',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 12,
            idCode: 'effectiveTypeScript',
            title: 'Effective TypeScript',
            description:
                "Has 62 ways to improve your TypeScript. These Effective series books from O'Reilly are quite advanced and so am looking forward to discovering patterns to understand TypeScript from a higher level.",
            yearMonth: '2019-11',
            rank: '4.6',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 13,
            idCode: 'viAndVim',
            title: 'Learning the vi and Vim Editors',
            description:
                'One goal I have is to do software development on Linux in Vim, and this book takes you on a deep dive of all the commands plus the ecosystems these tools exist in to take full advantage of them as developing environments.',
            yearMonth: '2008-07',
            rank: '4.9',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 14,
            idCode: 'restApiNodejs',
            title: 'REST API Development with Node.js',
            description:
                'A basic book to skim/scan through and get basic concepts for Node.js/API development, not a lot of theory.',
            yearMonth: '2018-07',
            rank: '3.5',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        },
        {
            id: 15,
            idCode: 'react17DesignPatterns',
            title: 'React 17 Design Patterns and Best Practices',
            description:
                "I've scanned through this book so far finding quite a number of good tips in the form of libraries etc. It has lots of code so interesting to read without being at a computer. Interesting to see how they put together larger applications.",
            yearMonth: '2021-05',
            rank: '4.4',
            language: '',
            extras: '',
            systemWhenCreated: '2022-05-17 00:54:35',
            systemWhoCreated: 'systemUnknown'
        }
    ];
}
