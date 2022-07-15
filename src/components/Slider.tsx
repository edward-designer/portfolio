import React, {
  ReactNode,
  useContext,
  useRef,
  useCallback,
  useEffect,
} from "react";
import useAnimationFrame from "../utils/useAnimationFrame";
import { ViewPortContext } from "../utils/viewportObserver";

const Slider = ({
  children,
  inFocus,
}: {
  children: ReactNode;
  inFocus: boolean;
}) => {
  const { innerWidth } = useContext(ViewPortContext);
  const refScrollX = useRef<number>(0);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);
  const refEnabled = useRef<boolean>(false);

  useEffect(() => {
    if (
      refContent.current &&
      innerWidth < refContent.current.scrollWidth / 2 &&
      inFocus
    ) {
      refEnabled.current = true;
    } else {
      refEnabled.current = false;
    }
  }, [innerWidth, inFocus]);

  useAnimationFrame(
    refEnabled.current,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;
      if (elContainer && elContent) {
        refScrollX.current += 1;
        if (refScrollX.current >= elContent.scrollWidth / 2 + 11) {
          refScrollX.current = 0;
        }
        elContent.style.transform = `translate(-${refScrollX.current}px)`;
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className="relative m-10 mt-20 w-[99vw] ml-[-50vw] left-[50%] overflow-x-scroll scrollbar-hidden"
    >
      <div ref={refContent} className="flex gap-6 [&>*]:shrink-0">
        <div className="flex gap-6 [&>*]:shrink-0">{children}</div>
        <div className="flex gap-6 [&>*]:shrink-0">{children}</div>
      </div>
    </div>
  );
};

export default Slider;
