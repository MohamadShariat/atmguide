const ledOn = document.querySelector('#on');
const ledOff = document.querySelector('#off');

const journalPrinterTP07 = document.querySelector('#journalPrinterNP06');
const journalPrinterTP07ErrorDes = document.querySelector(
  '#journalPrinterNP06-error-des'
);

ledOn.addEventListener('change', function (e) {
  console.log(e.target.checked);
});
ledOff.addEventListener('change', function (e) {
  console.log(e.target.checked);
});
