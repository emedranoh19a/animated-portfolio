import { motion, useMotionValue } from "framer-motion";

export default function Achievements({ title, amount, icon }) {
  //TODO: make sure to register this function as a recipy. It would be good to uunderstand it.
  const number = useMotionValue(0);

  const count = (amount) => {
    //amount is the final number we want to count to.
    let i = 0;
    const updateCount = () => {
      //store a reference to the timeout function.
      let timeOut;
      if (i <= amount) {
        number.set(i++);
        timeOut = setTimeout(updateCount, 0);
      } else {
        clearTimeout(timeOut);
      }
    };
    updateCount();
  };

  return (
    <div className="flex items-end gap-x-3">
      <span className="text-4xl text-gray-300 lg:text-2xl">{icon}</span>
      <h1 className="flex flex-col gap-y-2">
        <motion.span
          className="text-2xl lg:text-xl font-light text-yellow-500"
          whileInView={() => count(amount)}
          viewport={{ once: true }}
        >
          {number}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500">{title} </span>
      </h1>
    </div>
  );
}
//Note: Since Icon is a JSX, it might better be a children  of this component.
