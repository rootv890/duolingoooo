import Loader1 from "@/components/bird-loader";
import { RiseLoader } from "react-spinners";

type Props = {};

function loading({}: Props) {
  return (
    <div className="w-full h-full items-center justify-center flex ">
      <RiseLoader color="#22c55e" />
    </div>
  );
}

export default loading;
