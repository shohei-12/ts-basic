interface Bread {
  calories: number;
}

interface Bread {
  type: string;
}

const francePan: Bread = {
  calories: 300,
  type: 'hard',
};

// In the case of type aliases
type MaboDofu = {
  calories: number;
  spicyLevel: number;
};

type Rice = {
  calories: number;
  gram: number;
};

type MaboDon = MaboDofu & Rice;

const maboDon: MaboDon = {
  calories: 500,
  spicyLevel: 10,
  gram: 350,
};
