import React from "react";

export default function Parent(props, ref1) {
  const act = useAnimation();
  const [ref1, inView1] = useInView();

  useEffect(() => {
    if (inView1) {
      act.start({
        backgroundColor: "white",
        transition: {
          duration: 0.3,
        },
      });
    }
    if (!inView1) {
      act.start({
        backgroundColor: "#333333",
        transition: {
          duration: 0.3,
        },
      });
    }
  }, [act, inView1]);
  return <></>;
}
