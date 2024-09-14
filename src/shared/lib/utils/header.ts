const makeHeader = (
  word?: string,
  defaultValue: string = "Default Header"
): string => {
  const matcher = new RegExp("[-/,.]", "ig");
  if (word && word.length > 1) {
    const replacedWord = word.split(matcher).filter(Boolean);

    return replacedWord
      .map((phrase) => {
        const matcherOnNumber = /\d+/.exec(phrase);
        if (matcherOnNumber) {
          phrase = `${phrase.slice(0, matcherOnNumber.index)} ${phrase.slice(
            matcherOnNumber.index
          )}`;
        }
        return phrase[0].toUpperCase() + phrase.slice(1);
      })
      .join(" ");
  }

  return defaultValue;
};

export { makeHeader };
