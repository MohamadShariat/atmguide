const ledOn = document.querySelector('#on');
const ledOff = document.querySelector('#off');

const receiptPrinterTP06 = document.querySelector('#journalPrinterTP06');
const receiptPrinterTP06ErrorDes = document.querySelector(
  '#journalPrinterTP06-error-des'
);

const receiptPrinterTP06ErrorArrON = [
  {
    7: "The printer doesn't find TOF.",
  },
  {
    8: 'Paper is after power on not at the print starting position. this error is enabled by memory switch 7-4.',
  },
  { 9: 'The paper motion sensor does not register paper movement.' },
  {
    '...':
      'StartOfJob timeout occurred because no EndOfJob was received within the specified time.',
  },
];

const receiptPrinterTP07ErrorArrOFF = [
  { 1: 'There is an abnormally of the print head temperature.' },
  { 3: 'The power supply voltage is extremely high.' },
  { 4: 'The power supply voltage is extremely low.' },
  { 5: 'The loaded printer driver does not correspond with the firmware.' },
];

ledOn.addEventListener('change', function (e) {
  console.log(e.target.checked);
});
ledOff.addEventListener('change', function (e) {
  console.log(e.target.checked);
});
