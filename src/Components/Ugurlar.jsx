import React, { useEffect, useState } from 'react'
import "../Css/ugurlarimiz.css"
import ugur1 from "../../public/images/Heart.svg"
import ugur2 from "../../public/images/Smiley.svg"
import ugur3 from "../../public/images/Receipt8.svg"
import { InView, useInView } from 'react-intersection-observer';

function Ugurlar() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView) return;

    const interval1 = setInterval(() => {
      setCount1(prev => {
        if (prev < 300) return prev + 1;
        clearInterval(interval1);
        return prev;
      });
    }, 10);

    const interval2 = setInterval(() => {
      setCount2(prev => {
        if (prev < 1000) return prev + 4;
        clearInterval(interval2);
        return prev;
      });
    }, 10);

    const interval3 = setInterval(() => {
      setCount3(prev => {
        if (prev < 700) return prev + 2;
        clearInterval(interval3);
        return prev;
      });
    }, 10);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [inView]);

  return (
    <div className='ugurlar' ref={ref}>
        <div className="ugur1">
            <img src={ugur1} alt="Əməliyyat" />
            <p>{count1}+ peşəkar əməliyyat</p>
        </div>
        <div className="ugur1">
            <img src={ugur2} alt="Məmnuniyyət" />
            <p>{count2}+ pasiyent məmnuniyyəti</p>
        </div>
        <div className="ugur1">
            <img src={ugur3} alt="Məqalə" />
            <p>{count3}+ Məqalələr</p>
        </div>
    </div>
  )
}

export default Ugurlar