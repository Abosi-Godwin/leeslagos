import { FaCircleCheck, FaRegCircleCheck } from "react-icons/fa6";

const MiniLoader = () => {
    return (
       
  <div className="flex animate-pulse space-x-4">
                <div className="size-10 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-6 py-1">
                    <div className="h-2 rounded bg-gray-200"></div>
                    <div className="space-y-3">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 h-2 rounded bg-gray-200"></div>
                            <div className="col-span-1 h-2 rounded bg-gray-200"></div>
                        </div>
                        <div className="h-2 rounded bg-gray-200"></div>
                    </div>
                </div>
            </div>
    );
};

export default MiniLoader;
/*








 <div
            className="mx-auto w-full max-w-sm rounded-md h-48 border
        border-gray-300 p-4 animate-pulse"
        >
            <div className="bg-gray-100 space-x-4">
                <li className="relative flex gap-4">
                    <div className="relative z-10 flex items-center justify-center">
                        <div className="flex space-x-4 h-8 w-8 bg-gray-600"></div>
                    </div>

                    <div className="pb-6">
                        <p className="px-8"></p>

                        <p className="text-sm text-gray-600 mt-1 py-9"></p>

                        <p className="text-xs text-gray-500 mt-1 py-5"></p>
                    </div>
                </li>
            </div>
        </div>
        
        
        
        
        


*/
