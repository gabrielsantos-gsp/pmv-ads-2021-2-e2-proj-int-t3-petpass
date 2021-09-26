import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  const pets = [
    { id: 1, name: "luke", idade: "5 meses", raça: "maltês", sexo: "macho" },
    { id: 2, name: "luke2", idade: "5 meses", raça: "maltês2", sexo: "macho" },
    { id: 3, name: "luke3", idade: "5 meses", raça: "maltês3", sexo: "macho" },
  ];
  return response.json(pets);
};
