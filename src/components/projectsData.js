import aleague1 from '../images/aleague1.png'
import aleague2 from '../images/aleague2.png'
import aleague3 from '../images/aleague3.png'
import aleague4 from '../images/aleague4.png'
import aleague5 from '../images/aleague5.png'
import aleaguel from '../images/aleaguel.png'
import xtech1 from '../images/xtech1.png'
import xtech2 from '../images/xtech2.png'
import xtech3 from '../images/xtech3.png'
import xtech4 from '../images/xtech4.png'
import xtech5 from '../images/xtech5.png'
import xtechl from '../images/xtechl.png'
import axo1 from '../images/axo1.png'
import axo2 from '../images/axo2.png'
import axo3 from '../images/axo3.png'
import axo4 from '../images/axo4.png'
import axo5 from '../images/axo5.png'
import axol from '../images/axol.png'
import clock1 from '../images/clock1.png'
import clock2 from '../images/clock2.png'
import clock3 from '../images/clock3.png'
import clock4 from '../images/clock4.png'
import clock5 from '../images/clock5.png'
import clockl from '../images/clockl.png'
import cs1 from '../images/cs1.png'
import cs2 from '../images/cs2.png'
import cs3 from '../images/cs3.png'
import cs4 from '../images/cs4.png'
import cs5 from '../images/cs5.png'
import csl from '../images/csl.png'
import gc1 from '../images/gc1.png'
import gc2 from '../images/gc2.png'
import gc3 from '../images/gc3.png'
import gc4 from '../images/gc4.png'
import gc5 from '../images/gc5.png'
import gcl from '../images/gcl.png'
import mw1 from '../images/mw1.png'
import mw2 from '../images/mw2.png'
import mw3 from '../images/mw3.png'
import mw4 from '../images/mw4.png'
import mw5 from '../images/mw5.png'
import mwl from '../images/mwl.png'
import neograd1 from '../images/neograd1.png'
import neograd2 from '../images/neograd2.png'
import neograd3 from '../images/neograd3.png'
import neograd4 from '../images/neograd4.png'
import neograd5 from '../images/neograd5.png'
import neogradl from '../images/neogradl.png'
import rounder1 from '../images/rounder1.png'
import rounder2 from '../images/rounder2.png'
import rounder3 from '../images/rounder3.png'
import rounder4 from '../images/rounder4.png'
import rounder5 from '../images/rounder5.png'
import rounderl from '../images/rounderl.png'
import sps1 from '../images/sps1.png'
import sps2 from '../images/sps2.png'
import sps3 from '../images/sps3.png'
import sps4 from '../images/sps4.jpg'
import sps5 from '../images/sps5.jpg'
import spsl from '../images/spsl.png'




export const projects = [
  {
    title: 'AXOffice',
    desc: 'Application contains several tools to make daily work and project management easier. Currently in Office available are lists where we can save our tasks and lists e.g shopping lists, projects to keep our private or teams projects, folders designed to save our favourite websites or bookmarks which will be available in all devices and budgets to simply manage our finances. To all projects in every app we can add our friends and share our files together.',
    images: [axo1, axo2, axo3, axo4,axo5],
    logo: axol,
    stacks: ['React', 'Sass', 'Firebase'],
    website: '',
    github: ''
  },
  {
    title: 'Neograd',
    desc: 'NeoGrad is a SCSS library and CSS code generator for creating buttons and divs with effects on your website. You can start using NeoGrad by downloading the code from github and add this to your projects or you can use our Builder You can choose your effect by clicking on the following steps and copy code and add to your css file without downloading anything. On the website are also sample docs and a few sample sites showing how we can use NeoGrad.',
    images: [neograd1, neograd2, neograd3, neograd4,neograd5],
    logo: neogradl,
    stacks: ['React', 'Sass'],
    website: '',
    github: ''
  },
  {
    title: 'ALeague',
    desc: 'Website for league competition with separate subpages for each team with its details, statistics. In the history section we can also check the tables from all seasons and check all H2H between two teams. There is also a voting system after which the results are shown with an interesting effect. This website is created mainly for learning how to create own API and manage and operate it.',
    images: [aleague1, aleague2, aleague3, aleague4,aleague5],
    logo: aleaguel,
    stacks: ['React', 'Sass','Node', 'Mongo', 'Firebase', 'Heroku'],
    website: '',
    github: ''
  },
  {
    title: 'XTech',
    desc: 'Sample tech industry website. It contains data about products, there is shop where we can add products of interest to the basket. The website also has a simple admin panel where we can add new products that are saved to the MongoDB database.',
    images: [xtech1, xtech2, xtech3, xtech4,xtech5],
    logo: xtechl,
    stacks: ['React','StyledComponent' ,'Node', 'Heroku'],
    website: '',
    github: ''
  },
  {
    title: 'Sport Story',
    desc: 'Interesting facts and sport stats that are regularly added on Instagram and previously also on blog where tables from sports games are also available. SportStory is also on Youtube with a few short movies. In the future I want to add more interesting tables and stats and create quiz app for sport.',
    images: [sps1, sps2, sps3, sps4,sps5],
    logo: spsl,
    stacks: ['Wordpress', 'YouTube', 'Instagram'],
    website: '',
    github: ''
  },
  {
    title: 'MultiWords',
    desc: 'App to learn several languages at the simultaneously. We can learn words by select a category a check all words in it or testing what we learn by writing the words or connect. You can also play a memo game where you have to find the same word in 2 languages to match.',
    images: [mw1, mw2, mw3, mw4,mw5],
    logo: mwl,
    stacks: ['React', 'Sass', 'Firebase', 'PHP'],
    website: '',
    github: ''
  },
  {
    title: 'Galaxy Chat',
    desc: 'Online chat where we can create our own rooms and invite other users to conversation or we can also create an open room available to all users. We can also easily edit and customize our rooms. Chat is working thanks to Firebase.',
    images: [gc1, gc2, gc3, gc4,gc5],
    logo: gcl,
    stacks: ['React', 'CSS', 'Firebase'],
    website: '',
    github: ''
  },
  {
    title: 'ClickScore',
    desc: 'Clickscore is a sport competition simulator for different types of disciplines such as football, basketball, handball, volleyball, speedway and formula 1. We can select existing teams or create our own. To play we can select various type of tournaments either league and groups and in speedway individual competition are also available. Every team has a 3 skills which we can change and according to these skills the program calculates results and generate scoreboard.',
    images: [cs1, cs2, cs3, cs4,cs5],
    logo: csl,
    stacks: ['HTML', 'CSS', 'JavaScript'],
    website: '',
    github: ''
  },
  {
    title: 'Clocks',
    desc: 'Clock, stopwatch, timer and calendar online. Interesting features include time checking in different times zone in 3 types of clock, digital, analog and binary. App includes timer for workout where you can set how many sets, workouts and time for workout you do and the stopwatch will measure the appropriate amount of time on its own.',
    images: [clock1, clock2, clock3, clock4,clock5],
    logo: clockl,
    stacks: ['HTML', 'CSS', 'JavaScript'],
    website: '',
    github: ''
  },
  {
    title: 'Rounder',
    desc: 'It is a generator to create your own calendar of sports events, it allows you to create a calendar for league or group games, and also we can make a group draw using the application, after typing the teams the application itself generates a calendar of games and the division of groups.',
    images: [rounder1, rounder2, rounder3, rounder4,rounder5],
    logo: rounderl,
    stacks: ['React', 'CSS', 'Firebase'],
    website: '',
    github: ''
  },
  
]