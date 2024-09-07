import Link from "next/link";
import { BooksData } from "../data";
import Image from "next/image";

export const Products = () => {
  return (
    <>
      <div className="container mt-10 flex items-center justify-between flex-wrap">
        {BooksData?.map(({ img, name, id, category }) => {
          return (
            <>
              <Link href={`/products/${id}`}>
                <div
                  className="w-[240px] h-[450px] rounded-xl border-2"
                  key={id}
                >
                  <Image
                    className="object-cover w-full h-auto"
                    src={img}
                    alt="img"
                  />
                  <div className="px-2 py-2">
                    <h3 className="text-2xl font-bold mb-1">{name}</h3>
                    <p className="text-[#3f51b5] mb-4">{category}</p>
                    <div className="flex items-center justify-between">
                      <img src="stars.svg" alt="img" />
                      <img src="icons.svg" alt="img" />
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Products;
