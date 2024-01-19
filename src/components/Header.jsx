import { Link } from "react-router-dom";

const Header = () => {
  const Links = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 1,
      name: "Flashcard",
    },
    {
      id: 1,
      name: "Contact",
    },
    {
      id: 1,
      name: "Fag",
    },
  ];
  return (
    <>
      <div className=" main h-[80px] w-full">
        <nav className="nav w-[90%] mx-auto flex justify-between items-center pt-3">
          <Link className="w-[150px] cursor-pointer">
            <img
              src="/public/assets/logo.jpeg"
              alt="logo"
              className="w-[210px]"
            />
          </Link>

          <ul className="link-list flex justify-between items-center gap-5 cursor-pointer font-semibold opacity-95">
            {Links.map((link, i) => {
              return (
                <li
                  key={i}
                  className="text-lg m-2 hover:text-[#0d1861] font-medium"
                >
                  <Link to={link.id}>{link.name}</Link>
                </li>
              );
            })}

            <button className="py-1 px-6 rounded-2xl text-md text-white bg-gradient-to-r from-[#1f2e94] to-[#040c3b]">
              Login
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
