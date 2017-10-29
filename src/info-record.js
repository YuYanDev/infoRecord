var fs = require('fs');
var moment = require('moment');

function infoRecord(data = JSON.parse("[]"), filePath = "default.txt", options = { time: 'true', consoleLog: 'true'}) {
  if (options.time == 'true') {
    /**
     * 指定time选项为真值时的代码
     */
    var timeNow = moment().format();
    var outputString = timeNow + ' : \n' + JSON.stringify(data) + '\n\n';
    fs.appendFile(filePath, outputString, function () {
      /**
       * 根据传入值判断是否打印信息
       */
      if (options.consoleLog == 'true') {
        console.log('Output information:\n' + outputString);
      } else {
        if (options.consoleLog == 'false') {

        } else {
          console.error('"options" parameter error')
        }
      }
    });
  } else {
    /**
     * 指定time值不选择时的操作
     */
    if (options.time == 'false') {
      var outputString = JSON.stringify(data) + '\n\n';
      fs.appendFile(filePath, outputString, function () {
        /**
         * 根据传入值判断是否打印信息
         */
        if (options.consoleLog == 'true') {
          console.log('Output information:\n' + outputString);
        } else {
          if (options.consoleLog == 'false') {

          } else {
            console.error('"options" parameter error')
          }
        }
      });
    } else {
      /**
       * 其他选项报错
       */
      console.error('"options" parameter error')
    }
  }
  /**
   * 返回字符串
   */
  return outputString;
}

module.exports = infoRecord;