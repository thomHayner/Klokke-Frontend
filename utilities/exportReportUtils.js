import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';

const html = `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body style="text-align: center;">
      <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
        Hello Expo!
      </h1>
      <img
        src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
        style="width: 90vw;" />
    </body>
  </html>
`;

const print = async (selectedPrinter) => {
  // On iOS/android prints the given html. On web prints the HTML from the current page.
  await Print.printAsync({
    html,
    printerUrl: selectedPrinter?.url, // iOS only
  });
};

const printToPdfFile = async () => {
  // On iOS/android prints the given html. On web prints the HTML from the current page.
  const { uri } = await Print.printToFileAsync({ html });
  console.log('File has been saved to:', uri);
  await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
};

const selectPrinter = async (setSelectedPrinter) => {
  const printer = await Print.selectPrinterAsync(); // iOS only
  setSelectedPrinter(printer);
};

export {
  print,
  printToPdfFile,
  selectPrinter,
}