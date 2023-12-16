import { XIcon } from "@/assets/icons";

type Props = {
  children: React.ReactNode;
  button: React.ReactNode;
  modelClassName?: string;
  modelStyle?: Obj;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
};
const Model = ({
  children,
  button,
  modelClassName = "",
  setIsOpen,
  isOpen,
  modelStyle = {},
}: Props) => {
  return (
    <div>
      <div onClick={() => setIsOpen((pre) => !pre)}>{button}</div>
      <>
        <div
          className={`${modelClassName} model-content`}
          style={{
            ...modelStyle,
            transform: isOpen ? "translate(0,0)" : "translate(0,20px)",
            opacity: isOpen ? 1 : 0,
            pointerEvents: isOpen ? "auto" : "none",
          }}
        >
          <div
            style={{
              position: "relative",
              height: "100%",
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="model-close-btn"
            >
              <XIcon />
            </button>
            {children}
          </div>
        </div>
        {isOpen && (
          <div className="model-out" onClick={() => setIsOpen(false)}></div>
        )}
      </>
    </div>
  );
};

export default Model;
