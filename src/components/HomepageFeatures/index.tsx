import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Everything you need',
    Svg: require('@site/static/img/everything.svg').default,
    description: (
      <>
          Up toolkit provides everything you need to bootstrap your project. And oh yeah, it's up to date !
      </>
    ),
  },
  {
    title: 'UPinionated by design,\n' +
        'S.O.L.I.D as its core',
    Svg: require('@site/static/img/solid_design.svg').default,
    description: (
      <>
          Feeling puzzled on which web tools to use and how to set that up ? Get an opinionated boilerplate and start with it. When you will be more comfortable, just improve it.
      </>
    ),
  },
  {
    title: 'Powered by ImPulp',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          Impulp is a startup studio based in Brussels. We offer consultancy and technical skills to any kind of projects
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
