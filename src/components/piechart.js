import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const gradients = (
  <defs>
    <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#c08c02" />
      <stop offset="100%" stopColor="#9f6600" />
    </linearGradient>
    <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#53381b" />
      <stop offset="100%" stopColor="#2f200b" />
    </linearGradient>
    <linearGradient id="gradient3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#564533" />
      <stop offset="100%" stopColor="#2f2818" />
    </linearGradient>
    <linearGradient id="gradient4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#96846c" />
      <stop offset="100%" stopColor="#655845" />
    </linearGradient>
    <linearGradient id="gradient5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#0f5840" />
      <stop offset="100%" stopColor="#614103" />
    </linearGradient>
    <linearGradient id="gradient6" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#0E3452" />
      <stop offset="100%" stopColor="#082537" />
    </linearGradient>
    <linearGradient id="gradient7" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#d5c9b1" />
      <stop offset="100%" stopColor="#bbac95" />
    </linearGradient>
    <linearGradient id="gradient8" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor="#eee7dd" />
      <stop offset="100%" stopColor="#eee7dd" />
    </linearGradient>
    {/* Add more gradients as needed */}
  </defs>
);
export default function BasicPie() {
  return (
    <div style={{ position: 'relative' }}>
      <svg width="0" height="0" className='svgPiechart'>
        {gradients}
      </svg>
      <div className='boxshadow'>
      <PieChart
      series={[
        {
          data: [
            {
              id: 0,
              value: 25,
              label: ' Public Sale',
              color: 'url(#gradient5)',
              itemStyle: { stroke: 'black', strokeWidth: 1 },
            },
            {
              id: 1,
              value: 7,
              label: ' Founders & Core Team',
              color: 'url(#gradient1)',
              itemStyle: { stroke: 'black', strokeWidth: 1 },
            },
            {
              id: 2,
              value: 3,
              label: 'Family Fund',
              color: 'url(#gradient2)',
              itemStyle: { stroke: 'black', strokeWidth: 1 },
            },
            {
              id: 4,
              value: 10,
              label: 'Marketing & Partnerships',
              color: 'url(#gradient3)',
              itemStyle: { stroke: 'black', strokeWidth: 1 },
            },
            {
              id: 3,
              value: 10,
              label: 'Development',
              color: 'url(#gradient4)',
              itemStyle: { stroke: 'black', strokeWidth: 1 },
            },
            {
              id: 6,
              value: 10,
              label: 'Strategic Treasury',
              color: 'url(#gradient7)',
              itemStyle: { stroke: 'black', strokeWidth: 1 },
            },
            {
              id: 7,
              value: 20,
              label: 'Liquidity Pool',
              color: 'url(#gradient8)',
              itemStyle: { stroke: 'black', strokeWidth: 1 },
            },
            {
              id: 5,
              value: 15,
              label: 'Staking & Community Incentives',
              color: 'url(#gradient6)',
              itemStyle: { stroke: 'black', strokeWidth: 1 },
            },
          ],
        },
      ]}
      width={250}
      height={250}
    />
    </div>
    </div>
  );
}
