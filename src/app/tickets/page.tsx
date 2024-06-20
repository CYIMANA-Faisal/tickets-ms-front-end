import { Button, Radio, Tag } from "antd";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import Input from "antd/es/input/Input";
import FilterButtonGroup from "../components/filter.component";

export default async function Page() {
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
      </div>
      <div className="h-[80%] w-ful overflow-auto mt-5">
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
        <div className="bg-white flex items-center justify-between py-3 px-6 mt-3">
          <h3 className="text-md font-bold">1</h3>
          <h3 className="text-md font-bold">#859234568</h3>
          <p>
            <span>Subject: </span>Meter not displaying units
          </p>
          <p>Kimihurura</p>
          <Tag color="error">Critical</Tag>
          <Button className="!text-primary !border !border-primary !rounded-full">
            Attend
          </Button>
          <Button
            shape="round"
            icon={<DownloadOutlined />}
            size="middle"
          ></Button>
          <Button
            shape="round"
            icon={<EyeOutlined className="text-slate-200" />}
            size="middle"
          ></Button>
        </div>
      </div>
    </div>
  );
}
