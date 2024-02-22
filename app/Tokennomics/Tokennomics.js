import React from 'react'

const ProgressBar = ({ label, percentage }) => {
    return (
      <div className="mb-4">
        <p className="font-semibold">{label}</p>
        <div className="h-2 bg-gray-300 rounded-full">
          <div className="h-full bg-blue-500 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
    );
  };

  const CircularProgressBar = ({ totalSupply, burnSupply }) => {
    const radius = 100;
    const strokeWidth = 10;
    const normalizedRadius = radius - strokeWidth * 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const totalOffset = circumference - (totalSupply / 100) * circumference;
    const burnOffset = circumference - (burnSupply / 100) * circumference;
  
    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#ffc100"
          fill="none"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#FF0000"
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={burnOffset + ' ' + circumference}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
        <circle
          stroke="#ff4d00"
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={totalOffset + ' ' + circumference}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />
      <text className='text-wrap' x="50%" y="50%" textAnchor="middle" fill="#FFFFFF">
  <tspan x="50%" dy="-1.2em" className='block text-xs mb-8'fill='red'>Current Supply: {totalSupply}%</tspan>
  <tspan x="50%" dy="1.2em" className='text-white block text-sm '>Total Supply: 1 Trillion</tspan>
  <tspan x="50%" dy="1.2em" className='text-orange-400 block text-xs' fill="orange">Burn Supply: {burnSupply}%</tspan>
</text>

      </svg>
    );
  };
 
  

const Tokennomics = () => {
    const totalSupply = 60;
  const burnSupply = 40;
  return (
    <div><h1 className="text-lg font-semibold text-center">Tokennomics</h1>
    <p className='text-center px-4'>Nimbi Tokenomics demonstrates its vision and goal, a meme token that is more than a meme
</p>
<p className='text-center'>$Nimbi is designed to be deflationary. 40% of total supply will be burned at launch.</p>
<div className="container mx-auto p-4 bg-gray-800 rounded-md">
  <h1 className="text-2xl font-semibold mb-4 text-center">Token Metrics</h1>
  <div className="flex">
    <div className="w-1/2 pl-12 pt-12">
      <CircularProgressBar totalSupply={totalSupply} burnSupply={burnSupply} />
    </div>
    <div className="w-1/2">
      <ProgressBar label="Burn Supply" percentage={40} />
      <ProgressBar label="Total Supply" percentage={60} />
      <ProgressBar label="Presale" percentage={40} />
      <ProgressBar label="Staking" percentage={20} />
      <ProgressBar label="Dev Team/Marketing" percentage={20} />
      <ProgressBar label="Community" percentage={20} />
    </div>
  </div>
</div>

    <div>
    </div>
    </div>
  )
}

export default Tokennomics