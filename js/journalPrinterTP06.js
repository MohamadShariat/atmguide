const ledOn = document.querySelector('#on');
const ledOff = document.querySelector('#off');

const journalPrinterTP06 = document.querySelector('#journalPrinterTP06');
const journalPrinterTP06ErrorDes = document.querySelector(
  '#journalPrinterTP06-error-des'
);

// Get the current year for footer
const year = document.querySelector('#currentYear');
year.innerHTML = new Date().getFullYear();

const journalPrinterTP06ErrorArrON = [
  { 'Please select...': '' },
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

const journalPrinterTP06ErrorArrOFF = [
  { 'Please select...': '' },
  { 1: 'There is an abnormally of the print head temperature.' },
  { 3: 'The power supply voltage is extremely high.' },
  { 4: 'The power supply voltage is extremely low.' },
  { 5: 'The loaded printer driver does not correspond with the firmware.' },
];

ledOn.addEventListener('change', function (e) {
  journalPrinterTP06.textContent = '';
  journalPrinterTP06ErrorDes.textContent = '';

  if (ledOn.checked) {
    journalPrinterTP06ErrorArrON.forEach(item => {
      const option = document.createElement('option');
      option.textContent = `${Object.keys(item)}`;
      journalPrinterTP06.appendChild(option);
    });

    journalPrinterTP06.addEventListener('change', e => {
      e.preventDefault();

      switch (e.target.value) {
        case 'Please select...':
          journalPrinterTP06ErrorDes.textContent = Object.values(
            journalPrinterTP06ErrorArrON[0]
          );
          break;
        case '7':
          journalPrinterTP06ErrorDes.textContent = Object.values(
            journalPrinterTP06ErrorArrON[1]
          );
          break;
        case '8':
          journalPrinterTP06ErrorDes.textContent = Object.values(
            journalPrinterTP06ErrorArrON[2]
          );
          break;
        case '9':
          journalPrinterTP06ErrorDes.textContent = Object.values(
            journalPrinterTP06ErrorArrON[3]
          );
          break;

        case '...':
          journalPrinterTP06ErrorDes.textContent = Object.values(
            journalPrinterTP06ErrorArrON[4]
          );
          break;
      }
    });
  }
});
ledOff.addEventListener('change', function (e) {
  journalPrinterTP06.textContent = '';
  journalPrinterTP06ErrorDes.textContent = '';

  journalPrinterTP06ErrorArrOFF.forEach(item => {
    const option = document.createElement('option');
    option.textContent = `${Object.keys(item)}`;
    journalPrinterTP06.appendChild(option);
  });

  journalPrinterTP06.addEventListener('change', e => {
    e.preventDefault();
    switch (e.target.value) {
      case 'Please select...':
        journalPrinterTP06ErrorDes.textContent = Object.values(
          journalPrinterTP06ErrorArrOFF[0]
        );
        break;
      case '1':
        journalPrinterTP06ErrorDes.textContent = Object.values(
          journalPrinterTP06ErrorArrOFF[1]
        );
        break;
      case '3':
        journalPrinterTP06ErrorDes.textContent = Object.values(
          journalPrinterTP06ErrorArrOFF[2]
        );
        break;
      case '4':
        journalPrinterTP06ErrorDes.textContent = Object.values(
          journalPrinterTP06ErrorArrOFF[3]
        );
        break;
      case '5':
        journalPrinterTP06ErrorDes.textContent = Object.values(
          journalPrinterTP06ErrorArrOFF[4]
        );
        break;
    }
  });
});
