import { getContent } from '../lib/api.js';
import Head from 'next/head'
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import styles from './styles.module.css';

const globalStyles = `
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`

const Index = ({ header, subHeader, about, menus, telephoneNumber, coverPhoto}) => {
  return (
    <div>
      <Head>
     <meta name='viewport' content='width=device-width, initial-scale=1' />
     <meta charSet='utf-8' />
     <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />
     </Head>
    <main className={styles.main}>
      <Header about={about} header={header} subHeader={subHeader} coverPhoto={coverPhoto} />
      <Menu menus={menus} />
      <Footer phoneNumber={telephoneNumber} />
    </main>
    </div>
  );
};

export default Index;

export async function getStaticProps() {
  const props = await getContent();
  return { props };
}
