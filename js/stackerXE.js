const stacker = document.querySelector('#stacker');
const stackerErrorDes = document.querySelector('#stacker-error-des');

const stackerErrorArr = [
  { '-/-': `Start-up (after RESET or electronics self-test)` },
  { 'b/u': `Burn; program controller` },
  { 'c/o': `Compare; check controller` },
  { 'i/o': `Controller OK` },
  { '0/0': `No error` },
  { '0/1': `Software faulty` },
  { '0/5': `Communication problem with ChipCard controller` },
  {
    '0/6': `Communication problem with ChipCard / or wrong ChipCard inserted (ChipCard number not '226-0PR')`,
  },
  { '0/8': `Stacker EEPROM missing/defective` },
  { '0/9': `Locking handle open, the CMD is not in the dispensing position` },
  { '1/0': `Controller faulty` },
  { '1/1': `Software missing (download)` },
  { '1/2': `Softly switch open` },
  { '1/3': `Device disable present` },
  { '1/4': `CMD-V4 minimum configuration is missing` },
  { '1/5': `Cassette board with invalid coding, not inserted or defective` },
  { '1/6': `Output transport coding invalid` },
  { '1/7': `Belt drive of clamp defective` },
  { '1/8': `Banknotes jammed during dispensing` },
  { '1/9': `Clamp transport defective/blocked` },
  { '2/0': `Single reject switch (MA2/1, MA2/2, SM1) faulty / blocked` },
  { '2/1': `Faulty measuring station (DDU)` },
  {
    '2/2': `Photosensor amplifier is faulty or photosensor initialization is unsuccessful`,
  },
  { '2/3': `Routing disk (SM2, SM3) faulty / blocked` },
  { '2/4': `Reject/retract drive (MA6) defective / blocked (lifting magnet)` },
  { '2/5': `Dispensing drive (DCM1) defect / blocked` },
  { '2/6': `Stacker wheel drive (SM9) defect / blocked` },
  { '2/8': `Shutter error` },
  { '2/9': `Cash-out photosensor covered (manipulation)` },
  {
    '3/x': `Too many problems during dispensing from cassette x ( x = 1 - 6 )`,
  },
  {
    '4/x': `Cash could not be dispensed or faulty amount of pressure against the banknotes when a cassette is inserted ( x = 1 - 6 )`,
  },
  { '5/x': `Too many poor quality notes ( x = 1 - 6 )` },
  { '6/x': `Cassette defective ( x = 1 - 6 )` },
  { '7/0': `Banknotes thickness measuring station (DDU) not ready` },
  {
    '7/x': `Dispensing sensor PSDx dirty or pressure sensor is faulty ( x = 1 - 6)`,
  },
  { '8/x': `Cassette empty sensor PSEx ( x = 1 - 6)` },
  { '9/0': `Photosensor PS1 dirty` },
  { '9/1': `Photosensor PS18 dirty` },
  { '9/3': `Photosensor PS2 dirty` },
  { '9/5': `Photosensor PS27 dirty` },
  { '9/A': `Photosensor PS28 dirty` },
];

stackerErrorArr.forEach(item => {
  const option = document.createElement('option');
  option.textContent = `${Object.keys(item)}`;
  stacker.appendChild(option);
});

stacker.addEventListener('change', e => {
  e.preventDefault();
  switch (e.target.value) {
    case '-/-':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[0]);
      break;
    case 'b/u':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[1]);
      break;
    case 'c/o':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[2]);
      break;
    case 'i/o':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[3]);
      break;
    case '0/0':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[4]);
      break;
    case '0/1':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[5]);
      break;
    case '0/5':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[6]);
      break;
    case '0/6':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[7]);
      break;
    case '0/8':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[8]);
      break;
    case '0/9':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[9]);
      break;
    case '1/0':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[10]);
      break;
    case '1/1':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[11]);
      break;
    case '1/2':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[12]);
      break;
    case '1/3':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[13]);
      break;
    case '1/4':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[14]);
      break;
    case '1/5':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[15]);
      break;
    case '1/6':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[16]);
      break;
    case '1/7':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[17]);
      break;
    case '1/8':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[18]);
      break;
    case '1/9':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[19]);
      break;
    case '2/0':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[20]);
      break;
    case '2/1':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[21]);
      break;
    case '2/2':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[22]);
      break;
    case '2/3':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[23]);
      break;
    case '2/4':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[24]);
      break;
    case '2/5':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[25]);
      break;
    case '2/6':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[26]);
      break;
    case '2/8':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[27]);
      break;
    case '2/9':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[28]);
      break;
    case '3/x':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[29]);
      break;
    case '4/x':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[30]);
      break;
    case '5/x':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[31]);
      break;
    case '6/x':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[32]);
      break;
    case '7/0':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[33]);
      break;
    case '7/x':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[34]);
      break;
    case '8/x':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[35]);
      break;
    case '9/0':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[36]);
      break;
    case '9/1':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[37]);
      break;
    case '9/3':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[38]);
      break;
    case '9/5':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[39]);
      break;
    case '9/A':
      stackerErrorDes.textContent = Object.values(stackerErrorArr[40]);
      break;
  }
});
