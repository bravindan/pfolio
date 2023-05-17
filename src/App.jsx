
import './App.css'

function App() {
  return(
<div>
  {/* header section */}
  <header className='header'>
    <a href="" className='logo'>Bravin.</a>
    <nav className='navbar'>
      <a href="" className='active'>Home</a>
      <a href="">About</a>
      <a href="">Services</a>
      <a href="">Portfolio</a>
      <a href="">Contact</a>
    </nav>
  </header>

  {/* home section */}
  <section className='home'>
    <div className='home-content'>
      <h1>Hello, I&apos;m Bravin Daniel</h1>
      <h3>Web Developer</h3>
      <p>
      A skilled web developer with experience in creating high-quality websites and web applications. I am knowledgeable in various programming languages and web development frameworks. I am passionate about creating websites that are both visually appealing and functional, with a focus on providing an excellent user experience. If you&apos;re looking for a reliable web developer to help you bring your project to life,
        </p>
        <div className="btn-box">
          <a href="">Hire Me</a>
          <a href="">Let&apos;s Talk</a>
        </div>
    </div>
    <div className="home-social-icons">
      <a href=""><i className='bx bxl-twitter'></i></a>
      <a href=""><i className='bx bxl-linkedin'></i></a>
      <a href=""><i className='bx bxl-github'></i></a>
    </div>
    <span className='home-img'>
      
    </span>
  </section>
</div>
  )
}

export default App
