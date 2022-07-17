const ledOn = document.querySelector('#on');
const ledOff = document.querySelector('#off');

const receiptPrinterTP07 = document.querySelector('#receiptPrinterTP06');
const receiptPrinterTP07ErrorDes = document.querySelector(
  '#receiptPrinterTP06-error-des'
);

ledOn.addEventListener('change', function (e) {
  console.log(e.target.checked);
});
ledOff.addEventListener('change', function (e) {
  console.log(e.target.checked);
});
