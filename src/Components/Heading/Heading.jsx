import React from 'react'

const Heading = ({ heading, subtitle, subtitle2, desc, icon }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12 animate-fadeIn">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
        {icon}
        <span className='mt-0.5'>{heading}</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
        {subtitle} <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-teal-500">{subtitle2}</span>
      </h2>
      <p className="text-gray-500 text-base leading-relaxed">
        {desc}
      </p>
    </div>


  )
}

export default Heading;