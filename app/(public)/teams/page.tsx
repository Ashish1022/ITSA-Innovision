import React from 'react';
import dynamic from 'next/dynamic';

const TeamCard = dynamic(() => import('./_components/TeamCard'), {
  ssr: false,
});

import { teams } from '@/constants';
import Transition from '@/components/shared/Transition';


const Teams: React.FC = () => {
  return (
    <>
      <Transition />
      <div className="page bg-fixed max-md:p-6 p-8">
        <div className="teams-grid">
          {teams.map((team, index) => (
            <TeamCard key={index} team={team} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Teams;
