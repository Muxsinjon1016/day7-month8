import book1 from "../../public/book1.png";
import book2 from "../../public/book2.png";
import book3 from "../../public/book3.png";
import book4 from "../../public/book4.png";
import book5 from "../../public/book5.png";

interface dataTypes {
  id: number;
  img: any;
  name: string;
  category: string;
}

export const BooksData: dataTypes[] = [
  {
    id: 1,
    img: book1,
    name: "1984",
    category: "SIYOSAT, FANTASTIKA",
  },
  {
    id: 2,
    img: book2,
    name: "Rich dad poor dad",
    category: "SIYOSAT, FANTASTIKA",
  },
  {
    id: 3,
    img: book3,
    name: "Код 8",
    category: "SIYOSAT, FANTASTIKA",
  },
  {
    id: 4,
    img: book4,
    name: "Даниел КИЗ",
    category: "SIYOSAT, FANTASTIKA",
  },
  {
    id: 5,
    img: book5,
    name: "Бепарволикнинг...",
    category: "SIYOSAT, FANTASTIKA",
  },
];
