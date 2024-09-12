import reactImg from "../assets/investment-calculator-logo.png"

function Header() {
  return (
    <header id="header">
      <img
        src={reactImg}
        alt="Calc Logo"
      />
      <h1>Investment Calculator</h1>
    </header>
  )
}

export default Header
