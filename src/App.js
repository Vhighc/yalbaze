import Nav from './components/nav/navbar'
import Hero from './components/hero/hero'
import Content from './components/content/priority'
import Footer from './components/footer/footer'
// import Modal from './components/modal'

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Content />
      <Footer />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
