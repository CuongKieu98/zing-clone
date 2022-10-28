export default class stringUtils {
    static formatDuration(value) {
      var m = Math.floor(value / 60);
      var s = Math.floor(value % 60);
      if (isNaN(m) || isNaN(s)) {
        m = 0;
        s = 0;
      }
      return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    }
  

  }
  