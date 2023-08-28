export function shuffle<T>(list: T[]): T[] {
  const shuffledList = [...list];
  let currentIndex = shuffledList.length;
  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [shuffledList[currentIndex], shuffledList[randomIndex]] = [
      shuffledList[randomIndex],
      shuffledList[currentIndex],
    ];
  }

  return shuffledList;
}

export function sample<T>(list: T[], size = 1): T[] {
  return shuffle(list).slice(0, size);
}
