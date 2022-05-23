const sweFormatter = new Intl.NumberFormat('se-SE', { style: 'currency', currency: 'SEK' });

export function sweFormat(number) {
  return sweFormatter.format(number);
};