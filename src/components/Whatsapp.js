import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function Whatsapp() {
  return (
    <div>
          <div className="fixed bottom-5 right-5 md:right-10">
      <button className="bg-green-500 text-white p-3 rounded-full flex items-center space-x-2">
        <FaWhatsapp size={24} />
        <span>WhatsApp</span>
      </button>
    </div>
    </div>
  )
}

export default Whatsapp