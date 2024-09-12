import Header from "./components/Header"
import InputBoxes from "./components/InputBoxes"
import ResultsTable from "./components/ResultsTable"
import { useState } from "react"

//Constants
const INITIAL_INVESTENT = "Initial Investment"
const ANNUAL_INVESTMENT = "Annual Investment"
const EXCPECTED_RETURN = "Expected Return (%)"
const DURATION = "Duration"

function App() {
  const [initialInvestment, setInitlalInvestment] = useState(null)
  const [annualInvestment, setAnnualInvestment] = useState(null)
  const [expectedReturn, setExpectedReturn] = useState(null)
  const [duration, setDuration] = useState(null)

  function handleInitialInvestment(event) {
    setInitlalInvestment(event.target.value)
    console.log(initialInvestment)
  }
  function handleAnnualInvestment(event) {
    setAnnualInvestment(event.target.value)
    console.log(annualInvestment)
  }
  function handleExpectedReturn(event) {
    setExpectedReturn(event.target.value)
    console.log(expectedReturn)
  }
  function handleDuration(event) {
    setDuration(event.target.value)
    console.log(duration)
  }

  return (
    <>
      <Header />

      <div id="user-input">
        <div className="input-group">
          <InputBoxes
            title={INITIAL_INVESTENT}
            onChange={handleInitialInvestment}
          />
          <InputBoxes
            title={ANNUAL_INVESTMENT}
            onChange={handleAnnualInvestment}
          />
          <InputBoxes
            title={EXCPECTED_RETURN}
            onChange={handleExpectedReturn}
          />
          <InputBoxes
            title={DURATION}
            onChange={handleDuration}
          />
        </div>

        {duration && parseFloat(duration) < 1 && (
          <div
            class="alert"
            role="alert">
            <p class="alert-heading">Warning</p>
            <p>Duration must be at least 1</p>
          </div>
        )}
      </div>

      <ResultsTable
        initialInvestment={parseFloat(initialInvestment)}
        annualInvestment={parseFloat(annualInvestment)}
        expectedReturn={parseFloat(expectedReturn)}
        duration={parseFloat(duration)}
      />
    </>
  )
}

export default App
