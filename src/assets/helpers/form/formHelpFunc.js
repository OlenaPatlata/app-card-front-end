  export const handleAmount = value => {
    if (!value || Number.isNaN(Number(value))) return value;
    const length = value.length;
    const dot = value.indexOf('.');
    if (dot < 0) {
      return value.concat('.00');
    }
    if (dot < length - 3) {
      return value.slice(0, dot + 3);
    }

    if (dot > length - 3) {
      return value.padEnd(dot + 3, '0');
    }
    return value;
  };