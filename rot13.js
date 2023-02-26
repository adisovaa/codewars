const rot13 = (str) => {
    return str.replace(/[a-z]/giu, (x) => {
      return String.fromCharCode(
        x.charCodeAt() + (
          x.toLowerCase() <= 'm' ? 13: -13
        ));
    });
  }