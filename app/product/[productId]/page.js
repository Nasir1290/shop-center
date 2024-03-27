"use client";
import React from 'react'
import productsData from "../../../data/products.json";
import Image from 'next/image';
import Footer from '@/components/Footer';

const allProducts = productsData.products;

export default function ProductPage({ params }) {

    const { productId } = params;
    const product = allProducts.find((product) => product.id === parseInt(productId));

    return (
        <main className="h-screen">
            <section className="bg-[#fafaf2] h-full py-20 mb-10">
                <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
                        <Image
                            src={`${product.thumbnail}`}
                            className="w-[400px] h-[500px] mx-auto object-cover"
                            alt=""
                            width={400}
                            height={400}
                        />
                    </div>
                    <div className="w-full lg:w-5/12">
                        <h1 className="italic text-xl lg:text-3xl font-serif font-semibold text-black">
                            {product.title}
                        </h1>
                        <span className="text- my-3">{product.category}</span>

                        <hr className="my-5 bg-black" />
                        <div className=' text-black'>
                            <p className="my-3">
                                <span className="text-rose-600 opacity-60 line-through">
                                    ${product.price.toFixed(2)}
                                </span>
                                <span className="font-bold text-2xl">${product.price -
                                    ((product.price / 100) * product.discountPercentage).toFixed(2)}</span>
                            </p>
                        </div>
                        <div className=' text-black'>
                            <p className="leading-7">
                                {product.description}
                            </p>
                            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                                Add To Cart - ${product.price -
                                    ((product.price / 100) * product.discountPercentage).toFixed(2)}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>

    )
}
