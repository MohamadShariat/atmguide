const ledOn = document.querySelector('#on');
const ledOff = document.querySelector('#off');

const journalPrinterNP06 = document.querySelector('#journalPrinterNP06');
const journalPrinterNP06ErrorDes = document.querySelector(
  '#journalPrinterNP06-error-des'
);

const journalPrinterNP06ErrorArrON = [
  { 'Please select...': '' },
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

const journalPrinterNP06ErrorArrOFF = [
  { 'Please select...': '' },
  { 1: 'There is an abnormally of the print head temperature.' },
  { 3: 'The power supply voltage is extremely high.' },
  { 4: 'The power supply voltage is extremely low.' },
  { 5: 'The loaded printer driver does not correspond with the firmware.' },
];

ledOn.addEventListener('change', function (e) {
  journalPrinterNP06.textContent = '';
  journalPrinterNP06ErrorDes.textContent = '';

  if (ledOn.checked) {
    journalPrinterNP06ErrorArrON.forEach(item => {
      const option = document.createElement('option');
      option.textContent = `${Object.keys(item)}`;
      journalPrinterNP06.appendChild(option);
    });

    journalPrinterNP06.addEventListener('change', e => {
      e.preventDefault();

      switch (e.target.value) {
        case 'Please select...':
          journalPrinterNP06ErrorDes.textContent = Object.values(
            journalPrinterNP06ErrorArrON[0]
          );
          break;
        case '2':
          journalPrinterNP06ErrorDes.textContent = Object.values(
            journalPrinterNP06ErrorArrON[1]
          );
          break;
        case '7':
          journalPrinterNP06ErrorDes.textContent = Object.values(
            journalPrinterNP06ErrorArrON[2]
          );
          break;
        case '9':
          journalPrinterNP06ErrorDes.textContent = Object.values(
            journalPrinterNP06ErrorArrON[3]
          );
          break;

        case '...':
          journalPrinterNP06ErrorDes.textContent = Object.values(
            journalPrinterNP06ErrorArrON[4]
          );
          break;
      }
    });
  }
});
ledOff.addEventListener('change', function (e) {
  journalPrinterNP06.textContent = '';
  journalPrinterNP06ErrorDes.textContent = '';

  journalPrinterNP06ErrorArrOFF.forEach(item => {
    const option = document.createElement('option');
    option.textContent = `${Object.keys(item)}`;
    journalPrinterNP06.appendChild(option);
  });

  journalPrinterNP06.addEventListener('change', e => {
    e.preventDefault();
    switch (e.target.value) {
      case 'Please select...':
        journalPrinterNP06ErrorDes.textContent = Object.values(
          journalPrinterNP06ErrorArrOFF[0]
        );
        break;
      case '1':
        journalPrinterNP06ErrorDes.textContent = Object.values(
          journalPrinterNP06ErrorArrOFF[1]
        );
        break;
      case '3':
        journalPrinterNP06ErrorDes.textContent = Object.values(
          journalPrinterNP06ErrorArrOFF[2]
        );
        break;
      case '4':
        journalPrinterNP06ErrorDes.textContent = Object.values(
          journalPrinterNP06ErrorArrOFF[3]
        );
        break;
      case '5':
        journalPrinterNP06ErrorDes.textContent = Object.values(
          journalPrinterNP06ErrorArrOFF[4]
        );
        break;
    }
  });
});
