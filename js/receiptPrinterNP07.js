const ledOn = document.querySelector('#on');
const ledOff = document.querySelector('#off');

const receiptPrinterTP07 = document.querySelector('#receiptPrinterNP07');
const receiptPrinterTP07ErrorDes = document.querySelector(
  '#receiptPrinterNP07-error-des'
);

ledOn.addEventListener('change', function (e) {
  console.log(e.target.checked);
});
ledOff.addEventListener('change', function (e) {
  console.log(e.target.checked);
});
