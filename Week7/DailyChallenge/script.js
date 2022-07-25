let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

//PT 1
const getCarHonda = (carInventory) => {
  let found = carInventory.find((e) => e.car_make === "Honda");
  return `This is a ${found.car_make} ${found.car_model} from ${found.car_year}.`;
};

//PT 2
const sortCarInventoryByYear = (carInventory) => {
  const newInv = carInventory.sort((a, b) => {
    return a.car_year - b.car_year;
  });
  return newInv;
};
