import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      when: 'beforeChildren',
      staggerChildren: 0.4
    }
  }
}

const childVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120
    }
  }
}

const Order = ({ pizza }) => {

  const [showTitle, setShowTitle] = useState(true)
  setTimeout(() => {
    setShowTitle(false)
  }, 1500)

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showTitle && <motion.h2
          exit={{ y: -1000 }}
        >Thank you for your order :)</motion.h2>}
      </AnimatePresence>
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;