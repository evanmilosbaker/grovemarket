import { getContent } from '../lib/api.js';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Index = ({ title, description, coverPhoto, about, menu }) => {
  return (
    <main>
      <Header coverPhoto={coverPhoto} about={about} />
      <Menu menu={menu} />
      <a href="tel:+14103525055"></a>
      <Footer />
    </main>
  );
};

export default Index;

export async function getStaticProps() {
  const props = await getContent();
  return { props };
}
