import { NextPage } from "next";
import React from "react";
import { BooksData } from "../../data";

interface detailTypes {
  params: { id: number };
}

const ProductDetails: React.FC<detailTypes> = ({ params }) => {
  const booksData = BooksData?.find((product) => product.id == params.id);

  return (
    <>
      <div className="container mt-10">
        <div className="flex items-center gap-6">
          <img
            className="w-[300px] h-[422px] border-2 rounded-2xl overflow-hidden"
            src={booksData?.img}
            alt={booksData?.name}
          />
          <div className="pb-10 border-b-4 border-dashed w-[960px]">
            <h3 className="text-4xl font-bold">{booksData?.name}</h3>
            <p className="text-[#3f51b5] mb-4">{booksData?.category}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consectetur architecto deleniti veniam fugiat nemo sed incidunt,
              fuga dolores voluptatum nam exercitationem cum obcaecati,
              similique et. Voluptas, laboriosam omnis. Dignissimos quam,
              reiciendis quis veritatis eaque non maxime ratione quas ducimus
              temporibus deserunt vitae laudantium sunt laboriosam sequi
              blanditiis, magni molestias autem neque quod totam nisi, explicabo
              dicta quisquam? Sint nulla sed voluptatem architecto cumque
              aperiam distinctio ducimus perspiciatis. Culpa reprehenderit eum
              odio. Animi labore sed quisquam voluptatem laboriosam doloremque
              ullam optio laudantium dicta rerum enim a dolor, accusamus quis
              quae praesentium tenetur. Quibusdam ratione eligendi iure
              praesentium rem sequi exercitationem maxime!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
