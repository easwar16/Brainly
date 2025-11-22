import { VscAdd } from "react-icons/vsc";
import { Card } from "../components/Card";
import { FaShareAlt } from "react-icons/fa";
import { Button } from "../components/Buttons";
import { CreateContentModal } from "../components/CreateContentModal";
import { useState } from "react";
import { SideBar } from "../components/SideBar";
import { useContent } from "../hooks/fetchContent";

export function DashBoard() {
  const [modalOpen, setModalOpen] = useState(false);
  const content = useContent();
  return (
    <div className="flex w-screen">
      <SideBar />
      <div className="p-4 w-full min-h-screen bg-gray-100">
        <CreateContentModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        <div className="flex justify-between">
          <div className="pl-1 justify-start text-2xl">All Notes</div>
          <div className="flex gap-4 pr-4">
            <Button
              variant="primary"
              size="lg"
              text="Add Content"
              onClick={() => {
                setModalOpen(true);
              }}
              startIcon={<VscAdd />}
            />
            <Button
              variant="secondary"
              size="lg"
              text="Share Brain"
              onClick={() => {}}
              startIcon={<FaShareAlt />}
            />
          </div>
        </div>
        <div className="flex gap-4 pt-6 flex-wrap">
          {content.map(({ _id, type, link, title }) => {
            return <Card key={_id} type={type} link={link} title={title} />;
          })}
          {/* <Card
            type="tweet"
            link="https://x.com/Easwar_H/status/1900814066681344341"
            title="LES GOO !"
          />
          <Card
            type="youtube"
            link="https://www.youtube.com/embed/okh85F29Gjg?si=KNI45xFHnvVCmj0w"
            title="LES GOO !"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
