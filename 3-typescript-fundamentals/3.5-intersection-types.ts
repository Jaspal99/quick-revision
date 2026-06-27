type Timestamped = {
  createdAt: string;
  updatedAt: string;
};

type Product = {
  id: string;
  name: string;
} & Timestamped;
