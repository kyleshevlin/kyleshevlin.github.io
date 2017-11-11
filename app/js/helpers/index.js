export function todaysDate() {
  var today = new Date()
  var dd = today.getDate()
  var mm = today.getMonth() + 1
  var yyyy = today.getFullYear()

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  return new Date(yyyy + '-' + mm + '-' + dd)
}

export function months(startdate) {
  var today = todaysDate()
  var startDay = new Date(startdate)
  var months = ((today - startDay) / 2592000000).toFixed(2) // Milleseconds in a 30 day month
  return parseFloat(months)
}
