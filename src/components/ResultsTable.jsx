import { formatter } from "../util/investment"
import { calculateInvestmentResults } from "../util/investment"

function ResultsTable({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const tableData = calculateInvestmentResults({
    initialInvestment: parseFloat(initialInvestment),
    annualInvestment: parseFloat(annualInvestment),
    expectedReturn: parseFloat(expectedReturn),
    duration: parseFloat(duration),
  })
  console.log(tableData)

  let runningTotalReturn = 0
  let runningTotalInvestedCapital = initialInvestment
  return (
    <div>
      {tableData.length > 0 && (
        <table id="result">
          <thead>
            <tr>
              <th>Year</th>
              <th>Investment Value</th>
              <th>Annual Return</th>
              <th>Cumulative Return</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody className="center">
            {tableData.map((item, index) => {
              runningTotalReturn += item.return // Update running total of the return
              runningTotalInvestedCapital += item.annualInvestment // Update running total of the invested capital

              return (
                <tr key={index}>
                  <td>{item.year}</td>
                  <td>{formatter.format(item.valueEndOfYear.toFixed(2))}</td>
                  <td>{formatter.format(item.return.toFixed(2))}</td>
                  <td>{formatter.format(runningTotalReturn.toFixed(2))}</td>
                  <td>
                    {formatter.format(runningTotalInvestedCapital.toFixed(2))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default ResultsTable
