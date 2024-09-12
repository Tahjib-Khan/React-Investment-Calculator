export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = []
  let investmentValue = initialInvestment

  for (let i = 0; i < duration; i++) {
    const returnEarnedInYear = investmentValue * (expectedReturn / 100)
    investmentValue += returnEarnedInYear + annualInvestment
    annualData.push({
      year: i + 1, // year identifier
      return: returnEarnedInYear, // the amount of annual return earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    })
  }

  return annualData
}

// Example Usage: formatter.format(1000) => gives "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
})
