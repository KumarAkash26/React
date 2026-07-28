import { Link } from "react-router";
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Men's Fashion",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600",
  },
  {
    title: "Women's Fashion",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600",
  },
  {
    title: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    title: "Jewellery",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600",
  },
];

const features = [
  {
    icon: <Truck size={35} />,
    title: "Free Shipping",
    desc: "On all orders",
  },
  {
    icon: <ShieldCheck size={35} />,
    title: "Secure Payment",
    desc: "100% secure checkout",
  },
  {
    icon: <Headphones size={35} />,
    title: "24/7 Support",
    desc: "Always ready to help",
  },
];

const Home = () => {
  return (
    <div className="bg-slate-50 mt-4">
      <section className="bg-linear-to-r rounded-4xl from-black via-gray-700 to-white text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 py-20 md:flex-row">
          <div className="max-w-xl">
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
              New Collection 2026
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight">
              Discover Your
              <span className="block text-yellow-300">Perfect Style</span>
            </h1>

            <p className="mt-6 text-lg text-indigo-100">
              Shop thousands of premium products with fast delivery, secure
              payment, and amazing discounts.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/shop"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-black shadow hover:scale-105 transition"
              >
                Shop Now
              </Link>

              <button className="rounded-xl border border-white px-6 py-3 hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1519657337289-077653f724ed?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shopping"
              className="w-125 rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-4xl font-bold">Shop by Category</h2>

        <p className="mt-3 text-center text-gray-500">
          Find your favorite products.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl bg-white shadow hover:-translate-y-2 hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>

                <button className="mt-4 flex items-center gap-2 text-yellow-900">
                  Explore
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border-2 border-gray-300 bg-slate-50 p-8 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-center text-black">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold">{feature.title}</h3>

              <p className="mt-3 text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl bg-linear-to-r from-black via-gray-700 to-white p-14 text-center text-white">
          <ShoppingBag size={60} className="mx-auto" />

          <h2 className="mt-6 text-4xl font-bold">Start Shopping Today</h2>

          <p className="mt-4 text-lg text-indigo-100">
            Discover premium products at amazing prices.
          </p>

          <Link
            to="/shop"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105"
          >
            Explore Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
