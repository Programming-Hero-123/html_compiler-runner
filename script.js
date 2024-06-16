const codeTextarea = document.getElementById('code');
const outputFrame = document.getElementById('output');

function updateOutput() {
  const code = codeTextarea.value;
  const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;
  outputDocument.open();
  outputDocument.write(code);
  outputDocument.close();
}

codeTextarea.addEventListener('input', updateOutput);

// Initial update
updateOutput();


