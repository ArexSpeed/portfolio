import aleague1 from './images/aleague1.png'
import aleague2 from './images/aleague2.png'
import aleague3 from './images/aleague3.png'
import aleague4 from './images/aleague4.png'
import aleague5 from './images/aleague5.png'
import aleague6 from './images/aleague6.png'
import aleaguel from './images/aleaguel.png'
import cake1 from './images/cake1.png'
import cake2 from './images/cake2.png'
import cake3 from './images/cake3.png'
import cake4 from './images/cake4.png'
import cake5 from './images/cake5.png'
import cake6 from './images/cake6.png'
import kim1 from './images/kim1.png'
import kim2 from './images/kim2.png'
import kim3 from './images/kim3.png'
import kim4 from './images/kim4.png'
import kim5 from './images/kim5.png'
import kim6 from './images/kim6.png'
import axo1 from './images/axo1.png'
import axo2 from './images/axo2.png'
import axo3 from './images/axo3.png'
import axo4 from './images/axo4.png'
import axo5 from './images/axo5.png'
import axo6 from './images/axo6.png'
import axol from './images/axol.png'
import clock1 from './images/clock1.png'
import clock2 from './images/clock2.png'
import clock3 from './images/clock3.png'
import clock4 from './images/clock4.png'
import clock5 from './images/clock5.png'
import clock6 from './images/clock6.png'
import clockl from './images/clockl.png'
import cs1 from './images/cs1.png'
import cs2 from './images/cs2.png'
import cs3 from './images/cs3.png'
import cs4 from './images/cs4.png'
import cs5 from './images/cs5.png'
import cs6 from './images/cs6.png'
import csl from './images/csl.png'
import gc1 from './images/gc1.png'
import gc2 from './images/gc2.png'
import gc3 from './images/gc3.png'
import gc4 from './images/gc4.png'
import gc5 from './images/gc5.png'
import gc6 from './images/gc6.png'
import gcl from './images/gcl.png'
import mw1 from './images/mw1.png'
import mw2 from './images/mw2.png'
import mw3 from './images/mw3.png'
import mw4 from './images/mw4.png'
import mw5 from './images/mw5.png'
import mw6 from './images/mw6.png'
import mwl from './images/mwl.png'
import neograd1 from './images/neograd1.png'
import neograd2 from './images/neograd2.png'
import neograd3 from './images/neograd3.png'
import neograd4 from './images/neograd4.png'
import neograd5 from './images/neograd5.png'
import neograd6 from './images/neograd6.png'
import neogradl from './images/neogradl.png'
import rounder1 from './images/rounder1.png'
import rounder2 from './images/rounder2.png'
import rounder3 from './images/rounder3.png'
import rounder4 from './images/rounder4.png'
import rounder5 from './images/rounder5.png'
import rounder6 from './images/rounder6.png'
import rounderl from './images/rounderl.png'
import sps1 from './images/sps1.png'
import sps2 from './images/sps2.png'
import sps3 from './images/sps3.png'
import sps4 from './images/sps4.jpg'
import sps5 from './images/sps5.jpg'
import sps6 from './images/sps6.png'
import spsl from './images/spsl.png'
import port1 from './images/port1.png'
import port2 from './images/port2.png'
import port3 from './images/port3.png'
import port4 from './images/port4.png'
import port5 from './images/port5.png'
import port6 from './images/port6.png'
import portl from './images/herologo.png'


export const projects = [
  {
    id: 0,
    title: 'My Portfolio',
    class: 'portfolio',
    shortDesc: 'Portfolio site',
    desc: 'Portfolio site made in React with all projects I made. I made here some cool style effect like animate text on Hero Section made with keyframes and svg letters, double scrolling effect in About section and cool projects navigation. There is also nice animation effect with navigation on the left which you can check and skills wheel that is changed depends on what my skill you want to checks.',
    images: [port1, port2, port3],
    imagesMobile: [port5, port6, port4],
    logo: portl,
    stacks: ['React', 'Sass', 'Firebase'],
    website: 'https://arekcichocki.dev/',
    github: 'https://github.com/ArexSpeed/portfolio'
  },
  {
    id: 1,
    title: 'AXOffice',
    class: 'axoffice',
    shortDesc: 'Managment App',
    desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where you can save your tasks and lists e.g shopping lists, projects to keep your private or teams projects, folders designed to save your favourite websites or bookmarks which will be available in all devices and budgets to simply manage your finances. To all projects in every app you can add your friends and share your files together.',
    images: [axo1, axo2, axo3 ],
    imagesMobile: [axo4,axo5, axo6],
    logo: axol,
    stacks: ['React', 'Sass', 'Firebase'],
    website: 'https://ax-office.web.app/',
    github: 'https://github.com/ArexSpeed/axoffice/tree/main/client'
  },
  {
    id: 2,
    title: 'CakeMe',
    class: 'cakeme',
    shortDesc: 'Ecommerce products',
    desc: 'CakeMe is an example of e-commerce app where you can create your own bakery and sell or buy products. This app is made with NextJs, Stripe, Sass and Airtable for keeping the data. It is a full project both backend and frontend includes payments and authentication',
    images: [cake1, cake2, cake3],
    imagesMobile: [cake4,cake5, cake6],
    logo: neogradl,
    stacks: ['React', 'Next', 'Sass', 'Stripe'],
    website: 'https://cakeme.vercel.app/',
    github: 'https://github.com/ArexSpeed/cakeme'
  },
  {
    id: 3,
    title: 'ALeague',
    class: 'aleague',
    shortDesc: 'Sport league website',
    desc: 'Website for league competition with separate subpages for each team with its details, statistics. In the history section you can also check the tables from all seasons and check all H2H between two teams. There is also a voting system after which the results are shown with an interesting effect. This website is created mainly for learning how to create own API and manage and operate it.',
    images: [aleague1, aleague2, aleague3],
    imagesMobile: [aleague4,aleague5, aleague6],
    logo: aleaguel,
    stacks: ['React', 'Sass','Node', 'Mongo', 'Firebase', 'Heroku'],
    website: 'https://alleague.web.app/',
    github: 'https://github.com/ArexSpeed/aleague'
  },
  {
    id: 4,
    title: 'MultiWords',
    class: 'multiwords',
    shortDesc: 'Language learning app',
    desc: 'Application written in TypeScript and Next, using localStorage and redux toolkit for saving your settings. App to learn several languages simultaneously. You can learn words by category, repeat by writing words and reveal hidden words. When you want to check your knowledge then just add points if you know words. You can play by learing in memo when one words will be for example in English and second word in German. Memo is available even for 10 players with you can play. You can also make and save your own words and categories.',
    images: [mw1, mw2, mw3],
    imagesMobile: [mw4, mw5, mw6],
    logo: mwl,
    stacks: ['React', 'Next', 'Tailwind', 'TypeScript'],
    website: 'https://multiwords.vercel.app/',
    github: 'https://github.com/ArexSpeed/multiwords'
  },
  {
    id: 5,
    title: 'Kim Jestem',
    class: 'kim',
    shortDesc: 'Game app',
    desc: 'Application written in TypeScript, Next and MongoDB which is used for database. Kim jestem (Who I Am) is an app game for meeting with friends, where you can find out who you are from a word which has been drawn for you based on the category you choose. This app is mainly for smartphones because when you choose your word you have to turn the phone and don’t look for a screen, then ask your friends but only questions that can be answered yes or no. After answering you can always click on the screen when your word will be hidden and save your question. (Actually this app is only in Polish).',
    images: [kim1, kim2, kim3],
    imagesMobile: [kim4, kim5, kim6],
    logo: mwl,
    stacks: ['React', 'Next', 'Tailwind', 'TypeScript', 'Mongo'],
    website: 'https://kimjestem.vercel.app/',
    github: 'https://github.com/ArexSpeed/whoiam'
  },
  {
    id: 6,
    title: 'Rounder',
    class: 'rounder',
    shortDesc: 'Competition generator',
    desc: 'It is a generator to create your own calendar of sports events, it allows you to create a calendar for league or group games, and also you can make a group draw using the application, after typing the teams the application itself generates a calendar of games and the division of groups.',
    images: [rounder1, rounder2, rounder3],
    imagesMobile: [rounder4, rounder5, rounder6],
    logo: rounderl,
    stacks: ['React', 'CSS', 'Firebase'],
    website: 'https://sportrounder.web.app/',
    github: 'https://github.com/ArexSpeed/clickscores/tree/main/rounder'
  },
  {
    id: 7,
    title: 'ClickScore',
    class: 'clickscore',
    shortDesc: 'Sports score simulator',
    desc: 'Clickscore is a sport competition simulator for different types of disciplines such as football, basketball, handball, volleyball, speedway and formula 1. You can select existing teams or create your own. To play you can select various type of tournaments either league and groups and in speedway individual competition are also available. Every team has a 3 skills which you can change and according to these skills the program calculates results and generate scoreboard.',
    images: [cs1, cs2, cs3],
    imagesMobile: [cs6, cs4, cs5],
    logo: csl,
    stacks: ['HTML', 'CSS', 'JavaScript'],
    website: 'http://click.sportstory.eu/',
    github: 'https://github.com/ArexSpeed/clickscores/tree/main/clickscore'
  },
  {
    id: 8,
    title: 'Neograd',
    class: 'neograd',
    shortDesc: 'CSS Generator',
    desc: 'NeoGrad is a SCSS library and CSS code generator to creating buttons and divs with effects for your website. You can start using NeoGrad by downloading the code from github and add it to your project or you can use our Builder. You can choose your effect by clicking on the following steps and copy code and add to your css file without downloading anything. On the website are also sample docs and a few sample sites showing how we can use NeoGrad.',
    images: [neograd1, neograd2, neograd3],
    imagesMobile: [neograd4,neograd5, neograd6],
    logo: neogradl,
    stacks: ['React', 'Sass'],
    website: 'https://neogradcss.web.app/',
    github: 'https://github.com/ArexSpeed/neogradsite'
  },
  {
    id: 9,
    title: 'Sport Story',
    class: 'sportstory',
    shortDesc: 'Sport statistics',
    desc: 'Interesting facts and sport stats that are regularly added on Instagram and previously also on blog where tables from sports games are also available. SportStory is also on Youtube with a few short videos. In the future I want to add more interesting tables and stats and create quiz app for sport.',
    images: [sps1, sps2, sps3],
    imagesMobile: [sps4, sps5, sps6],
    logo: spsl,
    stacks: ['Wordpress', 'YouTube', 'Instagram'],
    website: 'http://sportstory.eu/',
    github: ''
  },
  {
    id: 10,
    title: 'Galaxy Chat',
    class: 'galaxychat',
    shortDesc: 'Chat application',
    desc: 'Online chat where you can create your own rooms and invite other users to conversation or you can also create an open room available to all users. You can also easily edit and customize your rooms. Chat is written with cloud backend on Firebase.',
    images: [gc1, gc2, gc3],
    imagesMobile: [gc4, gc5, gc6],
    logo: gcl,
    stacks: ['React', 'CSS', 'Firebase'],
    website: 'https://galaxychats.web.app/',
    github: 'https://github.com/ArexSpeed/galaxychat'
  },
  {
    id: 11,
    title: 'Clocks',
    class: 'clocks',
    shortDesc: 'Clock application',
    desc: 'Clock, stopwatch, timer and calendar online. Interesting features include time checking in different times zone in 3 types of clock, digital, analog and binary. App includes timer for workout where you can set how many sets, workouts and time for workout you do and the stopwatch will measure the appropriate amount of time on its own.',
    images: [clock1, clock2, clock3],
    imagesMobile: [clock4, clock5, clock6],
    logo: clockl,
    stacks: ['HTML', 'CSS', 'JavaScript'],
    website: 'https://arexspeed.github.io/timer/',
    github: 'https://github.com/ArexSpeed/timer'
  },
  
]