function Phase(phase) {
  switch (phase) {
    case 'drawPhase':
      return Promise(function (res, rej) {})
    case 'mainPhase':
      return Promise(function (res, rej) {})
    case 'attackPhase':
      return Promise(function (res, rej) {})
  }
}

module.exports = Phase