

import React from "react";
import Link from "next/link";
import Image from "next/image";

const SingleProducts = ({ product }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg ">
      <Link href={`/product/${product.id}`}>
        <div className="rounded-t-lg overflow-hidden">
          <Image
            className=" bg-cover h-64"
            src={product.thumbnail}
            alt=""
            width={300}
            height={300}
          />
        </div>
      </Link>
      <div className="p-5">
        <div>
          <Link href={`/product/${product.id}`}>
            <span className="mb-2 text-sm font-bold tracking-tight text-red-600">
              {product.title} &nbsp;
            </span>
          </Link>
          <span class="text-green-600">
            <Link href="/category">({product.category})</Link>
          </span>
        </div>
        <p className="mb-3 font-normal text-gray-700">{product.description}</p>
        <p class="text-rose-600 text-sm mt-4">
          <span class="text-[#919090] line-through">${product.price}</span> $
          {product.price -
            ((product.price / 100) * product.discountPercentage).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default SingleProducts;
