import { IoCloseCircleOutline } from "react-icons/io5";
import { Input } from "./Input";
import { Button } from "./Buttons";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

const enum ContentType {
  Youtube = "youtube",
  Twitter = "tweet",
}
interface contentModalType {
  isOpen: boolean;
  onClose: () => void;
}
export const CreateContentModal = (props: contentModalType) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [typestate, setType] = useState(ContentType.Youtube);

  async function createContent() {
    const title = titleRef?.current?.value;
    const link = linkRef?.current?.value;
    const type = typestate;
    const token = `Bearer ${localStorage.getItem("brainlyToken")}`;
    // console.log(token);
    const createdContent: { data } = await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        title: title,
        link: link,
        type: type,
      },
      { headers: { authorization: token } }
    );
    console.log(createdContent);
    alert(createdContent?.data.message);
    props.onClose();
  }
  return (
    <div>
      {props.isOpen && (
        <div className="w-screen h-screen bg-slate-500/60 fixed top-0 left-0 flex justify-center">
          <div className="flex flex-col justify-center">
            <span className="bg-white text-black rounded p-4">
              <div className="flex justify-end">
                <div onClick={props.onClose} className="cursor-pointer">
                  <IoCloseCircleOutline />
                </div>
              </div>
              <div className="flex flex-col">
                <Input
                  id="TitleTextBox"
                  ref={titleRef}
                  placeholder="Title"
                  type="text"
                />
                <Input
                  id="LinkTextBox"
                  ref={linkRef}
                  placeholder="Link"
                  type="text"
                />
                <div className="flex flex-col justify-center items-center gap-2 py-4">
                  <div className="text-md">Type</div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <Button
                        variant={
                          typestate === ContentType.Youtube
                            ? "primary"
                            : "secondary"
                        }
                        size="md"
                        text="YouTube"
                        onClick={() => {
                          setType(ContentType.Youtube);
                        }}
                      />
                    </div>
                    <div>
                      <Button
                        variant={
                          typestate === ContentType.Twitter
                            ? "primary"
                            : "secondary"
                        }
                        size="md"
                        text="Twitter"
                        onClick={() => {
                          setType(ContentType.Twitter);
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* <Input id="Type" placeholder="Link" type="text"  /> */}
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  text="Submit"
                  onClick={() => {
                    createContent();
                  }}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
