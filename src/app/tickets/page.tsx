import { Input } from "antd";
import FilterButtonGroup from "../components/filter.component";
import Tickets from "../components/tickets.component";
import CreateTicketButton from "../components/create-ticket-button.component";

export default function Page() {
  return (
    <div className="pt-3">
      <div className="bg-white w-full h-[20%] p-6 flex items-center justify-between">
        <Input
          type="text"
          placeholder="Search"
          className="text-md !rounded-full !p-2 !border !border-gray-400 !w-80 !h-11 !bg-white !text-black !placeholder-gray-500 !focus:outline-none !focus:ring-2 !focus:ring-blue-500 !pl-4"
        />
        <div className="flex items-center">
          <h3 className="text-md font-bold">Show: </h3>
          <FilterButtonGroup />
        </div>
        <div>
          <CreateTicketButton />
        </div>
      </div>
      <Tickets />
    </div>
  );
}
