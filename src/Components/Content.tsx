import { Card } from './Card';
import { Level } from './Level';
import { SkillList } from './SkillList';

export const Content = () => (
  <div id='content'>
    {intro}
    {aboutMe}
    <Level name='this-website'>
      {thisWebsiteCard} {techImages}
    </Level>
  </div>
);

const thisWebsiteCard = (
  <Card name='text-description'>
    <h3>This Website</h3>
    <p>
      This website is built with React with Typescript and due to the animations
      actually uses quite a few of the "new" Hooks and there are some other
      goodies baked into the site!
    </p>
    <p>
      So for the animation to work, we need to use <code>useState</code> which
      saves a "visible" state, and sets it by using the{' '}
      <a href='https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API'>
        IntersectionObserver API
      </a>
      . More about how that works with React{' '}
      <a href='https://www.selbekk.io/blog/2019/08/how-to-fade-in-content-as-it-scrolls-into-view/'>
        here
      </a>
      . But in short, we also use <code>useEffect</code> which allows us to
      change stuff around after rendering. In addition to that, we need to call{' '}
      <code>useRef</code> to access child nodes.
    </p>
    <p>
      Other fancy stuff: types (check <code>SkillList.tsx</code> for example),
      flex, composition, and props affecting style.
    </p>
  </Card>
);

const techImages = (
  <Card name='tech-images'>
    <h3>Technologies Used</h3>
    <img
      alt='react'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
    />
    <img
      alt='typescript'
      src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
    />
    <br />
    <img
      alt='azure'
      src='https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg'
    />
  </Card>
);

const intro = (
  <section>
    <Card name='intro'>
      <h3>Welcome!</h3>
      <p>My name is Michael. I make serious websites. Like this one.</p>
      <p>
        This small site is meant to show my aptitude with web development. I
        hope you enjoy it.
      </p>
    </Card>
  </section>
);

const bio = (
  <Card name='bio'>
    <h3>About Me</h3>
    <p>
      I enjoy making websites, and decided not to use a component library or CSS
      framework just to test my HTML and CSS skills. I've usually used{' '}
      <a href='https://bulma.io/'>Bulma</a>,{' '}
      <a href='https://material-ui.com/'>Material UI</a>,{' '}
      <a href='https://getbootstrap.com/'>Bootstrap</a>, or{' '}
      <a href='https://get.foundation/'>Foundation</a> to make my sites look
      nice.
    </p>
    <p>
      I've recently graduated from the university of Helsinki; I finally got my
      Bachelor's Degree in Computer Science! During my studies I mainly focused
      on web development and had several classes dealing with group projects.
      Scrum has usually been a part of these projects in order to learn
      development methodologies.
    </p>
    <p>
      I also minored in a combination of Maths and Statistics (menetelmätieteet)
      with a second minor in German. My thesis explored the topic of path
      finding in exceptionally large graphs (think social media and online
      marketplaces).
    </p>
    <p>
      Though I've primarily worked with React, I've also done a fair bit of
      vanillaJS and started exploring Vue. My backends are usually powered by
      Node with Express, but I've built sites with Django and Flask too.
      Databases are usually SQLite for development and PostgreSQL for
      production.
    </p>
    <p>
      React, Node, and SQLite... Name a more common stack for quick prototyping
      &#x1F600;
    </p>
    <p>
      Also I'm looking for a job. Feel free to reach out to me right here&nbsp;
      <a href='https://www.linkedin.com/in/michael-aminoff/'>
        <img
          alt='linkedin'
          src='https://www.svgrepo.com/show/70809/linkedin.svg'
        />
      </a>
    </p>
  </Card>
);

const skillListItems = [
  {
    name: 'TS/JS',
    value: 7,
  },
  {
    name: 'React',
    value: 6,
  },
  {
    name: 'HTML',
    value: 7,
  },
  {
    name: 'CSS',
    value: 18,
  },
  {
    name: 'Python',
    value: 5,
  },
  {
    name: 'Flask',
    value: 5,
  },
  {
    name: 'Django',
    value: 3,
  },
  {
    name: 'Java',
    value: 3,
  },
  {
    name: 'SQL',
    value: 4,
  },
];

const skills = (
  <Card name='skills'>
    <h3>Skills</h3>
    <SkillList skills={skillListItems} />
  </Card>
);

const aboutMe = (
  <Level name='about-me'>
    {bio}
    {skills}
  </Level>
);
