import { CiDollar } from "react-icons/ci";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiDeliveryTruck } from "react-icons/ci";


export const TopBar =() => (
    <div className=" py-3 flex justify-center gap-3 text-xs text-white bg-[#344854]">
        <div className="flex gap-1 items-center"><CiDeliveryTruck size={17} />Envio gratis</div>
        <div className="flex gap-1 items-center"><CiDollar size={16} />Prueba sin compromiso</div>
        <div className="flex gap-1 items-center"><VscWorkspaceTrusted size={11} />Garantía</div>
    </div>
)