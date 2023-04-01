const waitFor = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const typeSentence = async (sentence, domElement) => {
  const letters = sentence.split("");

  let i = 0;
  while (i < letters.length) {
    await waitFor(100);
    $(domElement).append(letters[i]);
    i++;
  }

  return;
}

const deleteSentence = async (domElement) => {
  const sentence = $(domElement).html();
  const letters = sentence.split("");

  while (letters.length > 0) {
    await waitFor(100);
    letters.pop();
    $(domElement).html(letters.join(""));
  }
}

const type = async (sentences, domElement) => {
  let i = 0;

  while (true) {
    await waitFor(5_000);
    await deleteSentence(domElement);

    await waitFor(500);
    await typeSentence(sentences[i], domElement);

    i == sentences.length - 1 ? i = 0 : i++;
  }
}