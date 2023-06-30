export const formatterPeso = (value) => {
  const formatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    currencyDisplay: 'code'
  })

  return formatter.format(value)
}
