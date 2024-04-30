import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoChevronDownOutline } from "react-icons/io5";


export const Header = () => (
  <div className="py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-12">
        <img src="/logo.svg" className="h-4" alt="logo" />

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            Meta Quest
            <IoChevronDownOutline />
          </div>
          <div className="flex items-center gap-1">
            Ray-Ban | Meta
            <IoChevronDownOutline />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-6">
          <a
            href="#"
            title="Leer mas información"
            className="hover:underline hover:underline-offset-8 hover:decoration-[#418af7]"
          >
            Informacion sobre meta
          </a>
          <div>Asistencia</div>
        </div>

        <div className="p-3 border border-gray-300 rounded-lg flex items-center gap-1">
          <FaMagnifyingGlass />
          <span className="text-gray-500 font-medium ">
            Buscar en Meta Sotre
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="hover:cursor-pointer hover:text-[#418af7]">
            <BsHandbag />
          </div>
          <div className="hover:cursor-pointer hover:text-[#418af7]">
            <CiUser size={18} />
          </div>
        </div>
      </div>
    </div>
  </div>
);