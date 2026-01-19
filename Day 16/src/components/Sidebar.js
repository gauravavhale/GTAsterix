import { motion } from 'framer-motion'
    
    const sideVariants = {
        open : {
            x:0,
            transition:{
                type: "string",
                stiffness: 80,
                damping: 15,
                staggerChildren: 0.1,
            },
        },
        closed : {
            X:"-100%",
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
            },
        }
    }

    const itemVariants = {
        open: {opacity: 1, x:0},
        closed: {opacity: 0, x:-20}
    }

    const Sidebar = ({isOpen, setOpen}) => {
    return (
    <motion.div
        variants={sideVariants}
        animate={ isOpen ? "open" : "closed" }
        className='fixed top-0 left-0 h-screen w-64 bg-black text-white p-6 z-50'
    >
        <button
            onClick={() => setOpen(false)}
            className="mb-8 text-right w-full"
        >
            ✕
        </button>

        <motion.ul className="space-y-6">
        {["Dashboard", "Orders", "Products", "Customers", "Logout"].map(
          (item) => (
            <motion.li
              key={item}
              variants={itemVariants}
              className="text-lg cursor-pointer hover:text-gray-400"
            >
              {item}
            </motion.li>
          )
        )}
      </motion.ul>
        
    </motion.div>
  )
}

export default Sidebar