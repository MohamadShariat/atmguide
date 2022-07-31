const ledOn = document.querySelector('#on');
const ledOff = document.querySelector('#off');

const receiptPrinterNP07 = document.querySelector('#receiptPrinterNP07');
const receiptPrinterNP07ErrorDes = document.querySelector(
  '#receiptPrinterNP07-error-des'
);

const receiptPrinterNP07ErrorArrON = [
  {
    1: 'The automatic cutter does not work because it does not leave the home position or does not reach the home position',
  },
  { 2: "The carrier will not leave it's home position." },
  {
    3: 'A paper jam is detected between print starting position and TOF Sensors',
  },
  { 4: "The printer doesn't find the control mark" },
  {
    5: 'A paper jam is detected after the printer cuts the paper. This occurs in the printers presenter.',
  },
  {
    6: "A paper jam is detected after the printer cuts the paper. This occurs in the printer's retractor.",
  },
  { 7: "After cutting, the printer doesn't find TOF." },
  {
    8: 'Paper is after power on not at the print starting position. This error is enabled by memory switch 7-4.',
  },
  {
    '...':
      'StartOfJob timeout occurred because no EndOfJob was received within the specified time.',
  },
];

const receiptPrinterNP07ErrorArrOFF = [
  { 1: 'There is an abnormally of the print head temperature.' },
  { 3: 'The power supply voltage is extremly high.' },
  { 4: 'The power supply voltage is extremly low.' },
  { 5: 'The loaded printer driver does not correspond with the firmware.' },
];

ledOn.addEventListener('change', function (e) {
  if (ledOn.checked) {
    receiptPrinterNP07ErrorArrON.forEach(item => {
      const option = document.createElement('option');
      option.textContent = `${Object.keys(item)}`;
      receiptPrinterNP07.appendChild(option);
    });
    receiptPrinterNP07.addEventListener('change', e => {
      e.preventDefault();

      switch (e.target.value) {
        case '1':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrON[0]
          );
          break;
        case '2':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrON[1]
          );
          break;
        case '3':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrON[2]
          );
          break;
        case '4':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrON[3]
          );
          break;
        case '5':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrON[4]
          );
          break;
        case '6':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrON[5]
          );
          break;
        case '7':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrON[6]
          );
          break;
        case '8':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrON[7]
          );
          break;
        case '...':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrON[8]
          );
          break;
      }
    });
  }
});

ledOff.addEventListener('change', function (e) {
  if (ledOff.checked) {
    receiptPrinterNP07ErrorArrOFF.forEach(item => {
      const option = document.createElement('option');
      option.textContent = `${Object.keys(item)}`;
      receiptPrinterNP07.appendChild(option);
    });
    receiptPrinterNP07.addEventListener('change', e => {
      e.preventDefault();
      switch (e.target.value) {
        case '1':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrOFF[0]
          );
          break;
        case '3':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrOFF[1]
          );
          break;
        case '4':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrOFF[2]
          );
          break;
        case '5':
          receiptPrinterNP07ErrorDes.textContent = Object.values(
            receiptPrinterNP07ErrorArrOFF[3]
          );
          break;
      }
    });
  }
});
