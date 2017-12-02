export default {
  exportDataTableToCsv(rows, data, fileName, separator) {
    let _separator = ';'
    if (separator !== null && separator !== undefined) {
      _separator = separator
    }
    const _rows = rows.map(o => o.title)
    let lineArray = []
    lineArray.push('data:text/csv;charset=utf-8,' + _rows.join(_separator))
    data.forEach(function (field, index) {
      let line = []
      rows.forEach(function (item, index) {
        let value = getObjectValue(field, item.name, item.formater, ' ')
        line.push(value)
      })
      let formatedLine = line.join(_separator)
      lineArray.push(formatedLine)
    })

    const csvContent = lineArray.join('\n')
    var encodedUri = encodeURI(csvContent)
    var link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', fileName)
    document.body.appendChild(link) // Required for FF
    link.click()
    document.body.removeChild(link)
  }
}

const getObjectValue = function (object, path, formater, defaultValue) {
  defaultValue = typeof defaultValue === 'undefined' ? null : defaultValue
  var obj = object
  if (path.trim() !== '') {
    var keys = path.split('.')
    keys.forEach(function (key) {
      if (
        obj !== null &&
        typeof obj[key] !== 'undefined' &&
        obj[key] !== null
      ) {
        obj = obj[key]
      } else {
        obj = defaultValue
      }
    })
  }
  if (formater !== undefined) {
    return formater(obj)
  }
  return obj
}

