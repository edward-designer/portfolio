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
  const toRight = useRef<boolean>(true);

  useEffect(() => {
    if (
      refContent.current &&
      innerWidth < refContent.current.scrollWidth &&
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
        if (toRight.current) {
          refScrollX.current += 1;
        } else {
          refScrollX.current -= 1;
        }

        if (
          refScrollX.current >=
          elContent.scrollWidth - elContainer.clientWidth
        ) {
          toRight.current = false;
        }
        if (refScrollX.current <= 0) {
          toRight.current = true;
        }
        elContent.style.transform = `translate(-${refScrollX.current}px)`;
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className="relative m-10 w-[99vw] ml-[-50vw] left-[50%] overflow-x-scroll scrollbar-hidden"
    >
      <div
        ref={refContent}
        className="flex gap-6 [&>*]:shrink-0 transition-all duration-75"
      >
        {children}
      </div>
    </div>
  );
};

export default Slider;
