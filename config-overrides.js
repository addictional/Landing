const {alias, configPaths} = require('react-app-rewire-alias')

module.exports = function override(config) {
  setTimeout(()=>{
    console.log('work');
  },2000)
  alias(configPaths())(config)

  return config
}