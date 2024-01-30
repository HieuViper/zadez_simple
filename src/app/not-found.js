export default function NotFoundPage() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
        Trang Không Tồn Tại
      </div>
      <button className="bg-[#FF6A3D] hover:bg-[#ff845e] cursor-pointer text-white font-bold py-2 px-4 border-b-4 border-[#ca6749] rounded transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
        <a href="/" className="no-underline text-black">
          Trở Về Trang Chủ
        </a>
      </button>
    </main>
  );
}
