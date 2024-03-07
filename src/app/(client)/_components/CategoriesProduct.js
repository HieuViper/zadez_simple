import Image from "next/image";
import Link from "next/link";
import ImageAccesories from "../../../../public/images/categories/accessories.webp";
import ImageAudio from "../../../../public/images/categories/audio.webp";
import ImageBag from "../../../../public/images/categories/bag.webp";
import ImageHeadset from "../../../../public/images/categories/headset.webp";
import ImageKeyboard from "../../../../public/images/categories/keyboard.webp";
import ImageMouse from "../../../../public/images/categories/mouse.webp";

const CategoriesProduct = () => {
  return (
    <section className="">
      <h2 className="text-xl md:text-2xl text-primary font-bold text-center m-0 mb-2">
        Danh Mục Sản Phẩm
      </h2>
      <div className="grid grid-cols-3 my-4 gap-2 lg:gap-4">
        <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl cursor-pointer  text-center">
          <Link
            style={{ textDecoration: "none" }}
            href="/danh-muc-san-pham/0?type=headset"
            className=" hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
            prefetch={false}
          >
            <Image
              sizes="(min-width: 20em) 30vw,
                (min-width: 28em) 45vw,
                100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={200}
              height={200}
              src={ImageHeadset}
              alt="Tai nghe zadez"
              placeholder="blur"
              priority={true}
            />
            <div className="mb-2 md:mb-4">Tai nghe</div>
          </Link>
        </div>
        <div className="col-span-3 md:col-span-1 grid grid-cols-2 gap-2 lg:gap-4">
          <div className=" col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl cursor-pointer hover:text-primary text-center">
            <Link
              style={{ textDecoration: "none" }}
              href="/danh-muc-san-pham/0?type=mouse"
              className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
              prefetch={false}
            >
              <Image
                sizes="(min-width: 20em) 30vw,
                (min-width: 28em) 45vw,
                100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src={ImageMouse}
                alt="Chuột zadez"
                // priority={true}
                placeholder="blur"
              />
              <div className="mb-2 md:mb-4">Chuột</div>
            </Link>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl cursor-pointer hover:text-primary text-center">
            <Link
              style={{ textDecoration: "none" }}
              href="/danh-muc-san-pham/0?type=keyboard"
              className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
              prefetch={false}
            >
              <Image
                sizes="(min-width: 20em) 30vw,
                (min-width: 28em) 45vw,
                100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src={ImageKeyboard}
                alt="Bàn phím zadez"
                // priority={true}
                placeholder="blur"
              />
              <div className="mb-2 md:mb-4">Bàn phím</div>
            </Link>
          </div>
          <div className=" col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl cursor-pointer hover:text-primary text-center">
            <Link
              style={{ textDecoration: "none" }}
              href="/danh-muc-san-pham/0?type=bag"
              className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
              prefetch={false}
            >
              <Image
                sizes="(min-width: 20em) 30vw,
                (min-width: 28em) 45vw,
                100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src={ImageBag}
                alt="Túi chống sốc zadez"
                // priority={true}
                placeholder="blur"
              />
              <div className="mb-2 md:mb-4">Túi chống sốc</div>
            </Link>
          </div>
          <div className="col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl cursor-pointer hover:text-primary hover:transform text-center">
            <Link
              style={{ textDecoration: "none" }}
              href="/danh-muc-san-pham/0?type=accessories"
              className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
              prefetch={false}
            >
              <Image
                sizes="(min-width: 20em) 30vw,
                (min-width: 28em) 45vw,
                100vw"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                width={200}
                height={200}
                src={ImageAccesories}
                placeholder="blur"
                alt="Phụ kiện zadez"
                // priority={true}
              />
              <div className="mb-2 md:mb-4">Phụ kiện</div>
            </Link>
          </div>
        </div>
        <div className="col-span-3 md:col-span-1 flex flex-col justify-center items-center bg-[#e5e7eb] rounded-2xl cursor-pointer hover:text-primary hover:transform text-center">
          <Link
            style={{ textDecoration: "none" }}
            href="/danh-muc-san-pham/0?type=speaker"
            className="hover:transform hover:scale-105 transition-transform duration-300 ease-in-out text-black hover:text-primary hover:font-semibold"
            prefetch={false}
          >
            <Image
              sizes="(min-width: 20em) 30vw,
                (min-width: 28em) 45vw,
                100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={200}
              height={200}
              src={ImageAudio}
              placeholder="blur"
              alt="Loa zadez"
              // priority={true}
            />
            <div className="mb-2 md:mb-4">Loa</div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesProduct;
