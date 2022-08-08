const ledOn = document.querySelector('#on');
const ledOff = document.querySelector('#off');

const journalPrinterNP06 = document.querySelector('#journalPrinterNP06');
const journalPrinterNP06ErrorDes = document.querySelector(
  '#journalPrinterNP06-error-des'
);

const receiptPrinterTP06ErrorArrON = [
  { 2: "The carrier will not leave or reach it's home position." },
  {
    7: "The printer doesn't find TOF.",
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
