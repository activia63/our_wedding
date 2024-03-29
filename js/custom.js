window.onload = function() {
  setGuests()
  setCounter()

  /*var ua = navigator.userAgent.toLowerCase()
  var isSafari
  if (ua.indexOf('safari') != -1 && ua.indexOf('chrome') === -1) { 
    document.getElementsByClassName('second-photos')[0].style.marginTop = '-350px'
  }

  var fr = navigator.userAgent.toLowerCase()
  if (fr.indexOf("firefox")) {
    document.getElementsByClassName('second-photos')[0].style.marginTop = '-350px'
  }

  if (navigator.appName == 'Microsoft Internet Explorer' || 
      !!(navigator.userAgent.match(/Trident/) ||
      navigator.userAgent.match(/rv:11/))) {
    document.getElementsByClassName('second-photos')[0].style.marginTop = '-350px'
  }*/
}

function setGuests() {
  var guestId = +window.location.search.substr(4)
  var guests = guestArr[guestId] || guestArr[0]
  var dearEl = document.getElementById('dear')
  var guestEl1 = document.getElementById('guest1')
  var guestEl2 = document.getElementById('guest2')
  var guestEl3 = document.getElementById('guest3')
  var delim1 = document.getElementById('delim1')
  var delim2 = document.getElementById('delim2')
  var you = document.getElementById('you')
  if (guests.names.length > 1) {
    dearEl.textContent  = 'Дорогие'
    you.textContent = 'вас'
    for (var j=0; j < guests.names.length; j++) {
      if (j == 0 && guests.names.length === 1) {
        guestEl1.textContent  = ''
        guestEl2.textContent  = ''
        guestEl3.textContent  = guests.names[j]
      } else if (j == 0 && guests.names.length === 2) {
        guestEl1.textContent  = ''
        guestEl2.textContent  = guests.names[j]
        delim2.textContent  = 'и'
      } else if (j == 0 && guests.names.length === 3) {
        guestEl1.textContent  = guests.names[j]
        delim1.textContent  = ','
      } else if (j === 1 && guests.names.length === 2) {
        guestEl3.textContent  = guests.names[j]
      } else if (j === 1 && guests.names.length === 3) {
        guestEl2.textContent  = guests.names[j]
        delim2.textContent  = 'и'
      } else if (j === 2) {
        guestEl3.textContent  = guests.names[j]
      }
    }
  } else {
    if (guests.names[0] == 'Диана' ||
        guests.names[0] == 'Люба' ||
        guests.names[0] == 'Оля' ||
        guests.names[0] == 'Лиза' ||
        guests.names[0] == 'Наташа' ||
        guests.names[0] == 'тетя Тамара' ||
        guests.names[0] == 'бабушка Нина' ||
        guests.names[0] == 'Яна' ||
        guests.names[0] == 'Саша') {
      dearEl.textContent  = 'Дорогая'
      you.textContent = 'тебя'
    } else if (guests.names[0] == 'Кирилл' ||
               guests.names[0] == 'дядя Толя' ||
               guests.names[0] == 'Дима') {
      dearEl.textContent  = 'Дорогой'
      you.textContent = 'тебя'
    } else {
      dearEl.textContent  = 'Дорогие'
      you.textContent = 'вас'
    }
    guestEl1.textContent  = ''
    guestEl2.textContent  = ''
    guestEl3.textContent  = guests.names[0]
  }
}

function setCounter() {
  var wdDate = new Date('Sat  Jul 27 2019 17:30:00 GMT+0300 (FET)')
  dayCalc(wdDate)
  setInterval(function() {
    dayCalc(wdDate)
  }, 30000)
  
  setInterval(function() {
    var colons = document.getElementsByClassName('first-table-colon')
    for (var i = 0; i < colons.length; i ++) {
      if (colons[i].textContent  === ':') colons[i].textContent  = ''
      else colons[i].textContent  = ':'
    }
  }, 1000)
}

function dayCalc(wdDate) {
  var currDate = new Date()
  var timeDiff = Math.abs(wdDate.getTime() - currDate.getTime())
  var dateDiff = Math.floor(timeDiff / (1000 * 3600 * 24))
  if (dateDiff < 0) dateDiff = 0
  var hourDiff = Math.floor(timeDiff / (1000 * 3600)) % 24
  if (hourDiff < 0) hourDiff = 0
  var minDiff = Math.floor(timeDiff / (1000 * 60)) % 60
  if (minDiff < 0) minDiff = 0
  HTMLUpdate(dateDiff, hourDiff, minDiff)
}

function HTMLUpdate(dateDiff, hourDiff, minDiff) {
  var dayDesc = ''
  if (dateDiff % 10 > 4 || dateDiff % 10 === 0) dayDesc = 'Дней'
  else if (dateDiff % 10 > 1)                   dayDesc = 'Дня'
  else                                          dayDesc = 'День'
  document.getElementById('day-desc').textContent = dayDesc

  var hourDesc = ''
  if (hourDiff % 10 > 1 || hourDiff % 10 === 0) hourDesc = 'Часов'
  else if (hourDiff % 10 > 4)                   hourDesc = 'Часа'
  else                                          hourDesc = 'Час'
  document.getElementById('hour-desc').textContent = hourDesc

  var minDesc = ''
  if (minDiff % 10 > 4 || minDiff % 10 === 0) minDesc = 'Минут'
  else if (minDiff % 10 > 1)                  minDesc = 'Минуты'
  else                                        minDesc = 'Минута'
  document.getElementById('min-desc').textContent = minDesc

  document.getElementById('day').textContent  = '' + dateDiff
  document.getElementById('hour').textContent  = '' + hourDiff
  document.getElementById('min').textContent  = '' + minDiff
}
