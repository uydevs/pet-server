function getMoodleConf() {
  let = config = null;
  if(process.env.NODE_ENV === 'production'){
    config = require("./prod");
  }else{
    config = require("./dev");
  }
  return config;
}

module.exports = getMoodleConf();
