module.exports = () => {
  const data = {
    pets: [],
  };

  for (let i = 0; i < 10; i++) {
    data.pets.push({
      id: i + 1,
      raça: "macho",
      name: `pets ${i + 1}`,
    });
  }

  return data;
};
